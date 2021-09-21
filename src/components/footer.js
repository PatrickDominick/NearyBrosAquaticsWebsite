import React from 'react'

export default function footer (props) {
    return (
        <div className="footer">
                <div className="logo">
                    <img src="https://i.postimg.cc/Qd1YbJVj/Logo-name-cropped.png" alt="Logo"/>
                </div>

                <div className="footer-phone-hours">
                    <span className="phone">
                        405 301 7945
                    </span>

                    <span className="hours">
                        10 am - 8 pm by appointment only
                    </span>
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

                <div className="social-media-icons-wrapper">
                    <a href="https://www.instagram.com/nearybrosaquatics/?utm_medium=copy_link" target="blank">
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a href="https://twitter.com/NearyAquatics" target="blank">
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a href="https://www.facebook.com/NearyBrosAquatics/?ref=pages_you_manage" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a href="https://www.youtube.com/channel/UCkbk4nEa2ox3L7H1t1-ofDg" target="_blank">
                        <i className="fab fa-youtube"></i>
                    </a>

                </div>

                <div className="copyright-wrapper">
                    &copy; 2021 NearyBrothersAquatics &#124; All rights reserved
                </div>              
            </div>
    )
}