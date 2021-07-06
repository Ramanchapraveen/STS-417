import React from 'react'
import Menu from '../Menu/Menu.page'
import './Upload.style.css'
import Footer from '../Footer/FooterComponent.page'
import BannerComponent from '../BannerComponent/BannerComponent.page';
import Upload  from './Upload.page';

export default function UploadPage({sendRoute}) {
    const sendHome = (status) => { // the callback. Use a better name
        console.log("home",status);

        sendRoute(status);
        
      };
    return (
        
        <div>
            <Menu sendHome={sendHome} />
            <BannerComponent title={'Upload Photo'} imageLink={`/Assets/Spain/spain4.jpg`}/>
            <Upload />

            <Footer/>
        </div>
    )
}
