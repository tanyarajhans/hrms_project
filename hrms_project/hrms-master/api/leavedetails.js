var connection = require('../config');
const express = require('express');

const router = express.Router();

router.post('/leave', function (req, res) {
    var leavedet= {
        "ldid":req.body.ldid,
        "available": req.body.available,
        "taken":req.body.taken,
        "approved":req.body.approved,
       "lid":req.body.lid
    }

    connection.query('insert into leavedetails set ?', leavedet, function (error, results, fields) {
        if (error) {
            
            res.json({
                status: false,
                message: 'there are some error with query'
            })
           
        } else {
            res.json({

                status: true,
                data: results,
                message: ' Leave details added sucessfully'
            })
        }
    });
});


router.get('/leavedetails', function (req, res) {
    connection.query('select * from leavedetails ', (error, rows, fields) => {
        if (!error)
            res.send(rows);
        else
            console.log(error);
        1
    });
});

router.put('/updateleave/:ldid', (req, res) => {
    let sql = `update  leavedetails set available= '${req.body.available}',taken='${req.body.date}',approved='${req.body.approved}' where ldid= '${req.params.ldid}'`;
    connection.query(sql, (error, rows, fields) => {
        if (!error)
            res.send('Leave details updated successfully');
        else
            console.log(error);
    });
});

router.delete('/deleteleave/:ldid', (req, res) => {
    connection.query('delete from leavedetails where ldid= ?', [req.params.ldid], (error, rows, fields) => {
        if (!error)
            res.send('Leave details deleted successfully');
        else
            console.log(error);
    });
});

module.exports = router;