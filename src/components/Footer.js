import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container-fluid">
                    <div className="row footer_first">
                        <div className="col-sm-12 col-md-4 col-lg-4 contact-us">
                            <h3>Contact us</h3>
                            <p>0 800 123 456 88</p>
                            <p>30 Hampton Road Southampton, NY 11968</p>
                            <p>info@baguetto.com</p>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 opening">
                            <h3>Opening hours</h3>
                            <p>Monday - Saturday</p>
                            <h6>8:00 - 22:00</h6>
                            <p>Sunday</p>
                            <h6>8:00 - 20:00</h6>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 info-baguetto">
                            <div className="header3">
                                Baguetto
        </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <i className="fab fa-facebook-f" />
                            <i className="fab fa-twitter" />
                            <i className="fab fa-instagram" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="designed-by">
                            <p>2017 All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;