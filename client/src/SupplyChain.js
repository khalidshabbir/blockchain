import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const SupplyChain = () => {
    return (
        <>
            <Navbar />

            <div className='container mt-5 pt-5'>
            <div className="">
                    <div className="cs-cta cs-style2 text-center cs-white_bg py-3 m-0">
                        <h4 className="cs-cta_title">OwnCare Supply Chain</h4>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-3 col-sm-6">
                        <div className="cs-iconbox cs-style1 cs-white_bg" style={{ height: "250px" }}>

                            <h2 className="cs-iconbox_title">Raw Material Supplier</h2>
                      
                            <a href='/supplyRaw_material' className="cs-hero_btn cs-style1 cs-color3 mt-5 cursor-pointer"><span>Supplier</span></a>
                        </div>
                        <div className="cs-height_30 cs-height_lg_30" />
                    </div>
                    {/* =================================================================== */}
                    <div className="col-lg-3 col-sm-6">
                        <div className="cs-iconbox cs-style1 cs-white_bg" style={{ height: "250px" }}>

                            <h2 className="cs-iconbox_title">manufacturers</h2>
                      
                            <a href='/supplymanufactureing' className="cs-hero_btn cs-style1 cs-color3 mt-5 cursor-pointer"><span>Manufacturer</span></a>
                        </div>
                        <div className="cs-height_30 cs-height_lg_30" />
                    </div>

                    {/* =================================================================== */}
                    {/* =================================================================== */}
                    <div className="col-lg-3 col-sm-6">
                        <div className="cs-iconbox cs-style1 cs-white_bg" style={{ height: "250px" }}>

                            <h2 className="cs-iconbox_title">Distributor</h2>
                      
                            <a href='/supplydistributer' className="cs-hero_btn cs-style1 cs-color3 mt-5 cursor-pointer"><span>Distributor</span></a>
                        </div>
                        <div className="cs-height_30 cs-height_lg_30" />
                    </div>

                    {/* =================================================================== */}
                    {/* =================================================================== */}
                    <div className="col-lg-3 col-sm-6">
                        <div className="cs-iconbox cs-style1 cs-white_bg" style={{ height: "250px" }}>

                            <h2 className="cs-iconbox_title">Retailers</h2>
                      
                            <a href='/supplyretailer' className="cs-hero_btn cs-style1 cs-color3 mt-5 cursor-pointer"><span>Retailers</span></a>
                        </div>
                        <div className="cs-height_30 cs-height_lg_30" />
                    </div>

                    {/* =================================================================== */}

                </div>
                
            </div>
            <Footer />


        </>
    )
}

export default SupplyChain