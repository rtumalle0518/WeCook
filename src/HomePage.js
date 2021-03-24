import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './HomePage.css';
import { NavLink } from 'react-router-dom';








class Home extends Component  {
        
    render()
    {
        return ( 
                <div id='divId'>

                    <Button id="button"   >
                        <NavLink to="/Wecook" >GETTING STARTED</NavLink>
                    </Button>
                </div>
              
        );
    }

} 
  

export default Home;