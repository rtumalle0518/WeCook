import React from 'react';
import './contactus.scss'
import NavigationBar from './NavigationBar';
import Footer from "./Footer";

export default function ContactUs(){
    
    
    return(
        <div>
            <NavigationBar></NavigationBar>
            <div className="body1">
            <link rel="icon" href="/favicon.ico" />
                <h1>Need Help or Advice?</h1>
                <p className="sub-title1">Contact Us</p>

                <div id="contact-container">
                    <div className="contact-info">
                    <h4>
                            Contact Information
                        </h4>
                        <p> Fill up the form and then click (Send). </p>
                        <div className="icon-text">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                            <span>856-693-9008</span>
                        </div><div className="icon-text">
                        <i className="fa fa-address-book-o" aria-hidden="true"></i>
                            <span>team12swe@gmail.com</span>
                        </div>
                        <div className="icon-text">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <span>131 Recipe Park, New Brunswick, NJ 08906</span>
                        </div>
                        <div className="social-media">
                            <a href="$"className="icon-circle">
                                <i className="icon"></i>
                                </a>
                        </div>
                    </div>
                    <form>
                        <div className="col2">

                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" />
                            </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" />
                            </div>
                        </div>
                        <div className="col2">

                <div className="form-group">
                    <label>E-Mail</label>
        <               input type="email" />
                                </div>
                        <div className="form-group">
                        <label>Phone #</label>
                        <input type="tel" />
                                 </div>
                                  </div>
                                  <div className="col2">

                        <div className="form-group solo">
                            <label>Under what Topic do you Need Help In?</label>
                            <div className="radio-buttons"></div>
                            <div className="radio-buttons">
                            <input type="radio" id="radiorecipes" name="type" value="recipes"/><label for="radiorecipes">Recipes</label>
                            </div>
                            <div className="radio-buttons">
                            <input type="radio" id="radionutrition" name="type" value="nutrition"/><label for="radionutrition">Nutrition</label>
                            </div>
                            <div className="radio-buttons">
                            <input type="radio" id="radioother" name="type" value="other"/><label for="radioother">Other</label>
                            </div>
                            </div>
                            </div>
                            <div className="col">
                                <div className="form-group solo">
                                    <label>Message</label>
                                    <textarea></textarea>
                                </div>
                            </div>

                            <div className="col">

                        <div className="form-group solo right">
                            <button className="primary">Send</button>
                            </div>
                            </div>
                        
                                </form>
                         </div>
             
            
         
               </div>
        </div>
    )
}