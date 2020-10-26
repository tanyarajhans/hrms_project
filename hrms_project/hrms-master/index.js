var express = require("express");
var bodyParser = require('body-parser');
var app = express();

var Users = require('./api/users');
var Projects = require('./api/project');
var Attendance = require('./api/attendance');
var Task=require('./api/task');
var Activity=require('./api/activity');
var Leavereq=require('./api/leavereq');
var Leavedet=require('./api/leavedetails');
var emprecord=require('./api/emp_record');
var approve=require('./api/approved');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
-
/* route to handle login */
app.use('/user', Users);
app.use('/project', Projects);
app.use('/attendance', Attendance);
app.use('/task', Task);
app.use('/activity', Activity);
app.use('/leaverequest', Leavereq);
app.use('/leaveinfo', Leavedet);
app.use('/emprecord', emprecord);
app.use('/approve', approve);
app.use('/notification',require('./api/notification'));
app.use("/auth/login", require("./api/auth/login"));
app.use("/auth/forget", require("./api/auth/forget"));
app.use("/auth/reset", require("./api/auth/reset"));
app.use( "/auth/updatePasswordViaEmail", require("./api/auth/updatePasswordViaEmail"));
app.use("/auth/resetPassword", require("./api/auth/resetpassword"));

app.listen(5000);