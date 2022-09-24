
import React from 'react';
import './Header.css';
import logo from './logo.svg';
import SocialAccount from './SocialAccount/SocialAccount';

 export default function Header(){
    return(
        <>
        
        <a href="https://asadthejoy.web.app" >
          <img src={logo} className="App-logo" alt="logo" />
        </a> 
            <SocialAccount/>            
        </>
    );
}