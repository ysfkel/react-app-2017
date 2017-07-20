import React from 'react'
import {Link} from 'react-router-dom'

const SideNav=()=>(
       <div>
           <ul>
               <li><Link to="/profile">Profile</Link></li>
               <li >
                   <Link to="/favourites">Favourites</Link>
               </li>
                <li >
                   <Link to="/listings">Listings</Link>
               </li>
           </ul>
       </div>
)



export default SideNav