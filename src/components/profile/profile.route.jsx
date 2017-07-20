import React from 'react'
import {Route} from 'react-router-dom'
import Profile from './profile-edit.component'



 const ProfileRoute=()=>(
  
      <Route path="/profile" component={Profile}></Route>

)

export default ProfileRoute