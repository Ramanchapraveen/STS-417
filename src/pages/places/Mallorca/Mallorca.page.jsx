import Menu from '../../Menu/Menu.page'
import React from 'react';
import FooterComponent from '../../Footer/FooterComponent.page';
import BannerComponent from '../../BannerComponent/BannerComponent.page.jsx'
import reactDom from 'react-dom';
import VideoComponent from '../../VideoComponent/VideoComponent.page'
import Gallary from '../../Gallary/Gallary.page';

export default function Mallorca({sendRoute}){
    const styleObject={
        fontSize: 22,
        lineHight: 1.15,
        fontWeight: 400,
        letterSpace: 1.15
    }
    const sendHome = (status) => { // the callback. Use a better name
        console.log("home",status);

        sendRoute(status);
        
      };
    return(
        <div>
            <Menu sendHome={sendHome} />
            <BannerComponent title={'Mallorca'} imageLink={`/Assets/Spain/mallorca/2.jpg`}/>
            <div className="container visitingPlace">
                <div className="row row-no-gutters">
                    <div className="col-xs-12 col-md-8">
                        <br />
                        <p style={styleObject}><b>Mallorca is the largest island in Spain (by area) and the second most populated of the Balearic Islands. The island is filled with beautiful secluded coves, long sandy beaches, limestone mountains, cycling routes, hiking trails, authentic towns, scenic coastal drives, wineries & a ton of fresh produce to indulge in.</b></p>
                        <p style={styleObject}>Did you know that hidden inside the Caves of Drach there’s a huge lake? It's over 115 metres long, and it's called Lake Martel. Prepare to be amazed! It's no surprise that these waters are considered to be one of the largest subterranean lakes in the world.</p>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <img src="/Assets/Spain/mallorca/3.jpg" alt="bilbao-pic" />
                    </div>
                </div>
                <hr className="lineOnPlace"/>
                <div className="row row-no-gutters">
                    <div className="col">
                        <h2>The secret of the Caves of Drach in Mallorca</h2>
                        <p>To get there you'll need to go directly to the town of Manacor, near Porto Cristo, one of the prettiest fishing villages in the west of Mallorca, in the Balearic Islands. </p>
                        <p>The Caves of Drach are four stunning natural beauties called the Black Cave, the White Cave, the Cave of Luis Salvador, and the Cave of the French. They're all interconnected and are an extremely important part of the heritage of the area.</p>
                        <p>It was in 1896 that the French speleologist E. A. Martel ventured into the depths of the cave, observed how the rain slowly pooled in the hollows, seeping through walls, and creating small chambers full of magnificent stalactites and stalagmites.</p>
                        <h2>Roam the Streets of Soller</h2>
                        <p>It was half the fun getting here as our mate Google took us for a ride with a few wrong turns. However, it gave us the chance to see behind the scenes of Soller as we followed the extremely narrow back streets (the type of narrow back streets that make your car sensor beep because you’re too close to the wall kinda streets) surrounded by cottages, farmhouses and locals carrying their groceries home. It was 100% authentic.</p>
                        <p>Once you reach the town, there is one main street and a beautiful plaza – Plaça Constitució that is dotted with cafes, ice-cream stores (essential), beautiful architecture & typical Spanish apartments with colourful green doors.</p>
                        <p>One of the most popular attractions to do in Soller is the journey on the vintage tram from the town’s centre to Port de Soller. The tram journey is 30 minutes & the timetable changes regularly based on the time of the year. You can find all relevant information here. Alternatively, you can reach Soller from Palma via Tren De Soller (aka a train) which has been in operation since 1912. The train route takes roughly one hour and allows you to discover some of Mallorca’s most scenic countryside whilst sitting inside old wooden carriages.</p>
                    </div>
                </div>
                <hr className="lineOnPlace"/>
                <div className="row row-no-gutters">
                    <div className="col">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786859.1126588429!2d2.3511985357548286!3d39.61215153732058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297b8766606c129%3A0xb7eb9bff02d2ecc0!2sMajorca!5e0!3m2!1sen!2sca!4v1625162275318!5m2!1sen!2sca" width="100%" height="400" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div>
                    <VideoComponent imageUrl={'/Assets/Spain/mallorca/4.jpg'} videoUrl={'https://www.youtube.com/watch?v=iGkiJYmTyw0&ab_channel=GabrielTraveler'}/>
                </div>
                <hr className="lineOnPlace"/>
                <div className="row row-no-gutters">
                    <div className="col gallary">
                        <h2 className="mb-4">Gallary</h2>

                        <Gallary destination="Mallorca" />
                        
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}