import React from 'react';
import BannerComponent from '../BannerComponent/BannerComponent.page';
import FooterComponent from '../Footer/FooterComponent.page';
import Menu from '../Menu/Menu.page';
import PlaceCards from '../PlaceCards/PlaceCards.page';


export default function Destinations({sendRoute}){
    const sendHome = (status) => { // the callback. Use a better name
        console.log("home",status);

        sendRoute(status);
        
      };
    return(
        <div>
            <Menu sendHome={sendHome}/>
            <BannerComponent title={'Destinations in Spain'} imageLink={`/Assets/Spain/mallorca/8.jpg`}/>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center">
                    <PlaceCards 
                    description={`It’s true that Barcelona is famous for its sunny blue skies, stylish Mediterranean vibe, and quirky architecture, but did you know the city is also a cannabis smoker’s paradise? Or that is home to the biggest metropolitan park in the world?`}
                    imagePath={`/Assets/Spain/Barcelona/6.jpg`}
                    title={'Barcelona'}
                    cardLink ={`/destinations/barcelona`}/>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                    <PlaceCards 
                    description={`Exploring Northern Spain, are you? What about a stop in Bilbao? Bilbao is a city full of history, character, and Basque country culture with plenty of free, historic, and even weird things to do! Click Learn more to know more about this destination.`}
                    imagePath={`/Assets/Spain/Bilbao/2.jpg`}
                    title={'Bilbao'}
                    cardLink ={`/destinations/bilbao`}/>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                    <PlaceCards 
                    description={`Apart from having comfortable accommodation in Madrid, what can really improve your travel experience is knowing a bit of Spanish language. While most helpful phrases you can learn in a language school or from a travel guide.`}
                    imagePath={`/Assets/Spain/Madrid/5.jpg`}
                    title={'Madrid'}
                    cardLink ={`/destinations/madrid`}/>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center">
                    <PlaceCards 
                    description={`Seville, along with Córdoba and Granada, is one of the three most famous cities in Andalucia. Visiting Seville means discovering a very rich architectural and historical legacy, but also diving in Spanish culture.`}
                    imagePath={`/Assets/Spain/seville/3.jpg`}
                    title={'Seville'}
                    cardLink ={`/destinations/seville`}/>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                    <PlaceCards 
                    description={`Mallorca, also called Majorca, is the crown jewel of Spain's Balearic Islands. The most popular destination the Mediterranean, Mallorca is known for its beautiful coastline, secluded coves,limestone mountains.`}
                    imagePath={`/Assets/Spain/mallorca/1.jpg`}
                    title={'Mallorca'}
                    cardLink ={`/destinations/mallorca`}/>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                    <PlaceCards 
                    description={` Located on the east coast of Spain, on the shores of the Mediterranean, Valencia, after Madrid and Barcelona, ​​is the third city in Spain. Founded in the year 138 BC. C. by the Roman consul Tenth June Brutus Galaico.`}
                    imagePath={`/Assets/Spain/Valencia/1.jpg`}
                    title={'Valencia'}
                    cardLink ={`/destinations/valencia`}/>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}