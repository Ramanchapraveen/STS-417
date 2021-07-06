import Menu from '../../Menu/Menu.page'
import React from 'react';
import FooterComponent from '../../Footer/FooterComponent.page';
import BannerComponent from '../../BannerComponent/BannerComponent.page.jsx'
import './Barcelona.page.css'
import reactDom from 'react-dom';
import VideoComponent from '../../VideoComponent/VideoComponent.page';
import Gallary from '../../Gallary/Gallary.page';


export default function Barcelona({sendRoute}){
    const sendHome = (status) => { // the callback. Use a better name
        console.log("home",status);

        sendRoute(status);
        
      };

    const styleObject={
        fontSize: 22,
        lineHight: 1.15,
        fontWeight: 400,
        letterSpace: 1.15
    }
    return(
        <div>
            <Menu sendHome={sendHome} />
            <BannerComponent title={'Barcelona'} imageLink={`/Assets/Spain/Barcelona/7.jpg`}/>
            <div className="container visitingPlace">
                <div className="row row-no-gutters">
                    <div className="col-xs-12 col-md-8">
                        <br />
                        <br />
                        <br />
                        <p style={styleObject}><b>Barcelona is a city with a wide range of original leisure options that encourage you to visit time and time again. Overlooking the Mediterranean Sea, and famous for Gaudí and other Art Nouveau architecture, Barcelona is one of Europe’s trendiest cities.</b></p>
                        <br />
                        <p style={styleObject}>It’s a hub of new trends in the world of culture, fashion and cuisine. It combines the creativity of its artists and designers with respect and care for local traditions. The charm and slower pace of the old town, the avant-garde vibe of more modern neighbourhoods, and the fast pace of one of the world’s most visited cities coexist in Barcelona.</p>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <img src="/Assets/Spain/Barcelona/8.jpg" alt="barcelona-pic" />
                    </div>
                </div>
                <hr className="lineOnPlace"/>
                <div className="row row-no-gutters">
                    <div className="col">
                        <h2>Trendy destination</h2>
                        <p>Barcelona is a showcase for the latest developments in fashion. Strolling around its streets you can discover a world of options for a day of shopping. From glamour and major brands in iconic stores set in emblematic buildings, such as the Paseo de Gracia or Avinguda Diagonal, to alternative and innovative design in areas such as the Born district. Barcelona is also brimming with traditional shops and you can visit century-old stores and ateliers that will surprise you with their attention to detail.</p>
                        <p>The Mediterranean character and streets full of ambience also set the trend in Barcelona. The possibilities are almost endless, ranging from popular options such as a stroll down Las Ramblas or traditional markets such as La Boquería, to relaxing moments on the city beaches or the many pavement cafés in the old town. You can even discover the city in an original way with Barcelona Tourist Office’s programme of tours. These include guided and themed tours; routes in vintage cars, or on Segways or bicycles; boat tours, and helicopter flights.</p>
                        <h2>A city to visit again</h2>
                        <p>Barcelona draws visitors to its famous sights, like the Sagrada Familia, Parc Güell, Casa Batlló and La Pedrera. But they can also discover a city full of pleasant surprises on each trip.</p>
                        <p>A walk along the seafront, evenings on a rooftop terrace with views over the city skyline, spacious parks such as Parc de Montjüic or Ciutadella, the marina, Olympic village, and everything to do with FC Barcelona; a range of options for new experiences on each visit.</p>
                        <p>Culinary options are also varied, with world renowned haute cuisine restaurants, traditional Catalan dishes, food markets, and establishments that take you around the world with their flavours...</p>
                        <p>The city’s cultural agenda also includes major art centres, like the Picasso Museum, the National Art Museum of Catalonia, and CaixaForum; a wide range of festivals and one of Spain’s leading opera houses, Gran Teatre del Liceu.</p>
                    </div>
                </div>
                <hr className="lineOnPlace"/>
                <div className="row row-no-gutters">
                    <div className="col">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95777.33906295506!2d2.078727746937939!3d41.39489759385496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2sca!4v1625156690063!5m2!1sen!2sca" width="100%" height="400px" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>

                <div>
                <VideoComponent imageUrl={'/Assets/Spain/Barcelona/9.jpg'} videoUrl={'https://www.youtube.com/watch?v=brWYAALZes4&ab_channel=BEAUTIFULLOCATIONS'}/>
            </div>
            <hr className="lineOnPlace"/>
                <div className="row row-no-gutters">
                    <div className="col gallary">
                    <h2 className="mb-4">Gallary</h2>

                        <Gallary destination="barcelona" />
                        
                    </div>
                </div>
            </div>
           
            <FooterComponent />
        </div>
    )
}