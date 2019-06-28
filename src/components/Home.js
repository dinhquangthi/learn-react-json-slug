import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="banner">
                    <div className="banner-img">
                        <div className="slide-img active"><img src="./image/welcome.jpg" alt="" /> </div>
                        <div className="slide-img "><img src="./image/order.jpg" alt="" /> </div>
                        <div className="slide-img"><img src="./image/about-us.jpg" alt="" /> </div>
                    </div> 
                    <div className="details">
                        <a href="menu.html" className="details-btn active-1">Check our menu</a>
                        <a href="/" className="details-btn">Order now!</a>
                        <a href="about.html" className="details-btn">Learn more</a>
                    </div>
                    <div className="nutslide">
                        <div className="next"><i className="fas fa-chevron-right" /></div>
                        <div className="prev"><i className="fas fa-chevron-left" /></div>
                    </div>
                </div>
                <div className="content container-fluid">
                    <div className="row">
                        <div className="welcome col-sm-12 col-md-12">
                            <h1>Welcome to Baguetto !</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <h6><a href="/">About us</a></h6>
                        </div>
                    </div>
                    <div className="products">
                        <h1>Our lastest products</h1>
                        <div className="row">
                            <div className="img-products col-sm-12 col-lg-4 col-xl-6 col-md-6">
                                <img src="./image/banh-1.jpg" alt="" className="img-bakery" />
                                <div className="xam" />
                                <div className="chuto">Bread</div>
                                <div className="chunho">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
                                <div className="icon">
                                    <i className="fas fa-search" />
                                    <i className="fas fa-share-alt" />
                                    <i className="fas fa-shopping-cart" />
                                </div>
                            </div>
                            <div className="img-products col-sm-12 col-lg-4 col-xl-6 col-md-6">
                                <img src="./image/banh-2.jpg" alt="" className="img-bakery" />
                                <div className="xam" />
                                <div className="chuto">Bread</div>
                                <div className="chunho">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
                                <div className="icon">
                                    <i className="fas fa-search" />
                                    <i className="fas fa-share-alt" />
                                    <i className="fas fa-shopping-cart" />
                                </div>
                            </div>
                            <div className="img-products col-sm-12 col-lg-4 col-xl-6 col-md-6">
                                <img src="./image/banh-3.jpg" alt="" className="img-bakery" />
                                <div className="xam" />
                                <div className="chuto">Bread</div>
                                <div className="chunho">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
                                <div className="icon">
                                    <i className="fas fa-search" />
                                    <i className="fas fa-share-alt" />
                                    <i className="fas fa-shopping-cart" />
                                </div>
                            </div>
                            <div className="img-products col-sm-12 col-lg-4 col-xl-6 col-md-6">
                                <img src="./image/banh-4.jpg" alt="" className="img-bakery" />
                                <div className="xam" />
                                <div className="chuto">Bread</div>
                                <div className="chunho">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
                                <div className="icon">
                                    <i className="fas fa-search" />
                                    <i className="fas fa-share-alt" />
                                    <i className="fas fa-shopping-cart" />
                                </div>
                            </div>
                            <div className="img-products col-sm-12 col-lg-4 col-xl-6 col-md-6">
                                <img src="./image/banh-5.jpg" alt="" className="img-bakery" />
                                <div className="xam" />
                                <div className="chuto">Bread</div>
                                <div className="chunho">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
                                <div className="icon">
                                    <i className="fas fa-search" />
                                    <i className="fas fa-share-alt" />
                                    <i className="fas fa-shopping-cart" />
                                </div>
                            </div>
                            <div className="img-products col-sm-12 col-lg-4 col-xl-6 col-md-6">
                                <img src="./image/banh-6.jpg" alt="" className="img-bakery" />
                                <div className="xam" />
                                <div className="chuto">Bread</div>
                                <div className="chunho">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
                                <div className="icon">
                                    <i className="fas fa-search" />
                                    <i className="fas fa-share-alt" />
                                    <i className="fas fa-shopping-cart" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* End-Content */}
                <div className="recommentdation">
                    <h1>Recommentdation</h1>
                    <div className="row">
                        <div className="recommentdation-image col-sm-12 col-md-6 ">
                            <img src="./image/banh-7.jpg" alt="" className="img-bakery-2" />
                        </div>
                        <div className="recommentdation-content col-sm-12 col-md-6 d-flex flex-column justify-content-center">
                            <h5>Lorem ipsum dolor sit amet</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div> {/* End-recommentdation */}
                <div className="articles container-fluid">
                    <div className="row">
                        <div className="welcome col-sm-12 col-md-12" style={{ marginBottom: '20px' }}>
                            <h1>Articles</h1>
                        </div>
                    </div>
                    <div className="row" style={{ margin: 'auto' }}>
                        <div className="col-sm-12 col-md-12 col-lg-4 no-padding">
                            <div className="articles-content">
                                <img src="./image/banh-9.jpg" alt="" className="img-bakery-3" />
                                <div className="noidung">
                                    <h4><a href="/">Lorem ipsum dolor sit amet, consectetur adipisicing elit</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolore magna aliqua tempor.</p>
                                    <h6><a href="/">More details</a></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 no-padding">
                            <div className="articles-content">
                                <img src="./image/banh-10.jpg" alt="" className="img-bakery-3" />
                                <div className="noidung">
                                    <h4><a href="/">Lorem ipsum dolor sit amet, consectetur adipisicing elit</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolore magna aliqua tempor.</p>
                                    <h6><a href="/">More details</a></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 no-padding">
                            <div className="articles-content">
                                <img src="./image/banh-2.jpg" alt="" className="img-bakery-3" />
                                <div className="noidung">
                                    <h4><a href="/">Lorem ipsum dolor sit amet, consectetur adipisicing elit</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolore magna aliqua tempor.</p>
                                    <h6><a href="/">More details</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* End-Articles */}
            </div>

        );
    }
}

export default Home;