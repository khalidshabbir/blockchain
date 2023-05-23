import './App.css';
import AssignRoles from './AssignRoles';
import Home from './pages/Home';
import Main from './Home';
import AddMed from './AddMed';
import Supply from './Supply'
import SupplyM from './SupplyManufacture'
import SupplyD from './SupplyDistributer'
import SupplyR from './SupplyRetailer'
import Track from './pages/Track'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Error404 from './pages/Error404';
import Aboutus from './pages/Aboutus';
import Howitworks from './pages/Howitworks';
import ConnectWallet from './pages/ConnectWallet';
import ContactUs from './pages/ContactUs';
import SupplyChain from './SupplyChain';
import TermsConditions from './pages/TermsConditions';
import Privacy from './pages/Privacy';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/roles" exact component={AssignRoles} />
          <Route path="/main" exact component={Main} />
          <Route path="/addmed" exact component={AddMed} />
          <Route path="/supplyRaw_material" exact component={Supply} />
          <Route path="/supplymanufactureing" exact component={SupplyM} />
          <Route path="/supplydistributer" exact component={SupplyD} />
          <Route path="/supplyretailer" exact component={SupplyR} />
          <Route path="/track" exact component={Track} />
          <Route path="/aboutus" exact component={Aboutus} />
          <Route path="/howitwork" exact component={Howitworks} />
          <Route path="/connectWallet" exact component={ConnectWallet} />
          <Route path="/contactus" exact component={ContactUs} />
          <Route path="/supplychain" exact component={SupplyChain} />
          <Route path="/term-conditions" exact component={TermsConditions} />
          <Route path="/privacy" exact component={Privacy} />

          {/* ============================================== */}
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
