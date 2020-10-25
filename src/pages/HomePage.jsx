import React from 'react';
import {Container} from 'semantic-ui-react';

import blob from '../assets/blob.svg';
import bigLogo from '../assets/big-logo.svg';
import './HomePage.css';
import HomeHeader from '../components/HomeHeader';

export default () => {
    return (
        <div id="homepage">
            <HomeHeader/>
            <div className="splash">
                <img src={bigLogo} id="big-logo"/>
                <p className="splash-text">Empowering urban agriculture and community</p>
            </div>
            <img src={blob} id="blob-home"></img>
        </div>
    )
};