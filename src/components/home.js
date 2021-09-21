import React, {useState} from 'react';
import Footer from './footer';

export default function home(props) {
    return (
        <div className="home-wrapper">          
            <div className="navigation-wrapper">

                <div className="left-column">
                    <a href="/contact" className="icon">
                        <i className="fas fa-phone-volume"></i>
                    </a>

                    <div className="contact-hours-wrapper">
                        <a href="/contact" className="phone">
                            405 301 7945
                        </a>

                        <a href="/contact" className="hours">
                            10 AM - 8 PM by appointment only
                        </a>
                    </div>
                </div>

                <div className="center-column">
                    <div className="banner-image">
                        <img src="https://i.postimg.cc/Qd1YbJVj/Logo-name-cropped.png" alt="logo" />
                    </div>
                    <div className="links-wrapper">
                    
                        <div className="nav-link">
                            <a href="/">Home</a>
                        </div>

                        <div className="nav-link">
                            <a href="/about">About</a>
                        </div>

                        <div className="nav-link"> 
                            <a href="/stock-list">Stock</a>
                        </div>

                        <div className="nav-link">
                            <a href="/contact">Contact</a>
                        </div>
                    </div>
                </div>

                <div className="right-column">
                    <div className="address-wrapper">
                        <a href="/contact">
                                7325 Trimble Dr. <br />
                                Fort Worth, Tx. 76134
                        </a>
                    </div>

                    <div className="contact-icon">
                        <a href="/contact">
                            <i className="fas fa-map-marker-alt"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="fish-section">
                <div className="top-heading">
                    <h1>Livestock and</h1>
                </div>

                <div className="bottom-heading">
                    <h1>Hard Goods</h1>
                </div>
            </div>
            <div className="features-section">
                <div className="columns-wrapper">
                    <div className="column">
                        <a href="/stock-list#plants"><i className="fas fa-truck"></i></a>
                        <br />
                        <a href="/stock-list#plants">We ship!</a>
                        <br />
                        <a href="/stock-list#plants">
                            Some items available for delivery!
                        </a>
                    </div>
                </div>

                <div className="columns-wrapper">
                    <div className="column">
                        <a href="/stock-list"><i className="fas fa-fish"></i></a>
                        <br />
                        <a href="/stock-list">Fish, Plants, Inverts!</a>
                        <br />
                        <a href="/stock-list">
                            Stock List!
                        </a>
                    </div>
                </div>

                <div className="columns-wrapper">
                    <div className="column">
                        <a href="https://www.youtube.com/channel/UCkbk4nEa2ox3L7H1t1-ofDg" target="_blank">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <br />
                        <a href="https://www.youtube.com/channel/UCkbk4nEa2ox3L7H1t1-ofDg" target="_blank">
                            Videos
                        </a>
                        <br />
                        <a href="https://www.youtube.com/channel/UCkbk4nEa2ox3L7H1t1-ofDg" target="_blank">
                            YouTube Channel
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <iframe className="map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.733003544026!2d-97.33416118497419!3d32.639932981013686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e6e6025dc9873%3A0x813b5a6923f9c432!2s7325%20Trimble%20Dr%2C%20Fort%20Worth%2C%20TX%2076134!5e0!3m2!1sen!2sus!4v1622932905628!5m2!1sen!2sus" allowFullScreen="" loading="lazy"></iframe>
            </div>
            <Footer />
        </div>
    )
}