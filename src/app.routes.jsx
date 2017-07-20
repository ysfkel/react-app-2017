import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Profile from './components/profile/profile-edit.component'
import FavouriteListComponent from './components/favourites/favourite-list.component'
import ListingsComponent from './components/listings/listings.component'

const AppRoutes=()=>(
      <div>
          <Switch>
                <Route exact path="/profile" component={Profile}></Route>
                <Route path="/favourites" component={FavouriteListComponent}></Route>
                <Route path="/listings" component={ListingsComponent}></Route>
            </Switch>
      </div>
)

export default AppRoutes