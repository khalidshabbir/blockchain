import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Team from '../components/Team'

const Aboutus = () => {
    return (
        <>
        <Navbar/>
            <div>
                <div className="cs-height_90 cs-height_lg_80" />
                {/* Start Page Head */}
                <section className="cs-page_head cs-bg" data-src="assets/img/page_head_bg.svg">
                    <div className="container">
                        <div className="text-center">
                            <h1 className="cs-page_title">About Us</h1>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active">About Us</li>
                            </ol>
                        </div>
                    </div>
                </section>
                {/* End Page Head */}
                <div className="cs-height_100 cs-height_lg_70" />
                {/* Start CTA */}
                <div className="container">
                    <div className="cs-cta cs-style1 cs-type1 cs-bg">
                        <div className="cs-cta_right">
                            <h2 className="cs-cta_title">About Our Project</h2>
                            <div className="cs-cta_subtitle">At OwnCare, we are dedicated to revolutionizing the medicine supply chain using the power of blockchain technology. We firmly believe that the transparency, security, and efficiency offered by blockchain can significantly enhance the way medicines are produced, distributed, and accessed worldwide. </div>
                            
                        </div>
                        <div className="cs-cta_img text-center"><img src="assets/img/general/cta2.svg" alt="Image" /></div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="cs-cta cs-style1 cs-bg">
                        <div className="cs-cta_img"><img src="assets/img/general/cta.svg" alt="Image" /></div>
                        <div className="cs-cta_right">
                            <h2 className="cs-cta_title">Our Mission</h2>
                            <div className="cs-cta_subtitle">Our mission is to create a reliable and transparent platform that ensures the safe and efficient delivery of medicines from manufacturers to patients. By leveraging blockchain's immutable and decentralized nature, we aim to overcome the challenges faced by the traditional medicine supply chain, such as counterfeit products, inefficient tracking, and lack of trust.</div>
                           
                            <h2 className="cs-cta_title">Our Vision</h2>
                            <div className="cs-cta_subtitle">We envision a future where every individual has access to safe and authentic medicines, regardless of their location or socioeconomic status. By leveraging blockchain technology, we strive to eliminate the circulation of counterfeit drugs, improve the traceability of pharmaceutical products, and enhance overall patient safety.</div>
                           
                       
                        </div>
                        
                    </div>
                </div>

                {/* End CTA */}
                <div className="cs-height_95 cs-height_lg_70" />
                {/* Start Video Section */}
                <div className="container">
                   
                    <div className="cs-height_45 cs-height_lg_45" />
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <a target={"_blank"} href="https://www.youtube.com/watch?v=Q9Qy7ioynQ8" className="cs-video_block cs-style1 cs-zoom_effect ">
                                <div className="cs-video_block_in">
                                    <div className="cs-video_block_bg cs-bg cs-zoom_item" data-src="assets/img/video_bg.jpg" />
                                </div>
                                <div className="cs-play_btn cs-center">
                                    <svg width={28} height={33} viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.98474 0.457254C2.24375 -0.616351 0 0.63608 0 2.68148V30.3185C0 32.3639 2.24375 33.6164 3.98474 32.5427L26.3932 18.7242C28.0485 17.7034 28.0485 15.2966 26.3932 14.2758L3.98474 0.457254Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* End Video Seciton */}
                <div className="cs-height_95 cs-height_lg_70" />
                {/* Start Icon Box */}
                <div className="container">
                    <div className="cs-cta cs-style2 text-center cs-accent_bg px-5">
                        <h2 className="cs-cta_title cs-white_color_8">Our Approach</h2>
                        <div className="cs-cta_subtitle cs-white_color_8">At OwnCare, we have developed a comprehensive blockchain solution tailored specifically for the medicine supply chain. Our platform integrates smart contracts, decentralized ledger technology, and data encryption to ensure the highest level of security, integrity, and transparency throughout the entire supply chain process.</div>
                        
                    </div>
                </div>
            
                {/* End Icon Box */}
                <div className="cs-height_70 cs-height_lg_40" />
                {/* Start CTA */}
                <div className="container">
                    <div className="cs-cta cs-style1 cs-bg">
                        <div className="cs-cta_img"><img src="assets/img/general/cta.svg" alt="Image" /></div>
                        <div className="cs-cta_right">
                            <h2 className="cs-cta_title">Why Blockchain?</h2>
                            <div className="cs-cta_subtitle">Blockchain technology offers unique advantages that make it an ideal solution for the medicine supply chain. It provides an immutable and transparent ledger, enabling real-time tracking and authentication of medicines, reducing the risk of counterfeit products, and ensuring patient safety. By leveraging blockchain's distributed network, we can establish trust among all participants in the supply chain, including manufacturers, distributors, pharmacies, and healthcare providers. </div>
                          
                        </div>
                    </div>
                </div>
                {/* End CTA */}
                
                {/* ========================== */}
                <div className="cs-height_95 cs-height_lg_70" />
                {/* Start Team members */}
               <Team/>
                {/* End Team members */}
                <div className="cs-height_100 cs-height_lg_70" />
                {/* Start CTA */}
             
                {/* End CTA */}
             
                {/* End Logo Carousel */}
            </div>
            <Footer/>

        </>
    )
}

export default Aboutus