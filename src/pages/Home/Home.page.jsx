import React from 'react'
import FooterC from '../Footer/FooterComponent.page'
import Menu from '../Menu/Menu.page'
import PlaceCards from '../PlaceCards/PlaceCards.page'
import './Home.page.css'
import { SliderData } from '../SliderComponent/SliderData'
import SliderComponent from '../SliderComponent/SliderComponent'
import Button from '@material-ui/core/Button';
import ReactPlayer from "react-player";

export default function Home( ) {
     
    return (
        <div>
            <Menu />
            <div className="ImageCarousel">
                <SliderComponent slides={SliderData} />
            </div>
            <div class="container">
                <h1 className="d-flex justify-content-center">Why travel with us ?</h1>
                <div class="row imageintravel">
                    <div class="col-md-4 d-flex justify-content-center">
                        <div className="container">
                            <div className="row">
                                <img src="/Assets/Comman_images/worldclass.svg" alt="worldclass" /><br />
                            </div>
                            <div className="row">
                                <h3>World Class Tours</h3><br />
                            </div>
                            <div className="row">
                                <p>Spain is a beloved country and a chosen destination for plenty of expats, especially those from the UK.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 d-flex justify-content-center">
                        <div className="container">
                            <div className="row">
                                <img src="/Assets/Comman_images/lovetravel.svg" alt="worldclass" />
                            </div>
                            <div className="row">
                                <h3>Traveling with love</h3>
                            </div>
                            <div className="row">
                                <p>Spain is a beloved country and a chosen destination for plenty of expats, especially those from the UK.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 d-flex justify-content-center">
                    <div className="container">
                            <div className="row">
                                <img src="/Assets/Comman_images/hottours.svg" alt="worldclass" />   
                            </div>
                            <div className="row">
                                <h3>Best selected Destinations</h3>
                            </div>
                            <div className="row">
                                <p>Spain is a beloved country and a chosen destination for plenty of expats, especially those from the UK.</p>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img className="img-fluid" src="/Assets/Spain/Barcelona/5.jpg" alt="demo" />
                        </div>
                        <div className="col">
                            <h1>Bienvenida a españa</h1>
                            <br />
                            <p style={{ textAlign: "justify" }}>Spain is the perfect destination for travellers looking for a European trip and, while the best-known spots are popular for a reason, it’s also full of hidden gems. Culture Trip has rounded up the best of both, from buzzing cities to quaint mountain villages. Here are the 15 places that will get you dreaming of a Spanish adventure.</p>
                        </div>
                    </div>
                </div>
            <div className="why">
                <h1><b>Why Spain?</b></h1><br />
                <p>Spain is a beloved country and a chosen destination for plenty of expats, especially those from the UK. We can’t really blame them! The weather, the seaside, the relaxed way of living,... who wouldn’t want to come to Spain? Millions of tourists visit Spain every single month, but if you still haven’t added this beautiful country to your bucket list. From the dramatic, imposing mountains to the countless glistening beaches that dot its coastlines, Spain is a country full of natural beauty and inspiring landscapes.</p>
            </div>
            <div className="cards">
            <h1><b>Destinations</b></h1><br />
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
                        description={`Exploring Northern Spain, are you? What about a stop in Bilbao? Bilbao is a city full of history, character, and Basque country culture with plenty of free, historic, and even weird things to do and check out!`}
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
                </div>
            </div>
            <div className="moreClass">
            <Button href="/destinations" variant="contained" >More Destinations</Button>
            </div>

            <div className="videoContent" style={{backgroundImage:"url('/Assets/Spain/seville/1.jpg')"}}>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col for-two-div"> 
                        <h3>Why to visit Spain?</h3>
                        <hr className="line"/>
                        <span>Seriously. It’ll take you a long time before you visit every single beach in Spain, but they’re all worth it. Beautiful, scenic, and incredibly relaxing, the Spanish beaches are one of the many reasons why so many people choose Spain as their beloved destination. Just imagine living close to a beach and coming down whenever you fancy! It’s not just the ocean that attracts people - Spain features some of the most beautiful landscapes and many Spaniards love taking advantage of a sunny day and decide to go for a hike.</span>
                    </div>
                    <div className="col"> 
                        <ReactPlayer url="https://www.youtube.com/watch?v=IftfIk-pRwI&ab_channel=RyanShirley" />
                    </div>
                    </div>
                </div>
                
            </div>

            <FooterC />
        </div>

    )
}


