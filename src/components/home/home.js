import React from 'react';
import './home.css';

class HomeComponent extends React.Component {
    render() {
        return (
            <>
            <input type="checkbox" id="ham-menu"/>
            <label for="ham-menu">
              <div class="hide-des">
                <span class="menu-line"></span>
                <span class="menu-line"></span>
                <span class="menu-line"></span>
                <span class="menu-line"></span>
                <span class="menu-line"></span>
                <span class="menu-line"></span>
              </div>
            
            </label>
            <div class="full-page-green"></div>
            <div class="ham-menu">
              <ul class="centre-text bold-text">
                <li>Home</li>
                <li>Categories</li>
                <li>Services</li>
                <li>Shop</li>
                <li>Support</li>
                <li>Contact us</li>
            
              </ul>
            </div>
            </>
        );
    }
}

export default HomeComponent;