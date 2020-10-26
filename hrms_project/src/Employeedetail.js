import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Hradmin.css'

export class Employeedetail extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-4"><h5 className=" pt-3"><b>Employee Details</b></h5></div>
                    <div className="col-4"></div>
                    <div className="col-4 pt-2">
                    <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle"  id="navbardrop" data-toggle="dropdown"><b>Employee</b></a>
                    <div class="dropdown-menu bg-dark">
                    <Link to="" class="dropdown-item"><i class="fas fa-user-plus"></i>Add</Link>
                    <Link to="" class="dropdown-item"><i class="fas fa-user-edit"></i>Edit</Link>
                    </div>
                    </div>
                    </div>
                </div>
                        <hr></hr>
                        <div class="container">
                        <div className="row">
                        <div className="col-12">
                            <table class="table table-bordered table-responsive-sm">
                            <thead class="thead-dark text-center">
                            <tr>
                                <th>first Name</th>
                                <th>Last Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Zip</th>
                                <th>Join Date</th>
                            </tr>
                         </thead>
                         <tbody>
                          <tr>
                            <td>a</td>
                            <td>b</td>
                            <td>c</td>
                            <td>b</td>
                            <td>c</td>
                            <td>e</td>
                            <td>2</td>
                           </tr>
                        </tbody>
                    </table>
                
                    </div>
                    </div>
      </div>

            </div>
        )
    }
}

export default Employeedetail
