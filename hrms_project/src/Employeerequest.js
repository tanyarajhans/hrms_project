import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Employeerequest extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-4"><h5 className=" pt-3"><b>Employee Request</b></h5></div>
                    <div className="col-4"></div>
                    <div className="col-4 pt-2">
                    <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle"  id="navbardrop" data-toggle="dropdown"><b>Employee</b></a>
                    <div class="dropdown-menu bg-dark">
                    <Link to="" class="dropdown-item"><i class="fas fa-thumbs-up"></i>Approve</Link>
                    <Link to="" class="dropdown-item"><i class="fab fa-stack-exchange"></i>Change Detail</Link>
                    <Link to="" class="dropdown-item"><i class="fas fa-underline"></i>Decline</Link>
                    <Link to="" class="dropdown-item"><i class="fas fa-exchange-alt"></i>Change Request</Link>
                    </div>
                    </div>
                    </div>
                </div>
                <hr></hr>


                <div className="container">
                <div className="row">
                <div className="col-6">
                
                  
                   <table style={{marginLeft:"200px",textAlign: "center",marginTop:"100px"}} class="table table-bordered ">
                   <thead  className="col-6" text-center>
                   <tr>
                   <th  style={{textAlign: "center",backgroundColor:"#43d8c9"}} colSpan="2">Leave Requests</th>
                   <th style={{backgroundColor:"#A9A9A9"}} colSpan="2">Detail Requests</th>
                   </tr>

                   </thead>
                  
<tbody style={{textAlign: "center"}}>
                       
                        <tr>
                            <td style={{textAlign: "center"}}>Name</td>
                            <td >a</td>
                            <td >Name</td>
                            <td >b</td>
                           
                            </tr>


                                <tr>
                            <td style={{textAlign: "center"}}>From date</td>
                            <td >a</td>
                            <td >Request</td>
                      <td ></td>
                         </tr>

                            <tr>
                                <td style={{textAlign: "center"}}>To Date</td><td></td><td colspan="2"></td>
                            </tr>
                            <tr>
                                <td style={{textAlign: "center"}}>Reason</td><td></td><td colspan="2"></td>
                            </tr>
                            <tr>
                            <td style={{textAlign: "center"}}>Approved by</td>
                            <td></td><td colspan="2"></td></tr>
        
                        <tr><td style={{backgroundColor: "green", textAlign: "center" }}colspan="2">Approve</td>
                        <td style={{backgroundColor: "green" }} colspan="2">Change Details</td></tr>
                        <tr>
                            <td style={{backgroundColor: "red", textAlign: "center"}}colspan="2">Decline</td>
                            <td style={{backgroundColor: "red" }}colspan="2">Decline Change Request</td>
                        </tr>
                        </tbody>
                        </table>
                      </div></div></div></div>
                   
                    
            
        )
    }
}

export default Employeerequest

