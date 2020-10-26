import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Hradmin.css'
import './Employeerequest'
import './Late'
import './Employeerecord'

class Hradmin extends Component {
  render() {
    return (
      <div className="Hradmin">
       <nav class="navbar navbar-expand-sm justify-content-end">
        <ul class="navbar-nav">
        <li class="nav-item dropdown">
              <Link to="" class="nav-link dropdown-toggle"  id="navbardrop" data-toggle="dropdown"><i class="fas fa-id-card fa-2x"></i></Link>
              <div class="dropdown-menu bg-secondary">
                <Link to="Mydetails" class="dropdown-item"><i class="fas fa-address-book fa-2x"></i>My Details</Link>
                <Link to="" class="dropdown-item"><i class="fas fa-id-badge fa-2x"></i>My profile</Link>
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

  <div className="tabcontent tab text-capitalize tab content bg-dark ">
      <Link to="Late"><button className="tablinks"><i class="fas fa-clock"></i>Late Today</button></Link>
      <Link to="Employeerequest"><button className="tablinks"><i class="fab fa-elementor"></i>Employee Request</button></Link>
      <Link to=""><button className="tablinks"><i class="fas fa-laptop-medical"></i>Absence Record</button></Link>
      <Link to="Employeerecord"><button className="tablinks"><i class="fas fa-book-reader"></i>Employee Record</button></Link>
      <Link to="Employeereport"><button className="tablinks"><i class="fas fa-republican"></i>Employee Report</button></Link>
      <Link to="Project"><button className="tablinks"><i class="fas fa-tasks"></i>Projects</button></Link>
  </div>  
</div>


)
}
}

export default Hradmin
