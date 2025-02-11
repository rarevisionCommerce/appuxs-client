import Header from "./Header";
import Home from "./Home.jsx"
import { BrowserRouter as Router,
Route, Switch, Link } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Faq from "./Faq.jsx"
import Contacts from "./Contacts.jsx";
import About from "./About.jsx";
import Drop from "./ScrollPage.jsx";
import BulkSMS from "./BulkSMS.jsx";
import WebDev from "./WebDev.jsx";
import WebDesign from "./WebDesign.jsx";
import BizMgnt from "./BizMgnt.jsx";
import MobileApp from "./MobileApp.jsx";
import Projects from "./Projects.jsx";
import Estimate from "./Estimate.jsx";

function App() {
  return(
    <>
  <Router>
    <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/Faq" component={Faq}/>
        <Route  path="/Contacts" component={Contacts}/>
        <Route  path="/About" component={About}/>
        <Route  path="/About" component={Drop}/>
        <Route  path="/Bulk" component={BulkSMS}/>
        <Route  path="/WebDev" component={WebDev}/>
        <Route  path="/WebDesign" component={WebDesign}/>
        <Route  path="/BizMgnt" component={BizMgnt}/>
        <Route  path="/MobileApp" component={MobileApp}/>
        <Route  path="/Projects" component={Projects}/>
        <Route  path="/Estimate" component={Estimate}/>
      </Switch>   
      
  </Router>
  
  </>
  );
}

export default App
