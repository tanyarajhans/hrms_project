var connection = require('../config');
const express = require('express');

const router = express.Router();

router.post('/leaveapply', function (req, res) {
    var leavereq = {
        "name":req.body.name,
        "fromdate": req.body.fromdate,
        "todate":req.body.todate,
        "reason":req.body.reason,
       "uid":req.body.uid
    }

    connection.query('insert into leavereq set ?', leavereq, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
            console.log(error);

        } else {
            let sql = "INSERT INTO notification SET ?";
            let notification = {
                  uid: "4",
                  title: "Notification",
                  description: "Request for new leave",
                  status:"0"
              };
        
    
        connection.query(sql, notification, function (error, results, fields) {
            if (!error) {
                res.json({
                    title:"Notification",
                    message: 'New request for leave !'
                })
                
            }else{
                console.log(error);
                res.send({msg:"notification not send"});
            }
            
        });
        }
    });
});


router.get('/leavedata', (req, res) => {
    connection.query('select name ,fromdate,todate,reason from leavereq;', (error, rows, fields) => {
        if (!error)
            res.send(rows);
        else
            console.log(error);
    });
});

router.put('/updateleave/:lid', (req, res) => {
    let sql = `update leavereq set name= '${req.body.name}',fromdate= '${req.body.fromdate}',todate='${req.body.todate}',reason='${req.body.reason}' where lid= '${req.params.lid}'`;
    connection.query(sql, (error, rows, fields) => {
        if (!error)
            res.send('Leave updated successfully');
        else
            console.log(error);
    });
});

// router.delete('/deleteleave/:lid', (req, res) => {
//     connection.query('delete from leavereq where lid= ?', [req.params.lid], (error, rows, fields) => {
//         if (!error)
//             res.send('Leave deleted successfully');
//         else
//             console.log(error);
//     });
// });

module.exports = router;