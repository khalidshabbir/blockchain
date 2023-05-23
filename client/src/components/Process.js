import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import ShareIcon from '@mui/icons-material/Share';
const Process = () => {
    return (
        <>
            <div className="container">
                <div className="cs-height_95 cs-height_lg_70" />
                <h2 className="cs-section_heading cs-style1 text-center">Our working process</h2>
                <div className="cs-height_45 cs-height_lg_45" />
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="cs-iconbox cs-style1 cs-white_bg" style={{ height: "400px" }}>
                            <div className="cs-iconbox_icon">
                                <AcUnitIcon style={{ fontSize: '60px' }} />

                            </div>
                            <h2 className="cs-iconbox_title">Raw Material</h2>
                            <div className="cs-iconbox_subtitle">When Order Place our system automatically initiates procurement by sending a request to the supplier, who verifies order details and ensures raw material availability using blockchain technology.</div>
                        </div>
                        <div className="cs-height_30 cs-height_lg_30" />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="cs-iconbox cs-style1 cs-white_bg" style={{ height: "400px" }}>
                            <div className="cs-iconbox_icon">
                                <LocalShippingIcon style={{ fontSize: '60px' }} />

                            </div>
                            <h2 className="cs-iconbox_title">Suppliers</h2>
                            <div className="cs-iconbox_subtitle">The raw material supplier dispatches materials to the manufacturer, tracked transparently on the blockchain for accountability and efficiency.</div>
                        </div>
                        <div className="cs-height_30 cs-height_lg_30" />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="cs-iconbox cs-style1 cs-white_bg" style={{ height: "400px" }}>
                            <div className="cs-iconbox_icon">
                                <KeyboardCommandKeyIcon style={{ fontSize: '60px' }} />

                            </div>
                            <h2 className="cs-iconbox_title">Manufacturers</h2>
                            <div className="cs-iconbox_subtitle">The manufacturing process steps are securely recorded on the blockchain, establishing an immutable audit trail to ensure product authenticity and traceability.</div>
                        </div>
                        <div className="cs-height_30 cs-height_lg_30" />
                    </div>
                    <div className="col-lg-3 col-sm-6" >
                        <div className="cs-iconbox cs-style1 cs-white_bg" style={{ height: "400px" }}>
                            <div className="cs-iconbox_icon">

                                <  ShareIcon style={{ fontSize: '60px' }} />
                            </div>
                            <h2 className="cs-iconbox_title">Distributed</h2>
                            <div className="cs-iconbox_subtitle">After quality assurance, products are ready for distribution. Our system enables seamless communication, efficient logistics planning, and real-time product tracking between the manufacturer and distributor.</div>
                        </div>
                        <div className="cs-height_30 cs-height_lg_30" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Process