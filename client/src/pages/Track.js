import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import Web3 from "web3";
import SupplyChainABI from "../artifacts/SupplyChain.json"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Track() {
    const history = useHistory()
    useEffect(() => {
        loadWeb3();
        loadBlockchaindata();
    }, [])

    const [currentaccount, setCurrentaccount] = useState("");
    const [loader, setloader] = useState(true);
    const [SupplyChain, setSupplyChain] = useState();
    const [MED, setMED] = useState();
    const [MedStage, setMedStage] = useState();
    const [ID, setID] = useState();
    const [RMS, setRMS] = useState();
    const [MAN, setMAN] = useState();
    const [DIS, setDIS] = useState();
    const [RET, setRET] = useState();
    const [TrackTillSold, showTrackTillSold] = useState(false);
    const [TrackTillRetail, showTrackTillRetail] = useState(false);
    const [TrackTillDistribution, showTrackTillDistribution] = useState(false);
    const [TrackTillManufacture, showTrackTillManufacture] = useState(false);
    const [TrackTillRMS, showTrackTillRMS] = useState(false);
    const [TrackTillOrdered, showTrackTillOrdered] = useState(false);

    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert(
                "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
        }
    };
    const loadBlockchaindata = async () => {
        setloader(true);
        const web3 = window.web3;
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        setCurrentaccount(account);
        const networkId = await web3.eth.net.getId();
        const networkData = SupplyChainABI.networks[networkId];
        if (networkData) {
            const supplychain = new web3.eth.Contract(SupplyChainABI.abi, networkData.address);
            setSupplyChain(supplychain);
            var i;
            const medCtr = await supplychain.methods.medicineCtr().call();
            const med = {};
            const medStage = [];
            for (i = 0; i < medCtr; i++) {
                med[i + 1] = await supplychain.methods.MedicineStock(i + 1).call();
                medStage[i + 1] = await supplychain.methods.showStage(i + 1).call();
            }
            setMED(med);
            setMedStage(medStage);
            const rmsCtr = await supplychain.methods.rmsCtr().call();
            const rms = {};
            for (i = 0; i < rmsCtr; i++) {
                rms[i + 1] = await supplychain.methods.RMS(i + 1).call();
            }
            setRMS(rms);
            const manCtr = await supplychain.methods.manCtr().call();
            const man = {};
            for (i = 0; i < manCtr; i++) {
                man[i + 1] = await supplychain.methods.MAN(i + 1).call();
            }
            setMAN(man);
            const disCtr = await supplychain.methods.disCtr().call();
            const dis = {};
            for (i = 0; i < disCtr; i++) {
                dis[i + 1] = await supplychain.methods.DIS(i + 1).call();
            }
            setDIS(dis);
            const retCtr = await supplychain.methods.retCtr().call();
            const ret = {};
            for (i = 0; i < retCtr; i++) {
                ret[i + 1] = await supplychain.methods.RET(i + 1).call();
            }
            setRET(ret);
            setloader(false);
        }
        else {
            window.alert('The smart contract is not deployed to current network')
        }
    }
    if (loader) {
        return (
            <div>
                <h1 className="wait">Loading...</h1>
            </div>
        )
    }
    if (TrackTillSold) {
        return (
            <>
                <Navbar />
                <div className="container mt-5 pt-5">
                    <article className="col ">
                        <h3><b><u>Medicine:</u></b></h3>
                        <div className='table-responsive'>
                            <table className="table table-bordered table-white-text">
                                <tbody>
                                    <tr>
                                        <th>Medicine ID:</th>
                                        <td>{MED[ID].id}</td>
                                    </tr>
                                    <tr>
                                        <th>Name:</th>
                                        <td>{MED[ID].name}</td>
                                    </tr>
                                    <tr>
                                        <th>Description:</th>
                                        <td>{MED[ID].description}</td>
                                    </tr>
                                    <tr>
                                        <th>Current stage:</th>
                                        <td>{MedStage[ID]}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </article>
                    <hr />
                    <br />
                    <section className="row">

                        <article className="col">
                            <h4><u>Raw Materials Supplied by:</u></h4>
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td><b>Supplier ID:</b></td>
                                        <td>{RMS[MED[ID].RMSid].id}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Name:</b></td>
                                        <td>{RMS[MED[ID].RMSid].name}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Place:</b></td>
                                        <td>{RMS[MED[ID].RMSid].place}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </article>
                        <span>&#10132;</span>
                        <article className="col">
                            <h4><u>Manufactured by:</u></h4>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Manufacturer ID</th>
                                        <th>Name</th>
                                        <th>Place</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{MAN[MED[ID].MANid].id}</td>
                                        <td>{MAN[MED[ID].MANid].name}</td>
                                        <td>{MAN[MED[ID].MANid].place}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </article>
                        <span>&#10132;</span>
                        <article className="col">
                            <h4><u>Distributed by:</u></h4>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Distributor ID</th>
                                        <td>{DIS[MED[ID].DISid].id}</td>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <td>{DIS[MED[ID].DISid].name}</td>
                                    </tr>
                                    <tr>
                                        <th>Place</th>
                                        <td>{DIS[MED[ID].DISid].place}</td>
                                    </tr></thead>
                            </table>

                        </article>
                        <span>&#10132;</span>
                        <article className="col">
                            <h4><u>Retailed by:</u></h4>
                            <table class="table table-bordered">

                                <thead>
                                    <tr>
                                        <th>Retailer ID</th>
                                        <td>{RET[MED[ID].RETid].id}</td>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <td>{RET[MED[ID].RETid].name}</td>
                                    </tr>
                                    <tr>
                                        <th>Place</th>
                                        <td>{RET[MED[ID].RETid].place}</td>
                                    </tr>
                                </thead>


                            </table>

                        </article>
                        <span>&#10132;</span>
                        <article className="col">
                            <h4><u>Sold</u></h4>
                        </article>
                    </section>
                    <button onClick={() => {
                        showTrackTillSold(false);
                    }} className="btn btn-outline-success btn-sm mb-5 me-3">Track Another Item</button>
                    <span onClick={() => {
                        history.push('/')
                    }} className="btn btn-outline-danger btn-sm mb-5"> HOME</span>
                </div >
                <Footer />
            </>

        )
    }
    if (TrackTillRetail) {
        return (
            <>
                <Navbar />
                <div className="container mt-5 pt-5">
                    <article className="col">
                        <h3><b><u>Medicine:</u></b></h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Medicine ID</th>
                                    <td>{MED[ID].id}</td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{MED[ID].name}</td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td>{MED[ID].description}</td>
                                </tr>
                                <tr>
                                    <th>Current Stage</th>
                                    <td>{MedStage[ID]}</td>
                                </tr>
                            </thead>
                        </table>

                    </article>
                    <hr />
                    <br />
                    <section className="row">

                        <article className="col">
                            <h4><u>Raw Materials Supplied by:</u></h4>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Supplier ID</th>
                                        <td>{RMS[MED[ID].RMSid].id}</td>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <td>{RMS[MED[ID].RMSid].name}</td>
                                    </tr>
                                    <tr>
                                        <th>Place</th>
                                        <td>{RMS[MED[ID].RMSid].place}</td>
                                    </tr>
                                </thead>
                            </table>

                        </article>
                        <span>&#10132;</span>
                        <article className="col">
                            <h4><u>Manufactured by:</u></h4>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Manufacturer ID</th>
                                        <td>{MAN[MED[ID].MANid].id}</td>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <td>{MAN[MED[ID].MANid].name}</td>
                                    </tr>
                                    <tr>
                                        <th>Place</th>
                                        <td>{MAN[MED[ID].MANid].place}</td>
                                    </tr>
                                </thead>
                            </table>

                        </article>
                        <span>&#10132;</span>
                        <article className="col">
                            <h4><u>Distributed by:</u></h4>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Distributor ID</th>
                                        <td>{DIS[MED[ID].DISid].id}</td>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <td>{DIS[MED[ID].DISid].name}</td>
                                    </tr>
                                    <tr>
                                        <th>Place</th>
                                        <td>{DIS[MED[ID].DISid].place}</td>
                                    </tr>
                                </thead>
                            </table>

                        </article>
                        <span>&#10132;</span>
                        <article className="col">
                            <h4><u>Retailed by:</u></h4>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Retailer ID</th>
                                        <td>{RET[MED[ID].RETid].id}</td>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <td>{RET[MED[ID].RETid].name}</td>
                                    </tr>
                                    <tr>
                                        <th>Place</th>
                                        <td>{RET[MED[ID].RETid].place}</td>
                                    </tr>
                                </thead>
                            </table>

                        </article>
                    </section>
                    <button onClick={() => {
                        showTrackTillRetail(false);
                    }} className="btn btn-outline-success btn-sm mb-5 me-3">Track Another Item</button>
                    <span onClick={() => {
                        history.push('/')
                    }} className="btn btn-outline-danger btn-sm mb-5"> HOME</span>
                </div >

                <Footer />
            </>

        )
    }
    if (TrackTillDistribution) {
        return (
            <>
                <Navbar />
                <div className="container mt-5 pt-5">
                    <article className="col">
                        <h3><b><u>Medicine:</u></b></h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Medicine ID</th>
                                    <td>{MED[ID].id}</td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{MED[ID].name}</td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td>{MED[ID].description}</td>
                                </tr>
                                <tr>
                                    <th>Current Stage</th>
                                    <td>{MedStage[ID]}</td>
                                </tr>
                            </thead>
                        </table>

                    </article>
                    <hr />
                    <br />
                    <section className="row">

                        <article className="col">
                            <h4><u>Raw Materials Supplied by:</u></h4>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Supplier ID</th>
                                        <td>{RMS[MED[ID].RMSid].id}</td>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <td>{RMS[MED[ID].RMSid].name}</td>
                                    </tr>
                                    <tr>
                                        <th>Place</th>
                                        <td>{RMS[MED[ID].RMSid].place}</td>
                                    </tr>
                                </thead>
                            </table>

                        </article>
                        <span>&#10132;</span>
                        <article className="col">
                            <h4><u>Manufactured by:</u></h4>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Manufacturer ID</th>
                                        <td>{MAN[MED[ID].MANid].id}</td>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <td>{MAN[MED[ID].MANid].name}</td>
                                    </tr>
                                    <tr>
                                        <th>Place</th>
                                        <td>{MAN[MED[ID].MANid].place}</td>
                                    </tr>
                                </thead>
                            </table>

                        </article>
                        <span>&#10132;</span>
                        <article className="col">
                            <h4><u>Distributed by:</u></h4>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Distributor ID</th>
                                        <td>{DIS[MED[ID].DISid].id}</td>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <td>{DIS[MED[ID].DISid].name}</td>
                                    </tr>
                                    <tr>
                                        <th>Place</th>
                                        <td>{DIS[MED[ID].DISid].place}</td>
                                    </tr>
                                </thead>
                            </table>

                        </article>
                    </section>
                    <button onClick={() => {
                        showTrackTillDistribution(false);
                    }} className="btn btn-outline-success btn-sm mb-5 me-3">Track Another Item</button>
                    <span onClick={() => {
                        history.push('/')
                    }} className="btn btn-outline-danger btn-sm mb-5"> HOME</span>
                </div >
                <Footer />
            </>

        )
    }
    if (TrackTillManufacture) {
        return (
            <>
                <Navbar />
                <div className="container mt-5 mb-5">
                    <article className="col">
                        <h3><b><u>Medicine:</u></b></h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Medicine ID</th>
                                    <td>{MED[ID].id}</td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{MED[ID].name}</td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td>{MED[ID].description}</td>
                                </tr>
                                <tr>
                                    <th>Current Stage</th>
                                    <td>{MedStage[ID]}</td>
                                </tr>
                            </thead>
                        </table>

                    </article>
                    <hr />
                    <br />
                    <section className="row">

                        <article className="col">
                            <h4><u>Raw Materials Supplied by:</u></h4>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Medicine ID</th>
                                        <td>{MED[ID].id}</td>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <td>{MED[ID].name}</td>
                                    </tr>
                                    <tr>
                                        <th>Description</th>
                                        <td>{MED[ID].description}</td>
                                    </tr>
                                    <tr>
                                        <th>Current Stage</th>
                                        <td>{MedStage[ID]}</td>
                                    </tr>
                                </thead>
                            </table>

                        </article>
                        <span>&#10132;</span>
                        <article className="col">
                            <h4><u>Manufactured by:</u></h4>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Manufacturer ID</th>
                                        <td>{MAN[MED[ID].MANid].id}</td>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <td>{MAN[MED[ID].MANid].name}</td>
                                    </tr>
                                    <tr>
                                        <th>Place</th>
                                        <td>{MAN[MED[ID].MANid].place}</td>
                                    </tr>
                                </thead>
                            </table>

                        </article>
                    </section>
                    <button onClick={() => {
                        showTrackTillManufacture(false);
                    }} className="btn btn-outline-success btn-sm mt-t me-3">Track Another Item</button>
                    <span onClick={() => {
                        history.push('/')
                    }} className="btn btn-outline-danger btn-sm mt-t "> HOME</span>
                </div >

                <Footer />
            </>

        )
    }
    if (TrackTillRMS) {
        return (
            <>
                <Navbar />
                <div className="container mt-5 pt-5">
                    <article className="col">
                        <h3><b><u>Medicine:</u></b></h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Medicine ID</th>
                                    <td>{MED[ID].id}</td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{MED[ID].name}</td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td>{MED[ID].description}</td>
                                </tr>
                                <tr>
                                    <th>Current stage</th>
                                    <td>{MedStage[ID]}</td>
                                </tr>
                            </thead>
                        </table>

                    </article>
                    <hr />
                    <br />
                    <section className="row">

                        <article className="col">
                            <h4><u>Raw Materials Supplied by:</u></h4>
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th>Supplier ID</th>
                                        <td>{RMS[MED[ID].RMSid].id}</td>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <td>{RMS[MED[ID].RMSid].name}</td>
                                    </tr>
                                    <tr>
                                        <th>Place</th>
                                        <td>{RMS[MED[ID].RMSid].place}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </article>
                    </section>
                    <button onClick={() => {
                        showTrackTillRMS(false);
                    }} className="btn btn-outline-success btn-sm mb-5 me-3">Track Another Item</button>
                    <span onClick={() => {
                        history.push('/')
                    }} className="btn btn-outline-danger btn-sm mb-5"> HOME</span>
                </div >

                <Footer />

            </>

        )
    }
    if (TrackTillOrdered) {
        return (
            <>
                <Navbar/>
                <div className="container mt-5 pt-5">
                    <article className="col">
                        <h3><b><u>Medicine:</u></b></h3>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Medicine ID</th>
                                    <td>{MED[ID].id}</td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{MED[ID].name}</td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td>{MED[ID].description}</td>
                                </tr>
                                <tr>
                                    <th>Current stage</th>
                                    <td>{MedStage[ID]}</td>
                                </tr>
                            </thead>
                        </table>

                        <hr />
                        <br />
                        <h5>Medicine Not Yet Processed...</h5>
                        <button onClick={() => {
                            showTrackTillOrdered(false);
                        }} className="btn btn-outline-success btn-sm mb-5 me-3">Track Another Item</button>
                        <span onClick={() => {
                            history.push('/')
                        }} className="btn btn-outline-danger btn-sm mb-5 "> HOME</span>
                    </article>
                    {/* <section className="row">
                    
                    <article className="col-3">
                        <h4><u>Raw Materials Supplied by:</u></h4>
                        <p><b>Supplier ID: </b>{RMS[MED[ID].RMSid].id}</p>
                        <p><b>Name:</b> {RMS[MED[ID].RMSid].name}</p>
                        <p><b>Place: </b>{RMS[MED[ID].RMSid].place}</p>
                    </article>
                </section> */}
                </div >
                <Footer/>
            </>

        )
    }
    const handlerChangeID = (event) => {
        setID(event.target.value);
    }
    const redirect_to_home = () => {
        history.push('/')
    }
    const handlerSubmit = async (event) => {
        event.preventDefault();
        var ctr = await SupplyChain.methods.medicineCtr().call();
        if (!((ID > 0) && (ID <= ctr)))
            alert("Invalid Medicine ID!!!");
        else {
            // eslint-disable-next-line
            if (MED[ID].stage == 5)
                showTrackTillSold(true);
            // eslint-disable-next-line
            else if (MED[ID].stage == 4)
                showTrackTillRetail(true);
            // eslint-disable-next-line
            else if (MED[ID].stage == 3)
                showTrackTillDistribution(true);
            // eslint-disable-next-line
            else if (MED[ID].stage == 2)
                showTrackTillManufacture(true);
            // eslint-disable-next-line
            else if (MED[ID].stage == 1)
                showTrackTillRMS(true);
            else
                showTrackTillOrdered(true);

        }
    }

    return (
        <>

            <Navbar />
            <div className='mt-5 pt-5 container d-flex-column align-items-center'>

                <div className="text-center my-5">
                    <h5>Enter Medicine ID to Track it</h5>
                </div>

                <div className='d-flex align-items-center justify-content-center my-5'>
                    <form onSubmit={handlerSubmit} class="cs-search w-50">

                        <input className="form-control-sm cs-search_input" type="text" onChange={handlerChangeID} placeholder="Enter Medicine ID" required />
                        <button className="cs-search_btn" onSubmit={handlerSubmit}>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" stroke="currentColor" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.5 18L13.875 14.375" stroke="currentColor" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </form>
                </div>

            </div>
            <Footer />
        </>

    )
}

export default Track
