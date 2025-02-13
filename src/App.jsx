import Header from "./Website/Components/Header.jsx"
import Home from "./Website/Pages/Home.jsx"
import {BrowserRouter as Router,Route, Switch, Link} from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import Faq from "./Website/Pages/Faq.jsx"
import Contacts from "./Website/Pages/Contacts.jsx";
import About from "./Website/Pages/About.jsx";
import BulkSMS from "./Website/Pages/BulkSMS.jsx";
import WebDev from "./Website/Pages/WebDev.jsx";
import WebDesign from "./Website/Pages/WebDesign.jsx";
import BizMgnt from "./Website/Pages/BizMgnt.jsx";
import MobileApp from "./Website/Pages/MobileApp.jsx";
import Projects from "./Website/Pages/Projects.jsx";
import Estimate from "./Website/Components/Estimate.jsx";

function App() {
  return (
    <>
      <MantineProvider>

        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Faq" component={Faq} />
            <Route path="/Contacts" component={Contacts} />
            <Route path="/About" component={About} />
            <Route path="/Bulk-SMS-Intergration" component={BulkSMS} />
            <Route path="/Web-Development" component={WebDev} />
            <Route path="/Web-Design" component={WebDesign} />
            <Route path="/Business-Management" component={BizMgnt} />
            <Route path="/Mobile-App-Development" component={MobileApp} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Estimate" component={Estimate} />
          </Switch>

        </Router>
      </MantineProvider>

    </>
  );
}

export default App
