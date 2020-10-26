import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Login from './Login';
import Forget from './Forget';
// import Newemp from './Newemp';
 import Hradmin from './Hradmin';
 import Employeerequest from './Employeerequest';
import Late from './Late';
import Employeerecord from './Employeerecord';
 import Employeereport from './Employeereport';
 import Mydetails from './Mydetails';
 import Employeedetail from './Employeedetail';
 import Project from './Project';
 

function App() {
  return (
      <BrowserRouter>
        <div>
          <Hradmin/> 
          <Route path="/" component={Login} exact />
          <Route path="/forget" component={Forget} />
          {/* <Route path="/newemp" component={Newemp} /> */}
          {/* <Route path="/hradmin" component={Hradmin}  />   */}
           <Route path="/employeerequest" component={Employeerequest} />
          <Route path="/late" component={Late} />
          <Route path="/employeerecord" component={Employeerecord} />
          <Route path="/employeereport" component={Employeereport} />
          <Route path="/mydetails" component={Mydetails} />
          <Route path="/employeedetail" component={Employeedetail} />
          <Route path="/project" component={Project} />
         
        </div>
      </BrowserRouter>
  )
  

}

export default App
