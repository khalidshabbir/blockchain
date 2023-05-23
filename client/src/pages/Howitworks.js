import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Process from '../components/Process';
import FAQ from '../components/FAQ';
const Howitworks = () => {
    return (
        <>
            <Navbar />
            <div>
                <div className="cs-height_90 cs-height_lg_80" />
                {/* Start Page Head */}
                <section className="cs-page_head cs-bg" data-src="assets/img/page_head_bg.svg">
                    <div className="container">
                        <div className="text-center">
                            <h1 className="cs-page_title">How It Works</h1>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active">How It Works</li>
                            </ol>
                        </div>
                    </div>
                </section>
                {/* End Page Head */}
                {/* Start Icon Boxes */}
              <Process/>
                {/* End Icon Boxes */}
               <FAQ/>
            </div>
            <Footer />
        </>
    )
}

export default Howitworks