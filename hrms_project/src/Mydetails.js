import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './All.css'

export class Mydetails extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12"><h4 className=" pt-3">My Details</h4></div>
                    <div className="col-12 pt-3 text-center"><Link to="Employeedetail"><button className="tablinks btn-secondary text-white button">Employee Detail</button></Link></div>
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

export default Mydetails
