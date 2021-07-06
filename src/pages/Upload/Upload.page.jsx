import React, { useState} from 'react'
import { DropzoneArea } from 'material-ui-dropzone';
import { useDebounce } from 'use-debounce';


export default function Upload() {

    const [file, setFile] = useState(null)
    const [title,setTitle] = useState("");
   
    const selectedHandler = (e,file) => {
    console.log("sdd",e[0])
    setFile(e[0])
  }

  console.log("fff",file);
  const selectedHandlerTitle = e => {
    setTitle(e.target.value)
  }

  const sendHandler = () => {
    if(!file){
      alert('you must upload file')
      return
    }else if (file.size > 1048576){
      alert('Image must be less than 1 MB');
      return
    }
    if(!file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      alert('Select valid image');
      return
    }
    
    const formdata = new FormData()
    formdata.append('image', file)
    formdata.append('title', title)


    fetch('http://localhost:9000/images/post', {
      method: 'POST',
      body: formdata
    })
    .then(res => res.text())
    .then(res => console.log(res))
    .catch(err => {
      console.error(err)
    })

    document.getElementById('destination').value = null
    setFile(null)
    window.location.reload();
    alert("Thank you for upload image");

  }


    return (
        <div>
            <div className="container mt-5">
                <div className="card p-3">
                    <div className="row">
                    <div className="col-12">

                    <form>
                      
                        <div class="form-group row">
                            <label for="destination" class="col-sm-12 col-md-2 col-form-label">Select Destination</label>
                            <div class="col-sm-12 col-md-10">
                                <select class="form-control" id="destination" onChange={selectedHandlerTitle}>
                                    <option value="">Select Destination</option>
                                    <option value="barcelona">barcelona</option>
                                    <option value="Madrid">Madrid</option>
                                    <option value="Valencia">Valencia</option>
                                    <option value="Mallorca">Mallorca</option>
                                    <option value="seville">seville</option>
                                    <option value="Bilbao">Bilbao</option>
                                </select>                           
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-12 col-form-label">Upload Photo</label>
                            <div class="col-12">
                                <DropzoneArea
                                     
                                    acceptedFiles={['image/*']}
                                    dropzoneText={"Drag and drop an image here or click"}
                                    filesLimit={'1'}
                                    maxFileSize = {'1048576'}
                                    
                                    showFileNamesInPreview={true}
                                    onChange={(e,files) => {
                                        selectedHandler(e,file)
                                    }}
                                />                    
                            </div>
                        </div>
                        <div class="form-group row">
                            <div className="col-3 mt-4">
                            <button onClick={sendHandler} type="button" className="btn btn-primary col-12">Upload</button>
                            </div>
                        </div>

                        </form>
                    </div>


                         
                    </div>
                </div>
            </div>

          
        </div>
    )
}
