import React, { Component } from 'react'
import ListingComponent from './listing.component';

export default class ListingsComponent extends Component{
         

  

        render(){
                var list=[1,2,3,4,5,6,7,8,9,0]
                var listings=list.map((item)=>{
                      return  <ListingComponent key={item} item={item}></ListingComponent>
                })

                return(
                     <div>
                        <h1> Listings</h1>
                        {listings}
                     </div>
                )
        }

}


