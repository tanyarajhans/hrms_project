import React, { Component } from 'react'
import './All.css'
import {Link} from 'react-router-dom'


class Login extends Component {
  
    
    render() {
        return (
            <div className="">
                <div className="container">
                    <div className="card card-login mx-auto mt-5">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form method="POST">
                                <div className="form-group">
                                    <div className="form-label-group">
                                    <table>
                                      <tr>
                                       <td> <label for="inputEmail">Login ID</label></td>
                                       <td> <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name="adminname" required="required" autofocus="autofocus" style={{backgroundColor: "#43d8c9"}}></input></td></tr></table>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-label-group">
                                    <table>
                                    <tr>
                                    <td><label for="inputPassword">Password</label></td>
                                    <td><input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password"required="required" style={{backgroundColor: "#43d8c9"}}></input>
                                    </td> </tr></table>
                                    </div>
                                </div>
                                <Link to ="Newemp"><button className="btn btn-primary btn-block btn-success">Login</button></Link>
                            </form>
                             <div className="text-center">
                                <Link to="Forget" className="d-block small">Forgot Password?</Link>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
