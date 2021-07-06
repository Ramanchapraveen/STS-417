import Menu from '../../Menu/Menu.page'
import React from 'react';
import FooterComponent from '../../Footer/FooterComponent.page';
import BannerComponent from '../../BannerComponent/BannerComponent.page.jsx'
import './Bilbao.page.css'
import reactDom from 'react-dom';
import VideoComponent from '../../VideoComponent/VideoComponent.page'
import Gallary from '../../Gallary/Gallary.page';

export default function Bilbao({sendRoute}){
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
            <BannerComponent title={'Bilbao'} imageLink={`/Assets/Spain/Bilbao/4.jpg`}/>
            <div className="container visitingPlace">
                <div className="row row-no-gutters">
                    <div className="col-xs-12 col-md-8">
                        <br />
                        <p style={styleObject}><b>“The city of the Guggenheim” is an alternative name for this Basque Country destination as, since this original museum was built in 1997, Bilbao has been transformed forever. In fact, now it stands out for its ground-breaking structures created by prestigious architects, and which make it an international reference for modern design.</b></p>
                        <p style={styleObject}>Although, curiously, its unique character comes from combining avant-garde with the traditional feel of its old town, full of charming streets and bars offering pintxos, proof that they are passionate about gastronomy around here. All this has earned Bilbao a place of honour on the lists of Spain’s most interesting cities.</p>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <img src="/Assets/Spain/Bilbao/6.jpg" alt="bilbao-pic" />
                    </div>
                </div>
                <hr className="lineOnPlace"/>
                <div className="row row-no-gutters">
                    <div className="col">
                        <h2>A walk full of contrasts</h2>
                        <p>A visit to this city in the north of Spain could start with the Guggenheim Museum. It is one of the most surprising examples of 20th century architecture as Frank Gehry used 33,000 ultra-thin titanium plates to create its curious curves. Inside, it shares the world’s most important private collection of modern and contemporary art with New York and Venice. Bilbao is home to another of Spain’s most important art museums: the Museum of Fine Arts.</p>
                        <p>The city’s commitment to creating a ground-breaking, imaginative image also includes the Euskalduna Conference Centre, Norman Foster’s metro stations, the Isozaki and Pelli towers, the Zubizuri bridge designed by Calatrava or new cultural centres such as La Alhóndiga by Philippe Starck, built over an old wine cellar.</p>
                        <p>On the other hand, it’s impossible to imagine Bilbao without its characteristic old town, with over 700 years of history. It’s a pleasure to stroll around the famous “Seven Streets” and discover iconic buildings such as the Cathedral or the elegant theatre inspired by the Paris Opera House, the Arriaga, and a mix of shops and cafes, from traditional to cool.</p>
                        <h2>Two strengths: Basque cuisine and a green city</h2>
                        <p>The city of Bilbao is proof that gastronomy is an art in the Basque Country – one of the areas with the most Michelin Stars per person in the world. Plaza Nueva and its surrounding streets are full of busy bars serving their famous pintxos: small, delicious bites of food. Here, foodies can find their place among the buzzing bars, family-run restaurants and prestigious chefs. And they will also have the chance to visit the La Ribera Market, a beautiful building where you can have the produce that you purchase cooked for you, or where you can sample as selection of pintxos and Txakoli wine to the beat of live music.</p>
                        <p>Cultural and culinary Bilbao is also a green city, with parks such as Doña Casilda de Iturrizar, surrounded by hills (dare to ride the Artxanda cable car, a classic option to get a bird’s eye view of Bilbao). The estuary is another symbol of the regeneration of Bilbao. You can spot people paddle surfing on the water, or take a boat to the famous Hanging Bridge of Portugalete, declared a World Heritage Site.</p>
                        <p>And if that’s not enough, the beaches and stunning cliffs of Getxo are just over 30 minutes away on the metro.</p>
                    </div>
                </div>
                <hr className="lineOnPlace"/>
                <div className="row row-no-gutters">
                    <div className="col">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46486.86925359325!2d-2.96858387235686!3d43.26338066264081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4e27664b89b9%3A0x6534acc41e95a645!2sBilbao%2C%20Biscay%2C%20Spain!5e0!3m2!1sen!2sca!4v1625159961858!5m2!1sen!2sca" width="100%" height="400" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>

                <div>
                    <VideoComponent imageUrl={'/Assets/Spain/Bilbao/7.jpg'} videoUrl={'https://www.youtube.com/watch?v=dVEbjyjQesA&ab_channel=JonAndoniBaranda'}/>
                </div>

                <hr className="lineOnPlace"/>
                <div className="row row-no-gutters">
                    <div className="col gallary">
                    <h2 className="mb-4">Gallary</h2>

                        <Gallary destination="Bilbao" />
                        
                    </div>
                </div>
            </div>
            
            <FooterComponent />
        </div>
    )
}