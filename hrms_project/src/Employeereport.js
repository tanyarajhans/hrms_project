import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './All.css'

export class Employeereport extends Component {
    render() {
        return (
            <div>
                 <div className="row">
                    <div className="col-6"><h5 className=" pt-3"><b>Employee Report</b></h5></div>
                   
                    </div>
                    <hr></hr>
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                   <table class="table table-bordered" style={{marginLeft: "80px", marginTop:"50px"}}>
                   <thead class=" text-center">
                        <tr>
                            <th>Name</th>
                            <th>Module</th>
                            <th>Review</th>
                            <th>Approval by</th>
                        </tr>
                        </thead>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                   </table>
                   </div>
                   </div>
                   <div style={{marginLeft:"750px",marginTop:"150px",display:"inline-block", color:"#44cd3c2", border:"1 px solid black" }}><Link to=""><button className="tablinks btn-info btn-lg text-white button">Generate Complete Report</button></Link></div>
                </div>
            
            </div>
        )
    }
}

export default Employeereport
