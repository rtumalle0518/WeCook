import React from "react";
import logo from '../images/WeCookLogo.png';
import './Footer.css';

function Footer() {
  return (
            <div className="mainfooter">
                <div className="topwave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" >
            <path fill="#f4f4f4" fill-opacity="1" d="M0,128L60,117.3C120,107,240,85,360,101.3C480,117,600,171,720,181.3C840,192,960,160,1080,154.7C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
            </path>
            </svg>
    </div>
                     <div className="container">
                         <div className="row">
                          {/* Column1 */}
                            <div className="column1">
                               <img
                                     src={logo}
                                     width="175"
                                     height="40" 
                                     className="d-inline-block align-top"
                                    alt="We Cook Logo"
                                />
                                <p className="liscense">Copyright © 2021 WeCook. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
    </div>
  );
}
export default Footer;