import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const TermsConditions = () => {
    return (
        <>
            <Navbar />
            <div classname="container mt-5 pt-5">
                <div className="cs-height_90 cs-height_lg_80" />
                {/* Start Page Head */}
                <section className="cs-page_head cs-bg" data-src="assets/img/page_head_bg.svg">
                    <div className="container">
                        <div className="text-center">
                            <h1 className="cs-page_title">Terms &amp; Conditions</h1>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active">Terms &amp; Conditions</li>
                            </ol>
                        </div>
                    </div>
                </section>
                {/* End Page Head */}
                <div className="cs-height_100 cs-height_lg_70" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="cs-single_post">
                                <h3>Terms &amp; Conditions</h3>
                                <ul>
                                    <li>Use of the Platform: Define the purpose and scope of the blockchain-based medicine supply chain platform, specifying the services and functionalities provided.</li>
                                    <li>Participant Obligations: Outline the responsibilities and obligations of participants, including manufacturers, distributors, pharmacies, healthcare providers, and other relevant stakeholders. This may include requirements for data accuracy, compliance with regulations, and adherence to best practices.</li>
                                    <li>Data Privacy and Security: Address how participant data will be collected, stored, and secured on the blockchain platform. Specify measures to protect sensitive information, comply with applicable data protection laws, and ensure data privacy.</li>
                                    <li>Intellectual Property Rights: Clarify the ownership and usage rights of intellectual property associated with the blockchain-based platform, including any patents, trademarks, or copyrights.</li>
                                    <li>Governance and Decision-Making: Describe the governance structure and decision-making processes for the blockchain network, including any consortium or governing body responsible for overseeing the platform's operation and evolution.</li>
                                    <li>Compliance with Regulations: Ensure that participants comply with relevant laws, regulations, and industry standards governing the medicine supply chain, including but not limited to drug safety, labeling, tracking, and distribution requirements.</li>
                                    <li>Liability and Indemnification: Define the liability of each participant for their actions or negligence within the blockchain-based supply chain. Include provisions for indemnification, dispute resolution mechanisms, and limitations of liability.</li>
                                    <li>Confidentiality and Non-Disclosure: Address the handling of confidential information and trade secrets shared among participants, including restrictions on disclosure and obligations to maintain confidentiality.</li>
                                    <li>Termination and Suspension: Outline the conditions under which participants can terminate or suspend their participation in the blockchain-based medicine supply chain, as well as any consequences or procedures to be followed.</li>
                                    <li>Amendment and Updates: Specify how the terms and conditions can be amended or updated, including the process for obtaining consensus or agreement among participants.</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs-height_60 cs-height_lg_30" />
            </div>

            <Footer />
        </>
    )
}

export default TermsConditions