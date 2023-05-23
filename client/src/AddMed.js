import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import Web3 from "web3";
import SupplyChainABI from "./artifacts/SupplyChain.json"
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function AddMed() {
    const history = useHistory()
    useEffect(() => {
        loadWeb3();
        loadBlockchaindata();
    }, [])

    const [currentaccount, setCurrentaccount] = useState("");
    const [loader, setloader] = useState(true);
    const [SupplyChain, setSupplyChain] = useState();
    const [MED, setMED] = useState();
    const [MedName, setMedName] = useState();
    const [MedDes, setMedDes] = useState();
    const [MedStage, setMedStage] = useState();


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
                med[i] = await supplychain.methods.MedicineStock(i + 1).call();
                medStage[i] = await supplychain.methods.showStage(i + 1).call();
            }
            setMED(med);
            setMedStage(medStage);
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
    const redirect_to_home = () => {
        history.push('/')
    }
    const handlerChangeNameMED = (event) => {
        setMedName(event.target.value);
    }
    const handlerChangeDesMED = (event) => {
        setMedDes(event.target.value);
    }
    const handlerSubmitMED = async (event) => {
        event.preventDefault();
        try {
            var reciept = await SupplyChain.methods.addMedicine(MedName, MedDes).send({ from: currentaccount });
            if (reciept) {
                loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!")
        }
    }
    return (
        <>
            <Navbar />
            <div className='container mt-5 pt-5 pb-5'>

            <div className="">
                    <div className="cs-cta cs-style2 text-center cs-white_bg py-3 m-0">
                        <h4 className="cs-cta_title">Current Account Address</h4>
                        <div className="cs-cta_subtitle">{currentaccount}</div>

                    </div>
                </div>

                <br />
                <div className='text-center mt-5'><h5>Add Medicine Order</h5></div>
                <form onSubmit={handlerSubmitMED} class="row">
                    <div class="col-12">
                        <input class="form-control" type="text" onChange={handlerChangeNameMED} placeholder="Medicine Name" required />
                    </div>
                    <div class="col-12 mt-3">
                        <input class="form-control" type="text" onChange={handlerChangeDesMED} placeholder="Medicine Description" required />
                    </div>
                    <div class="col-12 mt-3">
                        <button class="btn btn-outline-success btn-block w-100" onSubmit={handlerSubmitMED}>Order</button>
                    </div>
                </form>

                <br />
                <h5>Ordered Medicines</h5>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Current Stage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(MED).map(function (key) {
                            return (
                                <tr key={key}>
                                    <td>{MED[key].id}</td>
                                    <td>{MED[key].name}</td>
                                    <td>{MED[key].description}</td>
                                    <td>
                                        {
                                            MedStage[key]
                                        }
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <Footer/>
        </>

    )
}

export default AddMed
