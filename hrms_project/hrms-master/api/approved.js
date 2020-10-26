var connection = require('../config');
const express = require('express');

const router = express.Router();




router.get('/leaveapprove', function (req, res) {
    let approved = {
        approve: "Approved by Chitransh Agnihotri",
    };
 
    connection.query('insert into approved set ?', approved, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
            console.log(error);

        } else {
            res.json({
                message: 'Leave Request approved'
            })
        }
    });
});

router.get('/leavedecline', function (req, res) {
    let approved = {
        decline: "Decline by Chitransh Agnihotri",
    };
 
    connection.query('insert into approved set ?', approved, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
                
            })
            console.log(error);

        } else {
            res.json({
                message: 'Leave Request declined'
            })
        }
    });
});

module.exports = router;