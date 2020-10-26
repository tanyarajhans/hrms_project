var connection = require('../config');
const express = require('express');

const router = express.Router();

// router.post('/takeattandace', function (req, res) {

//     var aid = req.body.aid;
//     var date = req.body.date;
//     var time = req.body.time;
//     var user_id = req.body.user_id;
    
//     connection.query(`insert into attendance(aid,date,time,user_id) values('${aid}','${date}','${time}','${user_id}')`, function (error, results, fields) {
//         if (error) {
//             res.json({
//                 status: false,
//                 message: 'there are some error '

//             })
//             console.log(error);

//         } else {
//             res.json({

//                 status: true,
//                 data: results,
//                 message: 'record  added sucessfully'
//             })
//         }
//     });
// });

router.get('/empreport', function (req, res) {
    connection.query('select fname, module,status  from task t, users  u where u.uid= t.tid', (error, rows, fields) => {
        if (!error)
            res.send(rows);
        else
            console.log(error);
    });
});


router.get('/emprecord', function (req, res) {
    connection.query('select weekno,module,taskname,status,projectname from task t, project  p where p.pid= t.tid', (error, rows, fields) => {
        if (!error)
            res.send(rows);
        else
            console.log(error);
    });
});

router.get('/getdata/:tid', (req, res) => {
    connection.query('select task.taskname,task.weekno,task.module,task.status,project.projectname, task.pid from task join project on task.pid=project.pid where tid=?', [req.params.tid], (error, rows, fields) => {
        if (!error)
            res.send(rows);
         else
            console.log(error);
    });
});

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

// router.delete('/deletedata/:aid', (req, res) => {
//     connection.query('delete from  attendance where pid= ?', [req.params.aid], (error, rows, fields) => {
//         if (!error)
//             res.send('Record deleted successfully');
//         else
//             console.log(error);
//     });
// });

module.exports = router;