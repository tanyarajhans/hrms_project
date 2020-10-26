var connection = require('../config');
const express = require('express');

const router = express.Router();

router.post('/addtask', function (req, res) {
    var task = {
       
        "taskname": req.body.taskname,
        "date": req.body.date,
        "weekno":req.body.weekno,
        "module":req.body.module,
        "status":req.body.status,
       "pid":req.body.pid
    }

    connection.query('insert into task set ?', task, function (error, results, fields) {
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
                message: 'Task added sucessfully'
            })
        }
    });
});

router.get('/dailytask', function (req, res) {
    connection.query('select date,projectname, module,taskname,status from task t, project  p where p.pid= t.tid ', (error, rows, fields) => {
        if (!error)
            res.send(rows);
        else
            console.log(error);
        1
    });
});

router.get('/taskassign/:tid', (req, res) => {
    connection.query('select * from task where tid= ?', [req.params.tid], (error, rows, fields) => {
        if (!error)
            res.send(rows);
        else
            console.log(error);
    });
});

router.put('/updatedata/:tid', (req, res) => {
    let sql = `update task set date='${req.body.date}', taskname= '${req.body.taskname}',module='${req.body.module}',
    weekno='${req.body.weekno}',status='${req.body.status}' where tid= '${req.params.tid}'`;
    connection.query(sql, (error, rows, fields) => {
        if (!error)
            res.send('Task updated successfully');
        else
            console.log(error);
    });
});

router.delete('/deletedata/:tid', (req, res) => {
    connection.query('delete from task where tid= ?', [req.params.tid], (error, rows, fields) => {
        if (!error)
            res.send('Task deleted successfully');
        else
            console.log(error);
    });
});

module.exports = router;