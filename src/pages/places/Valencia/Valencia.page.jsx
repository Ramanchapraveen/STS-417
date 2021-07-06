import Menu from '../../Menu/Menu.page'
import React from 'react';
import FooterComponent from '../../Footer/FooterComponent.page';
import BannerComponent from '../../BannerComponent/BannerComponent.page.jsx'
import reactDom from 'react-dom';
import VideoComponent from '../../VideoComponent/VideoComponent.page'
import Gallary from '../../Gallary/Gallary.page';

export default function Valencia({sendRoute}){
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
            <BannerComponent title={'Valencia'} imageLink={`/Assets/Spain/Valencia/2.jpg`}/>
            <div className="container visitingPlace">
                <div className="row row-no-gutters">
                    <div className="col-xs-12 col-md-8">
                        <br />
                        <p style={styleObject}><b>A place full of contrasts awaits the visitor with a charming old town next to futuristic buildings. This is Valencia, one of Spain’s most welcoming cities to spend a few days. Beyond the cultural effervescence of its cities, a stroll is always a good idea, or bathing at its Mediterranean beaches. Of course, you must try the star dish, paella (true authenticity!) and other delicacies such as clams or tiger nut milk.</b></p>
                        <p style={styleObject}>Any time is a good time to visit Valencia, although if there is one day that is even more special than the rest, it's 19 March, when they celebrate the famous Fallas by burning gigantic ‘cardboard sculptures’. Its Mediterranean light, mild climate and the bewitching fire make this a city you’ll want to stay in.</p>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <img src="/Assets/Spain/Valencia/3.jpg" alt="bilbao-pic" />
                    </div>
                </div>
                <hr className="lineOnPlace"/>
                <div className="row row-no-gutters">
                    <div className="col">
                        <h2>A cultural visit: between classic and avant-garde</h2>
                        <p>Valencia is perfect to discover on foot One of the most fascinating attractions is the Plaza de la Reina, with the Cathedral and the Miguelete tower, where you should climb the 207 steps for some beautiful views. In the city centre you can also find the Silk Exchange -one of Valencia’s most beautiful buildings, a World Heritage Site, with its idyllic Patio de los Naranjos courtyard full of orange trees- and the Modernist Central Market – Europe’s largest fresh produce market, so taking in its stalls is a true experience. A few metres away is the National Ceramic Museum with its impressive façade or the Quart and Serrano Towers. And also museums such as the IVAM or many surprising spots full of street art.</p>
                        <p>A little further from the centre you can see the more modern side of Valencia: the City of Arts and Sciences. Designed by Santiago Calatrava and Félix Candela, it has fought to become a landmark with buildings such as the Oceanogràfic, Europe’s largest aquarium. Its original shapes make the ideal backdrop for taking a photo.</p>
                        <h2>A paella by the sea</h2>
                        <p>There is no better plan than visiting one of the large beaches and having a paella by the sea. Valencia offers over 300 days of sun a year. The Malvarrosa beach is one of the most well-known options. Once there, the fine golden sand and blue water remind you of the famous paintings in which Sorolla would depict the city. How could you resist a dip in the sea?</p>
                        <p>Those looking for ‘wilder’ landscapes can visit El Saler, or El Palmar and try its famous paella. You can end the day taking in the sunset at the Albufera, a navigable lake next to the sea known as the ‘mirror of the sun’, where you can see the best sunsets on the Mediterranean.</p>
                        <p>The beach is not the city’s only outdoor plan, you can also take a walk along the huge Turia city garden or a family visit to the Bioparc zoo.</p>
                        <p>When the evening comes, there is nothing better than sitting at a terrace or an innovative restaurant, perhaps with a Michelin Star, and enjoying the buzzing nightlife atmosphere of El Carmen, or new fashionable areas for foodies such as Ruzafa.</p>
                    </div>
                </div>
                <hr className="lineOnPlace"/>
                <div className="row row-no-gutters">
                    <div className="col">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101459.59291848082!2d-6.025098541821587!3d37.375350098744654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c1114be6291%3A0x34f018621cfe5648!2sSeville%2C%20Spain!5e0!3m2!1sen!2sca!4v1625163898742!5m2!1sen!2sca" width="100%" height="400" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div>
                    <VideoComponent imageUrl={'/Assets/Spain/Valencia/4.jpg'} videoUrl={'https://www.youtube.com/watch?v=hKyf2rrOidQ&ab_channel=WorldWanderista'}/>
                </div>
                <hr className="lineOnPlace"/>
                <div className="row row-no-gutters">
                    <div className="col gallary">
                        <h2 className="mb-4">Gallary</h2>

                        <Gallary destination="Valencia" />
                        
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}