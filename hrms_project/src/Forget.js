import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './All.css'

class Forgot extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="card card-login mx-auto mt-5">
                        <div className="card-header">Reset Password</div>
                        <div className="card-body">
                            <div className="text-center mb-4">
                                <h4>Forgot your password?</h4>
                            </div>
                            <form>
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="form-control" placeholder="Enter email address" required="required" autofocus="autofocus"></input>
                                        <label for="inputEmail">Enter email address</label>
                                    </div>
                                </div>
                                <a className="btn btn-primary btn-block">Reset Password</a>
                            </form>
                            <div className="text-center">
                            <Link to="" className="d-block small">Login Page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Forgot
