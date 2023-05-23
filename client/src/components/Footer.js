import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="cs-footer cs-style1">
        <div className="cs-footer_bg" />
        <div className="cs-height_100 cs-height_lg_60" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-4 col-sm-4">
                  <div className="cs-footer_widget">
                    <h2 className="cs-widget_title">Company</h2>
                    <ul className="cs-widget_nav">
                      <li><a href="/howitwork">How it Works</a></li>
                      <li><a href="/aboutus">About Us</a></li>
                      <li><a href="/contactus">Contact Us</a></li>
                     
                    </ul>
                  </div>
                </div>{/* .col */}
                <div className="col-lg-4 col-sm-4">
                  <div className="cs-footer_widget">
                    <h2 className="cs-widget_title">Our Services</h2>
                    <ul className="cs-widget_nav">
                      <li><a href="/track">Track</a></li>
                      <li><a href="/main">Orders</a></li>
                     
               
                    </ul>
                  </div>
                </div>{/* .col */}
                <div className=" col-lg-4 col-sm-4">
                  <div className=" cs-footer_widget">
                    <h2 className=" cs-widget_title">Contact Us</h2>
                    <ul className=" cs-widget_nav">
                      <li><i className=" fas fa-phone"></i> +92928727</li>
                      <li><i className=" fas fa-envelope"></i> myemail@gmail.com</li>
                      <li><i className=" fas fa-map-marker-alt"></i> location in Lahore</li>
                    </ul>
                  </div>
                </div>


              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="cs-footer_widget">
                <h2 className="cs-widget_title">Our Social Media</h2>

                <div className="cs-footer_social_btns">
                  <a href="#"><i className="fab fa-facebook-f fa-fw" /></a>
                  <a href="#"><i className="fab fa-twitter fa-fw" /></a>
                  <a href="#"><i className="fab fa-instagram fa-fw" /></a>
                  <a href="#"><i className="fab fa-whatsapp fa-fw" /></a>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs-height_60 cs-height_lg_20" />
        <div className="cs-footer_bottom">
          <div className="container">
            <div className="cs-footer_separetor" />
            <div className="cs-footer_bottom_in">
              <div className="cs-copyright">Copyright 2022. OwnCare </div>
              <ul className="cs-footer_menu">
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/term-conditions">Term &amp; Condition</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer