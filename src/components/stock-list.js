import React from 'react'

export default function stockList(props) {
    return (
        <div className="stock-list-wrapper">
            <div className="skewed-header">
                <div className="header-bg" style={{backgroundImage: "url("+"https://i.postimg.cc/bvtpNL1j/Fish-Room-1-9.png"+")"}}>
                </div>

                <div className="skewed-header-wrapper">
                    <div className="skewed-header-content">
                        <div className="heading-wrapper">
                            <h1>Stock List</h1>
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
            <div className="squares-wrapper">
                <div className="squares">
                    <div className="square">
                        <div className="img-wrapper">
                            <img src="https://i.postimg.cc/vH2srCzs/Triforce-tank.png" alt="Triforce Tank" width="25%" height="25%"/>
                        </div>

                        <div className="square-text-wrapper">
                            <a href="#Fish" name="Fish" className="anchor-link">
                            <h1>Fish</h1>
                            </a>

                            <ul>
                                <li>$4 Odessa Barb</li>
                                <li>$3 Reg Bristlenose Pleco</li>
                                <li>$3 Super Red Calico Pleco</li>
                                <li>$5 Super Red Pleco</li>
                                <li>$1 Fancy Guppy</li>
                                <li>$2 Jewel Cichlid</li>
                                <li>$5 Australian Rainbow</li>
                                <li>$2 Neon Tetra</li>
                                <li>$6 Silver Angelfish</li>
                                <li>$5 Red Shiner</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="square">
                        <div className="square-text-wrapper">
                            <a href="#Invertebrates" name="Invertebrates" className="anchor-link">
                                <h1>Invertebrates</h1>
                                </a>

                            <ul>
                                <li>$1 Assassin Snail</li>
                                <li>$1 Cherry Shrimp</li>
                                <li>$4 Blue Neo Shrimp</li>
                                <li>Scuds free to in-person customers</li>
                                <li>$5 daphnia 1 cup</li>
                                <li>Pond, mts, ramhorn snails free to in-person customers</li>
                            </ul>
                        </div>

                        <div className="img-wrapper">
                            <img src="https://i.postimg.cc/bvtpNL1j/Fish-Room-1-9.png" alt="FishRoom1-9" width="25%" height="25%"/>
                        </div>
                    </div>

                    <div className="square">
                        <div className="img-wrapper">
                            <img src="https://i.postimg.cc/3RVZtFvF/USB-airpump-in-use.jpg" alt="USB Air pump in use" width="25%" height="25%"/>
                        </div>

                        <div className="square-text-wrapper">
                            <a href="#Hard Goods" name="Hard Goods" className="anchor-link">
                                <h1>Hard Goods</h1>
                                </a>
                            <ul>
                                <li>$10 60 gallon Sponge Filter</li>
                                <li>$10 Large box filter</li>
                                <li>$10 USB Air Pump</li>
                            </ul>
                        </div>
                    </div>
                

                
                    <div className="square">
                        <div className="square-text-wrapper">
                            <a href="#Plants" name="Plants" className="anchor-link">
                                <h1>Plants</h1>
                                </a>

                            <ul>
                                <li>$1 Pothos clipping</li>
                                <li>$3 Guppy Grass sandwich bag</li>
                                <li>$3 Hornwort sandwich bag</li>
                                <li>$3 Pennywort sandwich bag</li>
                                <li>$3 Rotala Indica sandwich bag</li>
                                <li>$3 Water Sprite sandwich bag</li>
                                <li>Duckweed free to anyone wanting to scoop it out</li>
                            </ul>
                        </div>

                        <div className="img-wrapper">
                            <img src="https://i.postimg.cc/TY58x776/Rotala-Inidica-and-Java-Moss.jpg" alt="Rotala Inidica and Java Moss" width="25%" height="25%"/>
                        </div>
                    </div>
                </div>               
            </div>
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
                        <a href="/stock-list">Stock</a>
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