/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var shuffle = require('shuffle-array');
var express = require('express');
var app = express();
var serv = require('http').Server(app);
//var controller=require(__dirname +'/Client/js/controller.js');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/Client/index.html');
});

app.use('/client', express.static(__dirname + '/Client'));

serv.listen(2000);

