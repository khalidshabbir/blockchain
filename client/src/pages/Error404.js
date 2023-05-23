import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Error404 = () => {
    return (
        <>
        <Navbar/>
            <div>
                <div className="cs-height_90 cs-height_lg_80" />
                {/* Start Error */}
                <div className="cs-bg" data-src="assets/img/page_head_bg.svg">
                    <div className="cs-height_100 cs-height_lg_70" />
                    <div className="container">
                        <div className="cs-error_card text-center">
                            <div className="cs-error_img"><img src="assets/img/404.svg" alt={404} /></div>
                            <div className="cs-height_70 cs-height_lg_40" />
                            <a href="/" className="cs-btn cs-style1 cs-btn_lg"><span>Back To Home</span></a>
                        </div>
                    </div>
                    <div className="cs-height_100 cs-height_lg_70" />
                </div>
                {/* End Error */}
            </div>
        <Footer/>
        </>
    )
}

export default Error404