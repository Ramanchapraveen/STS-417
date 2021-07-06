import Menu from '../../Menu/Menu.page'
import React from 'react';
import FooterComponent from '../../Footer/FooterComponent.page';
import BannerComponent from '../../BannerComponent/BannerComponent.page.jsx'
import './Madrid.page.css'
import reactDom from 'react-dom';
import VideoComponent from '../../VideoComponent/VideoComponent.page'
import Gallary from '../../Gallary/Gallary.page';



export default function Madrid({sendRoute}){
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
            <BannerComponent title={'Madrid'} imageLink={`/Assets/Spain/Madrid/9.jpg`}/>
            <div className="container visitingPlace">
                <div className="row row-no-gutters">
                    <div className="col-xs-12 col-md-8">
                        <br />
                        <p style={styleObject}><b>Madrid, cheerful and vibrant at all hours, is famous for being an open city with all kinds of people from anywhere in the world.</b></p>
                        <p style={styleObject}>In addition to its famous museums, busy streets dotted with all kinds of shops, restaurants with world cuisine or unbeatable nightlife, Madrid will surprise you with its charming, tranquil historic spots, with traditional and family-run century-old bars where friends meet up for a drink, all kinds of neighbourhoods, and cultural centres that offer an alternative type of tourism. Madrid has an authenticity that is hard to match. It is welcoming and diverse. Madrid is, without a doubt, one of Europe’s most interesting cities.</p>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <img src="/Assets/Spain/Madrid/7.jpg" alt="bilbao-pic" />
                    </div>
                </div>
                <hr className="lineOnPlace"/>
                <div className="row row-no-gutters">
                    <div className="col">
                        <h2>Culture and leisure at any time</h2>
                        <p>Anyone in search of culture will find some of the most important museums in the world, such as the Prado, Reina Sofía or Thyssen. But we must not forget smaller options, full of charm, such as the Sorolla Museum or cultural centres like the Matadero or Conde Duque, which are continuously offering innovative exhibitions, concerts, guided tours, etc.</p>
                        <p>Walking around Madrid means coming across iconic spots such as the stunning Royal Palace, the Plaza Mayor with 400 years of history, the buzzing Puerta del Sol, the famous Gran Vía full of shops, or the four tallest towers in Spain. Each neighbourhood offers a different experience: La Latina is ideal for tapas, Las Letras has the perfect combination of literature and fine dining… But Madrid also means relaxing in enormous parks such as the Parque del Retiro, and other lesser-known but equally charming parks like El Capricho.</p>
                        <h2>Capital of food, fashion and nightlife</h2>
                        <p>When it comes time to eat Madrid has two facets, both equally delicious. On the one hand, traditional bars where you can discover the old-fashioned, unpretentious atmosphere known as ‘castizo’, and why tapas are so much fun. On the other hand, avant-garde restaurants such as DiverXO and traditional markets converted into new gourmet spaces like San Miguel, which have become true temples of gastronomy. In Madrid, any time is a good time to enjoy a lively, urban atmosphere. For example, the increasingly famous weekend brunches in enclosed glass terraces, courtyards, rooftops, etc.</p>
                        <p>Fashionistas will find all options: luxury shops on the Golden Mile, vintage establishments in areas such as Fuencarral, new designer markets like the Mercado de Motores, and craft workshops and bookshops over 100 years old. At dusk, some of the city’s viewpoints will surprise you with unique sunsets, at the Temple of Debod or the rooftop bar of the Círculo de Bellas Artes, for example. And at the end of the day... nightlife in Madrid is legendary with live music, all kinds of ambiences, music until the sun comes up...</p>
                        <p>Madrid has its own beauty. Madrid stimulates and inspires. Madrid is an experience.</p>
                    </div>
                </div>
                <hr className="lineOnPlace"/>
                <div className="row row-no-gutters">
                    <div className="col">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194348.13981401525!2d-3.8196216908107608!3d40.437869758269194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sca!4v1625161332717!5m2!1sen!2sca" width="100%" height="400" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div>
                    <VideoComponent imageUrl={'/Assets/Spain/Madrid/5.jpg'} videoUrl={'https://www.youtube.com/watch?v=O1HTAwL9_bY&ab_channel=WonderlivTravel'}/>
                </div>
                <hr className="lineOnPlace"/>
                <div className="row row-no-gutters">
                    <div className="col gallary">
                        <h2 className="mb-4">Gallary</h2>
                        <Gallary destination="Madrid" />
                        
                    </div>
                </div>
            </div>
            
            <FooterComponent />
        </div>
    )
}