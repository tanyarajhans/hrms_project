var connection = require('../config');
const express = require('express');

const router = express.Router();

router.post('/takeattandace', function (req, res) {


    var name =req.body.name;
    var date = req.body.date;
    var time = req.body.time;
    var user_id = req.body.user_id;
    
    connection.query(`insert into attendance(name,date,time,user_id) values('${name}','${date}','${time}','${user_id}')`, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error '

            })
            console.log(error);

        } else {
            res.json({

                status: true,
                data: results,
                message: 'record  added sucessfully'
            })
        }
    });
});

router.get('/getdata', function (req, res) {
    connection.query('select  name ,date,time from attendance', (error, rows, fields) => {
        if (!error)
            res.send(rows);
        else
            console.log(error);
    });
});

// router.get('/getdata/:aid', (req, res) => {
//     connection.query('select users.fname,users.lname,users.email,users.address,users.mobile,attendance.date,attendance.time, attendance.user_id from attendance join users on attendance.user_id=users.uid where aid=?', [req.params.aid], (error, rows, fields) => {
//         if (!error)
//             res.send(rows);
//         else
//             console.log(error);
//     });
// });

// router.put('/updatedata/:aid', (req, res) => {
//     let sql = `update  attendance set projectname= '${req.body.aid}',task= '${req.body.date}',
//  estimatetime='${req.body.time}' where pid= '${req.params.user_id}'`;
//     connection.query(sql, (error, rows, fields) => {
//         if (!error)
//             res.send('Record updated successfully');
//         else
//             console.log(error);
//     });
// });

router.delete('/deletedata/:aid', (req, res) => {
    connection.query('delete from  attendance where pid= ?', [req.params.aid], (error, rows, fields) => {
        if (!error)
            res.send('Record deleted successfully');
        else
            console.log(error);
    });
});

module.exports = router;