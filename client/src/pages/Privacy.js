import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Privacy = () => {
    return (
        <>
            <Navbar />
            <div className='container mt-5 pt-5'>
                <div>
                  
                    {/* Start Page Head */}
                    <section className="cs-page_head cs-bg" data-src="assets/img/page_head_bg.svg">
                        <div className="container">
                            <div className="text-center">
                                <h1 className="cs-page_title">Privacy Policy</h1>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item active">Privacy Policy</li>
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
                                    <h3>Privacy Policy</h3>
                                    <p>Emphasize that sensitive information related to patients, healthcare providers, and manufacturers will be treated with utmost confidentiality. Access to this data will be strictly controlled and limited to authorized personnel only.</p>

                                    <h1>Pseudonymity</h1>
                                    <p>Explain that blockchain technology can enable pseudonymous transactions, where personally identifiable information (PII) is not directly linked to the blockchain address or transaction data. This helps protect the privacy of individuals involved in the supply chain.</p>

                                    <h1>Consent and Control</h1>
                                    <p>Highlight that individuals will have control over their personal data. They should have the ability to provide informed consent for the collection, processing, and sharing of their data within the supply chain ecosystem.</p>

                                    <h1>Secure Data Handling</h1>
                                    <p>Outline the measures in place to ensure secure handling of data, including encryption, access controls, and secure transmission protocols. Mention that industry best practices and standards will be followed to safeguard data against unauthorized access or breaches.</p>

                                    <h1>Selective Data Sharing</h1>
                                    <p>Explain that blockchain can enable selective data sharing, where only relevant stakeholders have access to specific information necessary for their role in the supply chain. This approach ensures that sensitive data is shared on a need-to-know basis, minimizing the risk of unauthorized data exposure.</p>

                                    <h1>Compliance with Regulations</h1>
                                    <p>Emphasize that the project will adhere to relevant data protection regulations, such as the General Data Protection Regulation (GDPR) or any other applicable privacy laws specific to your jurisdiction. Describe how the project's design and practices align with these regulations.</p>

                                    <h1>Transparency and Auditability</h1>
                                    <p>Highlight that blockchain provides a transparent and auditable system, allowing stakeholders to track the history of transactions while maintaining the privacy of individual participants. Assure users that their actions within the supply chain will be recorded on the blockchain, ensuring accountability without compromising privacy.</p>

                                    <h1>Data Retention and Deletion</h1>
                                    <p>Explain the project's policy on data retention and deletion. Describe how data will be stored for only as long as necessary and how individuals can request the deletion of their personal information when it is no longer required for legitimate purposes.</p>

                                    <h1>Third-Party Service Providers</h1>
                                    <p>If applicable, mention that any third-party service providers involved in the project will be carefully vetted to ensure they meet privacy and security standards. Outline the measures in place to protect data when working with external partners.</p>

                                    <h1>User Education and Awareness</h1>
                                    <p>Emphasize that the project will prioritize user education and awareness regarding privacy practices. Provide resources, guidelines, and mechanisms for users to understand their privacy rights, make informed decisions, and exercise control over their data.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cs-height_60 cs-height_lg_30" />
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Privacy