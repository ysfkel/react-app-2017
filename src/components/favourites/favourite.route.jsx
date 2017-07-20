import React from 'react'
import { Route } from 'react-router-dom'
import FavouriteListComponent from './favourite-list.component'

const FavouriteRoutes=()=>(
 
     <Route path="/favourites" component={FavouriteListComponent}></Route>

)

export default FavouriteRoutes
