import React from 'react';
import Header from '../../components/Header';
import Gradient from '../../components/Gradient';
import BuyerListing from '../../components/BuyerListing';

import './BrowseListings.css';

export default () => {
    const seller = {
        image: "avatar.png",
        name: "Joey"
    }
    return (
        <div id="browse-listings">
            <Header/>
            <Gradient text="Growing near you"/>
            <div class="listings">
                <BuyerListing seller={seller} produce="Tomatoes" description="Fresh tomatoes from my garden!"/>
                <BuyerListing seller={seller} produce="Tomatoes" description="Fresh tomatoes from my garden!"/>
                <BuyerListing seller={seller} produce="Tomatoes" description="Fresh tomatoes from my garden!"/>
                <BuyerListing seller={seller} produce="Tomatoes" description="Fresh tomatoes from my garden!"/>
            </div>
        </div>
    );
};