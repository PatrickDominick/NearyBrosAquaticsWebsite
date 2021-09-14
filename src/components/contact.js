import React from 'react'

export default function contact(props) {
    return (
        <div className="contact-wrapper">
            <div className="skewed-header">
                <div className="header-bg" style={{backgroundImage: "url("+"https://i.postimg.cc/nzfZs719/Longfin-Albino-Bristlenose-Pleco.png"+")"}}>
                </div>

                <div className="skewed-header-wrapper">
                    <div className="skewed-header-content">
                        <div className="heading-wrapper">
                            <h1>Contact</h1>
                        </div>

                        <div className="links-wrapper">
                            
                            <div className="nav-link">
                                <a href="/">Home</a>
                            </div>
                    
                            <div className="nav-link">
                                <a href="/about">About</a>
                            </div>
                    
                            <div className="nav-link"> 
                                <a href="/stock-list">Stock List</a>
                            </div>
                    
                            <div className="nav-link">
                                <a href="/contact">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-container">
                <div className="contact-grid-wrapper">
                    <div className="company-metadata-sidebar-wrapper">
                        <div className="logo">
                            <img src="https://i.postimg.cc/134ybytX/Logo-name-larger.png" alt="logo"/>
                        </div>
                                    
                        <div className="company-details-wrapper">
                            <i className="fas fa-map-marker-alt"></i>

                            <div>
                                7325 Trimble Dr. 
                                <br/>Fort Worth, Tx. 76134
                            </div>
                            
                    </div>

                        <div className="company-details-wrapper">
                        <i className="fas fa-phone-volume"></i>

                        <div>
                        405 301 7945
                        </div>
                        
                        </div>

                        <div className="company-details-wrapper">
                            <i className="far fa-clock"></i>

                            <div>
                                10AM - 8pm <br/> by appointment only
                            </div>
                    
                        </div>
                    </div>

                        <div className="form">
                            <div className="form-group">
                            <input type="text" id="FullName" placeholder="Your name"/>
                            <label for="FullName">Your name</label>
                            </div>

                            <div class="form-group">
                                <input type="email" id="email" placeholder="Your email"/>
                            <label for="email">Your email</label>
                            </div>

                            <div className="form-group">
                                <textarea name="messagem" id="message" placeholder="Message"></textarea>
                            <label for="message">Message</label>
                            </div>

                            <div className="spacer10"></div>

                            <div className="centered-btn-wrapper">
                                <button type="submit" className="btn">Send</button>
                            </div>
                        </div>

                    
                </div>
            </div>

            <div className="spacer60"></div>

            <div className="footer">
                <div className="logo">
                    <img src="https://i.postimg.cc/134ybytX/Logo-name-larger.png" alt="Logo"/>
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
                        <a href="/stock-list">Stock List</a>
                    </div>

                    <div className="nav-link">
                        <a href="/contact">Contact</a>
                    </div>
                </div>

                <div className="social-media-icons-wrapper">
                    <a href="#">
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a href="#">
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a href="#">
                        <i className="fab fa-facebook-f"></i>
                    </a>

                </div>

                <div className="copyright-wrapper">
                    &copy; 2021 NearyBrothersAquatics &#124; All rights reserved
                </div>              
            </div>
        </div>
    )
}