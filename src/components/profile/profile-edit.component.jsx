import React from 'react'
import { Link, Route } from 'react-router-dom'
import SettingsComponent from './settings/settings.component'
import ProfileStyle from './profile.style.js'

export default class Profile extends React.Component{
       render(){
     
           return(
               <div style={ProfileStyle}>
                  <h1>Profile</h1>
                   <Link to="/profile/settings">settings</Link>
                    <Route path="/profile/settings" component={SettingsComponent}></Route>
               </div>

           )
       }
}