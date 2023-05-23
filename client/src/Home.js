import React from 'react'
import { useHistory } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Home() {
    const history = useHistory()
    const redirect_to_roles = () => {
        history.push('/roles')
    }
    const redirect_to_addmed = () => {
        history.push('/addmed')
    }
    const redirect_to_supply = () => {
        history.push('/supplychain')
    }
    const redirect_to_track = () => {
        history.push('/track')
    }
    return (
        <>
            <Navbar />
            <div className='container mt-5'>

                <h3>OwnCare Supply Chain</h3>
                <br />
                <div class="alert alert-warning alert-dismissible fade show" role="alert" >Note: Here <u>Owner</u> is the person who deployed the smart contract on the blockchain and Owner Should Register Raw material suppliers ,Manufacturers, Distributors and Retailers

                </div>
                {/* ===================================================================================== */}
                <div className="row mt-5">
                    <div className="col-lg-3 col-sm-6">
                        <div className="cs-iconbox cs-style1 cs-white_bg" style={{ height: "250px" }}>
                           
                            <h2 className="cs-iconbox_title">Registers</h2>
                            <div className="cs-iconbox_subtitle">Owner Should Register</div>
                            <button onClick={redirect_to_roles}  className="cs-hero_btn cs-style1 cs-color3 mt-5 cursor-pointer"><span>Register</span></button>
                        </div>
                        <div className="cs-height_30 cs-height_lg_30" />
                    </div>
                  {/*============================================================  */}
                    <div className="col-lg-3 col-sm-6">
                        <div className="cs-iconbox cs-style1 cs-white_bg" style={{ height: "250px" }}>
                           
                            <h2 className="cs-iconbox_title">Orders</h2>
                            <div className="cs-iconbox_subtitle">Owner enter medicine</div>
                            <button onClick={redirect_to_addmed}  className="cs-hero_btn cs-style1 cs-color3 mt-5 cursor-pointer"><span>Order Medicines</span></button>
                        </div>
                        <div className="cs-height_30 cs-height_lg_30" />
                    </div>
                  {/*============================================================  */}
                  {/*============================================================  */}
                    <div className="col-lg-3 col-sm-6">
                        <div className="cs-iconbox cs-style1 cs-white_bg" style={{ height: "250px" }}>
                           
                            <h2 className="cs-iconbox_title">Supply Chain</h2>
                            <div className="cs-iconbox_subtitle">Control Supply Chain</div>
                            <button onClick={redirect_to_supply}  className="cs-hero_btn cs-style1 cs-color3 mt-5 cursor-pointer"><span>Supply Chain</span></button>
                        </div>
                        <div className="cs-height_30 cs-height_lg_30" />
                    </div>
                  {/*============================================================  */}
                  {/*============================================================  */}
                    <div className="col-lg-3 col-sm-6">
                        <div className="cs-iconbox cs-style1 cs-white_bg" style={{ height: "250px" }}>
                           
                            <h2 className="cs-iconbox_title">Track</h2>
                            <div className="cs-iconbox_subtitle">Track medicine</div>
                            <button onClick={redirect_to_track}  className="cs-hero_btn cs-style1 cs-color3 mt-5 cursor-pointer"><span>Track Medicines</span></button>
                        </div>
                        <div className="cs-height_30 cs-height_lg_30" />
                    </div>
                  {/*============================================================  */}
                </div>


                {/* ================================================================= */}
                {/* <h5>Step 1: Owner Should Register </h5>
                <button onClick={redirect_to_roles} className="btn btn-outline-primary btn-sm">Register</button>
                <br /> */}
                {/* <h5>Step 2: Owner should order medicines</h5>
                <button onClick={redirect_to_addmed} className="btn btn-outline-primary btn-sm">Order Medicines</button>
                <br /> */}
                {/* <h5>Step 3: Control Supply Chain</h5>
                <button onClick={redirect_to_supply} className="btn btn-outline-primary btn-sm">Control Supply Chain</button>
                <br />
                <hr />
                <br />
                <h5><b>Track</b> the medicines:</h5>
                <button onClick={redirect_to_track} className="btn btn-outline-primary btn-sm">Track Medicines</button> */}
            </div>

            <Footer className="mt-5" />
        </>

    )
}

export default Home
