import React from 'react';
import './SocialAccount.css';
import facebook from './SocialMediaIcons/facebook.svg';
import instagram from './SocialMediaIcons/instagram.svg';
import twitter from './SocialMediaIcons/twitter.svg';
import linkedin from './SocialMediaIcons/linkedin.svg';
import github from './SocialMediaIcons/github.svg';
import reddit from './SocialMediaIcons/reddit.svg';
export default function SocialAccount() {
  return (
    <>
      <div className="SocialAccount">
        <a href="https://facebook.com/asadthejoy">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://instagram.com/asadthejoy">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://twitter.com/asadthejoy">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://linkedin.com/asadthejoy">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/asadthejoy">
          <img src={github} alt="github" />
        </a>
        <a href="https://reddit.com/asadthejoy">
          <img src={reddit} alt="reddit" />
        </a>
      </div>
    </>
  );
}
