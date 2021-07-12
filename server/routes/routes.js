const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const router = express.Router()

const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../../public/Assets/upload'),
    filename: (req, file, cb) => {
        cb(null, Date.now() +"-"+ file.originalname)
    }
})

const fileUpload = multer({
    storage: diskstorage
}).single('image')

router.get('/', (req, res) => {
    res.send('Welcome to my image app')
})


router.get('/:destination', (req, res) => {
    var destination = req.params.destination;
    req.getConnection((err, conn) => {
        if(err) return res.status(500).send('server error')
        conn.query(`select name as src from image where destination = ?`,[destination], (err, rows) => {
            if (err) {
                console.log("error: ", err);
                return;
              }
              res.send(JSON.parse(JSON.stringify(rows)));


    })

})
})


router.post('/images/post', fileUpload,(req, res) => {

    req.getConnection((err, conn) => {
        if(err) return res.status(500).send('server error')
        const type = req.file.mimetype
        const name = "/Assets/upload/"+req.file.filename
        const destination = req.body.title
        const data = fs.readFileSync(path.join(__dirname, '../../public/Assets/upload/' + req.file.filename))


 
        conn.query('INSERT INTO image (type,name,destination) values(?,?,?)', [type, name,destination], (err, rows) => {
            if(err) return res.status(500).send(err)

            res.send('image saved!')
        })
    })
    
})

module.exports = router