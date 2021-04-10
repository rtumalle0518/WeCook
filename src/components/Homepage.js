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
            <div className="words">
            <p>
                Welcome back!
                <h3>Let's eat some
                <span className="colourtext"> HEALTHY </span> Food
                </h3>
                <p className="paragraph">Welcome back to WeCook! Check out your meal plan for today
                    or head over to the cookbook to find new and exciting meals.
                    Don't forget to leave a rating on meals you have tried.
                    <div className='Foodpics'>
                    <img
                        src={foodovals}
                        /*width="175"
                        height="40" 
                        className="d-inline-block align-top"*/
                        alt="Three pictures of food in ovals"
                    />   
                         <div className='Testimony1'>
                        <img 
                        src={testimony1}
                        alt="Testimony1 of user"
                        />
                        <div className='Testimony2'>
                            <img
                            src={testimony2}
                            alt="Testimony2 of user"
                            />
                        </div>
                        </div>
                    </div>
                </p>
            </p>
            <Footer></Footer>
        
    </div>
    </div>
    )
}
