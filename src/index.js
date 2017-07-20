import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MainHeader from './components/main-header/main-header.component';
import SideNav from './components/side-nav/side-nav.component'
import AppRoutes from './app.routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

injectTapEventPlugin();



ReactDOM.render(
    <MuiThemeProvider>                     
    <Router>
       <div className="site-container">
          <MainHeader></MainHeader>
            <div className="side-nav">
                <SideNav> </SideNav>
            </div>
            <div className="view-container">
                <AppRoutes> </AppRoutes>
           </div>

       </div>
    </Router>
    </MuiThemeProvider>
    ,
     document.getElementById('root')
    
    );
registerServiceWorker();
