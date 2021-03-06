import React from 'react';
import './BannerComponent.page.css'

export default function BannerComponent({title, imageLink}){
    console.log(imageLink)
    return(
        <div className="banner" style={{backgroundImage:`url(${imageLink})`}}>
            <div class="container">
                <div class="d-flex justify-content-center align-item-center ">
                    <h1 className="titleText">{title}</h1>
                </div>
            </div>
        </div>
    )
}