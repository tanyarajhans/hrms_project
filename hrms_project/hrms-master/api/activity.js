var connection = require('../config');
const express = require('express');

const router = express.Router();

router.post('/addactivity', function (req, res) {
    var activity = {
        "actid": req.body.actid,
        "activity": req.body.activity,
       "tid":req.body.tid
    }

    connection.query('insert into activity set ?', activity, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
        } else {
            res.json({

                status: true,
                data: results,
                message: 'Activity added sucessfully'
            })
        }
    });
});

router.get('/activitydetails', function (req, res) {
    connection.query('select * from activity ', (error, rows, fields) => {
        if (!error)
            res.send(rows);
        else
            console.log(error);
        1
    });
});


// router.get('/activtyassign/:actid', (req, res) => {
//     connection.query('select * from activity where actid= ?', [req.params.actid], (error, rows, fields) => {
//         if (!error)
//             res.send(rows);
//         else
//             console.log(error);
//     });
// });

router.put('/updatedata/:actid', (req, res) => {
    let sql = `update activity set activity='${req.body.activity}' where actid= '${req.params.actid}'`;
    connection.query(sql, (error, rows, fields) => {
        if (!error)
            res.send('Activity updated successfully');
        else
            console.log(error);
    });
});

router.delete('/deletedata/:tid', (req, res) => {
    connection.query('delete from activity where tid= ?', [req.params.tid], (error, rows, fields) => {
        if (!error)
            res.send('Task deleted successfully');
        else
            console.log(error);
    });
});

module.exports = router;