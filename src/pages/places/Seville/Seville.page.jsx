import Menu from '../../Menu/Menu.page'
import React from 'react';
import FooterComponent from '../../Footer/FooterComponent.page';
import BannerComponent from '../../BannerComponent/BannerComponent.page.jsx'
import reactDom from 'react-dom';
import VideoComponent from '../../VideoComponent/VideoComponent.page'
import Gallary from '../../Gallary/Gallary.page';

export default function Seville({sendRoute}){
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
            <BannerComponent title={'Seville'} imageLink={`/Assets/Spain/seville/1.jpg`}/>
            <div className="container visitingPlace">
                <div className="row row-no-gutters">
                    <div className="col-xs-12 col-md-8">
                        <br />
                        <p style={styleObject}><b>Seville is a city that leaves its mark, and many people define it as special. It might be because of the grandeur of its monuments. Or perhaps the charm of areas such as Triana.</b></p>
                        <p style={styleObject}>It may possibly be the scent of jasmine in its squares or the Spanish guitar music of its streets. Some say that it’s the tradition of its festivals, and many are convinced its tapas are the real reason.</p>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <img src="/Assets/Spain/seville/4.jpg" alt="bilbao-pic" />
                    </div>
                </div>
                <hr className="lineOnPlace"/>
                <div className="row row-no-gutters">
                    <div className="col">
                        <h2>A monumental city</h2>
                        <p>You can see it for yourself in the few metres that separate the Giralda tower, the Cathedral and the Real Alcázar of Seville. La Giralda is a city icon and one of its main charms lies in its viewpoint. The views of Seville are fantastic with its courtyards of orange trees, typical in Andalusia, and a close-up of the largest Gothic temple in Europe, the Cathedral. A visit to the Real Alcázar reveals an extraordinary palace full of details. If you visit in the summer, take advantage of the night visits and the festival held in its gardens.</p>
                        <p>Seville is much more than its undeniable monumentality. It is a city of lively streets and large open spaces such as the huge Plaza de España, María Luisa Park, and the avant-garde Setas de Sevilla. And if you want to enjoy the authentic atmosphere of Seville, try going for tapas in the old town, in popular areas such as Alameda, Macarena, Nervión, Los Remedios or Triana. Marinated ‘pescaíto’ (fish), small filled rolls, typical snails, fino (white wine), manzanilla (sweet wine) or a cold beer are a must on any tapas outing.</p>
                        <h2>Popular tradition of the south</h2>
                        <p>In Seville, tradition is always in fashion. From flamenco shows and Spanish guitar music to typical ceramics and crafts, which are always a good souvenir of the city. There are plenty of shops and workshops in Triana. And it’s easy to enjoy flamenco at one of the many ‘tablaos’ or neighbourhood ‘peña’ groups. In fact, Seville hosts what is perhaps the most important international festival of this art: The Biennial.</p>
                        <p>The tradition of Seville is also reflected in its more international festivals. Two good examples are the April Fair and Holy Week. The first is all about joy and passion for popular Andalusian art, an unbeatable chance to enjoy the sound of the Spanish guitar, flamenco fashion and festive Seville. Holy Week is a passionate festival full of emotional moments. To understand it, the best option is to witness one of the much-visited religious processions or hear a live ‘saeta’ (emotional flamenco song dedicated to the religious figures).</p>
                    </div>
                </div>
                <hr className="lineOnPlace"/>
                <div className="row row-no-gutters">
                    <div className="col">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101459.59291848082!2d-6.025098541821587!3d37.375350098744654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c1114be6291%3A0x34f018621cfe5648!2sSeville%2C%20Spain!5e0!3m2!1sen!2sca!4v1625163898742!5m2!1sen!2sca" width="100%" height="400" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div>
                    <VideoComponent imageUrl={'/Assets/Spain/seville/3.jpg'} videoUrl={'https://www.youtube.com/watch?v=kb08lxcVXOs&ab_channel=Kristina%27sTravels'}/>
                </div>
                <hr className="lineOnPlace"/>
                <div className="row row-no-gutters">
                    <div className="col gallary">
                        <h2 className="mb-4">Gallary</h2>

                        <Gallary destination="seville" />
                        
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}