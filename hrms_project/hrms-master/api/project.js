var connection = require('../config');
const express = require('express');

const router = express.Router();

router.post('/addproject', function (req, res) {
    var project = {
        "pid": req.body.pid,
        "projectname": req.body.projectname,
        "estimatetime": req.body.estimatetime,
       
    }

    connection.query('insert into project set ?', project, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
            console.log(error);
        } else {
            res.json({

                status: true,
                data: results,
                message: 'Project added sucessfully'
            })
        }
    });
});

router.get('/projectdetails', function (req, res) {
    connection.query('select * from project ', (error, rows, fields) => {
        if (!error)
            res.send(rows);
        else
            console.log(error);
        1
    });
});

// router.get('/projectassign/:pid', (req, res) => {
//     connection.query('select * from project where pid= ?', [req.params.pid], (error, rows, fields) => {
//         if (!error)
//             res.send(rows);
//         else
//             console.log(error);
//     });
// });

router.put('/updateproject/:pid', (req, res) => {
    let sql = `update project set projectname= '${req.body.projectname}',estimatetime='${req.body.estimatetime}' where pid= '${req.params.pid}'`;
    connection.query(sql, (error, rows, fields) => {
        if (!error)
            res.send('Project updated successfully');
        else
            console.log(error);
    });
});

router.delete('/deletedata/:pid', (req, res) => {
    connection.query('delete from project where pid= ?', [req.params.pid], (error, rows, fields) => {
        if (!error)
            res.send('Project deleted successfully');
        else
            console.log(error);
    });
});

module.exports = router;