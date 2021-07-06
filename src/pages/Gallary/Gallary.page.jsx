import React,{useState,useEffect} from 'react'
import ResponsiveGallery from 'react-responsive-gallery';


export default function Gallary(props) {

const [images1,setImage] = useState("");


useEffect(() => {
     let des = props.destination
    fetch('http://localhost:9000/'+des)
    .then(response => response.json())
        .then(data => setImage(data));
    


 }, []);

 


    return (
        <div>
            <ResponsiveGallery images={images1}/>
        </div>
    )
}
