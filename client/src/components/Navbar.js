import React from 'react'

const Navbar = () => {
  const openMetaMask = () => {
    const a = document.createElement('a');
    a.href = 'chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <header className="cs-site_header cs-style1 cs-sticky-header cs-white_bg">
        <div className="cs-main_header">
          <div className="container-fluid">
            <div className="cs-main_header_in">
              <div className="cs-main_header_left">
                <a className="cs-site_branding" href="/"><img src="assets/img/logo.svg" alt="Logo" /></a>
              </div>
              <div className="cs-main_header_right">

                <div className="cs-nav_wrap">
                  <div className="cs-nav_out">
                    <div className="cs-nav_in">
                      <div className="cs-nav">
                        <ul className="cs-nav_list">
                          <li><a href="/">Home</a></li>
                          <li><a href="/aboutus">About us</a></li>
                          <li><a href="/howitwork">How it Works</a></li>
                          <li><a href="/connectWallet">Connect Wallet</a></li>
                          
                          <li><a href='/main'>Manue</a></li>
                          <li><a href='/track'>Track</a></li>
                          
                         
                          
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
               <a href='/contactus'> <button  className="cs-btn cs-style1">
                      <span>Contact Us</span>
                    </button></a>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Navbar