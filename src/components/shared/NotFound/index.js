import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <div className="NotFound">
    <div className="NotFound__content">
      <p className="NotFound__content-highlight">404</p>
      <p>Let's make that meal plan! :(</p>
      <p>Maybe a <Link to="/survey" className="NotFound__link">survey</Link> can help you find them meals</p>
    </div>
  </div>
);

export default NotFound;
