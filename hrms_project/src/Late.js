import React, { Component } from 'react'

 class Late extends Component {
  render() {
    return (
      <div className="Late">
        <div className="col-4"><h5 className=" pt-3"><b>Late Today</b></h5></div>
        <hr></hr>
        <div class="container">
          <div className="row">
           <div className="col-12">
                        <table class="table table-bordered table-responsive-sm" style={{marginLeft: "80px", marginTop:"50px"}}>
                        <thead class="text-center">
                        <tr>
                            <th>Name</th>
                            <th>Check in Time</th>
                            <th>Late counts</th>
                            <th>Last 5 check ins</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>a</td>
                            <td>b</td>
                            <td>c</td>
                            <td>b</td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>b</td>
                            <td>c</td>
                            <td>b</td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>b</td>
                            <td>c</td>
                            <td>b</td>
                        </tr>
                        <tr>
                            <td>a</td>
                            <td>b</td>
                            <td>c</td>
                            <td>b</td>
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

export default Late
