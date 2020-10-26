import React, { Component } from 'react'
import {Link} from 'react-router-dom';



 class Project extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6"><h5 className=" pt-3"><b>Projects</b></h5></div>  </div>


                    <hr></hr>

                    <div style={{marginLeft:"1100px",marginTop:"40px"}}><Link to=""><button className="tablinks btn-info btn-lg text-black text-center button" >Add Project</button></Link></div>
                    <div className="row">
                    <table class="table table-bordered" style={{marginTop:"80px", marginLeft:"200px", marginRight:"800px", border: "2 px solid black", borderCollapse: "collapse"}}>
                        <tr style={{border: "1 px solid black"}}>
                            <td style={{border: "1 px solid black", backgroundColor:"#fd2eb3"}}>Projects</td><td style={{border: "1 px solid black", backgroundColor:"#fd2eb3"}} >Modules</td>
                        </tr>
                    </table></div>
                  
                    
                    
                    <div  style={{marginLeft:"1100px",marginTop:"40px"}}><Link to=""><button className="tablinks btn-info btn-lg text-black button" >Add Module</button></Link></div>
                    <div  style={{marginLeft:"1100px"}}><Link to=""><button className="tablinks btn-info btn-lg text-black button" >Estimated Time</button></Link></div>
                    <div  style={{marginLeft:"1100px"}}><Link to=""><button className="tablinks btn-info btn-lg text-black button" >Edit</button></Link></div>
            </div>
        )
    }
}

export default Project