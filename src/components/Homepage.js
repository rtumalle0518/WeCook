import React from 'react'
import NavigationBar from './NavigationBar'
import Footer from './Footer'
import  './homepage.css';
import foodovals from '../images/Foodovals.png';
import testimony1 from '../images/Testimony1.png';
import testimony2 from '../images/Testimony2.png';


export default function Homepage() {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="MContain">
            <div className="words">
            <p>
                Welcome back!
                <h3 className="secondtext">Let's eat some
                <span className="colourtext"> HEALTHY </span> Food
                </h3>
                <p className="paragraph">Welcome back to <span className="bold"> WeCook!</span> Check out your 
                                        meal plan for today or head over to the cookbook
                                        to find new and exciting meals. Don't forget to leave
                                        a rating on meals you have tried.
                </p>
            </p>
            </div>
                    <div className="flex-container">
                        
                    <img className="foodoval"
                        src={foodovals}
                        alt="Three pictures of food in ovals"
                    />  
                        <img className="test1"
                        src={testimony1}
                        alt="Testimony1 of user"
                        style={{width:200, height:124.21}}
                        />
                        
                            <img className="test2"
                            src={testimony2}
                            alt="Testimony2 of user"
                            style={{width:200, height:124.21}}
                            />
                        
                        
                    </div>
                </div>
                    <Footer></Footer>
        
    </div>
    
    )
}
