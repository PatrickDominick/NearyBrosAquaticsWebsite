import React from 'react'
import emailjs from "emailjs-com"
import Footer from './footer';

export default function contact(props) {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("service_5xus7sn", "template_aqto6xc", e.target, "user_XmVRJ4snvOeb3UJlvluDS")
        .then((result) => {
            console.log(result.text); window.location.reload()
        }).catch(error => console.log("You have an error in user message submit" , error))
    }
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
                                <a href="/stock-list">Stock</a>
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
                            <img src="https://i.postimg.cc/8zwHzK0X/Logo-name-cropped-with-bottom-padding.png" alt="logo"/>
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

                    <form className="form" onSubmit={sendEmail}>
                        <div className="form-group">
                        <input type="text" name="name" id="FullName" placeholder="Your name"/>
                        <label htmlFor="FullName">Your name</label>
                        </div>

                        <div className="form-group">
                            <input type="email" name="email" id="email" placeholder="Your email"/>
                        <label htmlFor="email">Your email</label>
                        </div>

                        <div className="form-group">
                            <textarea name="message" name="message" id="message" placeholder="Message"></textarea>
                        <label htmlFor="message">Message</label>
                        </div>

                        <div className="spacer10"></div>

                        <div className="centered-btn-wrapper">
                            <button type="submit" className="btn" value="Send">Send</button>
                        </div>
                    </form>

                    
                </div>
            </div>

            <div className="spacer60"></div>
            <Footer />
        </div>
    )
}