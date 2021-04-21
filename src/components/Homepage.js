import React from 'react'
import NavigationBar from './NavigationBar'
import Footer from './Footer'
import  './homepage.css';
import foodovals from '../images/Foodovals.png';
import testimony1 from '../images/Testimony1.png';
import testimony2 from '../images/Testimony2.png';
import firebase from '../firebase';
var user = firebase.auth().currentUser;
var name, uid;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        if (user != null) {
            name = user.displayName;
            uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                             // this value to authenticate with your backend server, if
                             // you have one. Use User.getToken() instead.
          }
    } else {
      // No user is signed in.
    }
  });

export default function Homepage() {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="words">
            <p>
                Welcome back {name}!
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
                    <div className="Foodpics">
                    <img
                        src={foodovals}
                        alt="Three pictures of food in ovals"
                        style={{width:400 , height:400, position: 'relative', top:-280, left:900 }}
                    />  
                    
                         <div className="Testimony1">
                        <img 
                        src={testimony1}
                        alt="Testimony1 of user"
                        style={{width:200, height:124.21, position: 'relative', top:-320 , left:500}}
                        />
                        <div className="Testimony2">
                            <img
                            src={testimony2}
                            alt="Testimony2 of user"
                            style={{width:200, height:124.21, position: 'relative', top: -380 , left:100}}
                            />
                        </div>
                        </div>
                    </div>
                    <Footer></Footer>
        
    </div>
    
    )
}
