/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express=require('express');
var router=express.Router();
var mongojs=require('mongojs');
var db=mongojs('mongodb://ScottAnthonyHouser%40gmail.com:111aaaAAA@ds161159.mlab.com:61159/scotts_mlab_db',['tasks']);

router.get('/tasks',function(req,res,next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }else{
            res.json(tasks);
        }
    });
});

module.exports=router;
