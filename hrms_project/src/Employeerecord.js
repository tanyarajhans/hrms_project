import React, { Component } from 'react'

export class Employeerecord extends Component {
    render() {
        return (
            <div>
                <h5 className="text-center pt-3" style={{color: "#f79071"}}><b>Employee Record</b></h5>
                <hr></hr>
                <div className="container">
                    <div className="row">

                    
                        <div className="col-12">
                   <table style={{marginLeft:"100px"}} class="table table-bordered ">
                   <thead  class=" text-center">
                   <tr>
                   <th style={{textAlign: "center",backgroundColor:"#43d8c9"}} colSpan="2">Weekly</th>
                   <th style={{backgroundColor:"#A9A9A9"}} colSpan="2">Daily</th>

                   </tr>

                   <tr>
                   <th  colSpan="2"></th>
                   <th  colSpan="2"></th>

                   </tr>


                        <tr>
                            <th style={{textAlign: "center",backgroundColor:"#43d8c9"}}>Week no.</th>
                            <th style={{backgroundColor:"#fd2eb3"}}>Project</th>
                            <th style={{backgroundColor:"#fd2eb3"}}>Module</th>
                            <th style={{backgroundColor:"#43d8c9"}}>Task</th>
                            <th style={{backgroundColor:"#43d8c9"}}>Task Completed</th>
                        </tr>
                        </thead>
                        <tr >
                            <td style={{textAlign:"center"}}>1</td>
                            <td>A</td>
                            <td>a</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr >
                            <td style={{textAlign:"center"}}>2</td>
                            <td>A</td>
                            <td>a</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr >
                            <td style={{textAlign:"center"}}>3</td>
                            <td>A</td>
                            <td>a</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr >
                            <td style={{textAlign:"center"}}>4</td>
                            <td>A</td>
                            <td>a</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr >
                            <td style={{textAlign:"center"}}>5</td>
                            <td>A</td>
                            <td>a</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr >
                            <td style={{textAlign:"center"}}>6</td>
                            <td>A</td>
                            <td>a</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr >
                            <td style={{textAlign:"center"}}>7</td>
                            <td>A</td>
                            <td>a</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr >
                            <td style={{textAlign:"center"}}>8</td>
                            <td>A</td>
                            <td>a</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr >
                            <td style={{textAlign:"center"}}>9</td>
                            <td>A</td>
                            <td>a</td>
                            <td></td>
                            <td></td>
                        </tr>
                        
                   </table>
                   </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default Employeerecord
