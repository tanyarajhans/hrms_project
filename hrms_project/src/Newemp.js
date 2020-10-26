import React, { Component } from 'react'
import {Link,Nav} from 'react-router-dom'
import  './Newemp.css'

 class Newemp extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end">
                   <ul class="navbar-nav">
                 <li class="nav-item dropdown">
                   <Link to="" class="nav-link dropdown-toggle"  id="navbardrop" data-toggle="dropdown"><i class="fas fa-id-card fa-2x"></i></Link>
                   <div class="dropdown-menu bg-secondary">
                      <Link to="Mydetails" class="dropdown-item"><i class="fas fa-address-book fa-2x"></i>My Details</Link>
                      <Link to="" class="dropdown-item"><i class="fas fa-id-badge fa-2x"></i>My profile</Link>
                      <Link to="" class="dropdown-item"><i class="fas fa-file-medical fa-2x"></i>My Record</Link>
                   </div>
                </li>
               <div class="search-container pt-2">
               <form action="">
               <input type="text" placeholder="Search Employee" name="search"></input>
              <button type="submit" className=""><i className="fa fa-search fa-1x"></i></button>
            </form>
          </div>
        </ul>
    </nav>


    
      
            </div>
        )
    }
}

export default Newemp
