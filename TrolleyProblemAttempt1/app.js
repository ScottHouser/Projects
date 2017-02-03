/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var shuffle = require('shuffle-array');
var pixi= require('pixi');
var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/Client/index.html');
});

app.use('/client', express.static(__dirname + '/Client'));

serv.listen(2000);

var SOCKET_LIST = {};
var PLAYER_LIST = {};
var BUNNY_LIST = [];
var counter=0;
var allPlayersReady=false;
var activePlayer=0;
var CARD_LIST=[];
var CARD_LIST_COUNTER=0;
CARD_LIST.push('/Client/img/1.jpg');
CARD_LIST.push('/Client/img/2.jpg');
CARD_LIST.push('/Client/img/3.jpg');
CARD_LIST.push('/Client/img/4.jpg');
CARD_LIST.push('/Client/img/5.jpg');
CARD_LIST.push('/Client/img/6.jpg');
CARD_LIST.push('/Client/img/7.jpg');
CARD_LIST.push('/Client/img/8.jpg');
CARD_LIST.push('/Client/img/9.jpg');
CARD_LIST.push('/Client/img/10.jpg');
CARD_LIST.push('/Client/img/11.jpg');
CARD_LIST.push('/Client/img/12.jpg');
CARD_LIST.push('/Client/img/13.jpg');
CARD_LIST.push('/Client/img/14.jpg');
CARD_LIST.push('/Client/img/15.jpg');
CARD_LIST.push('/Client/img/16.jpg');
CARD_LIST.push('/Client/img/17.jpg');
CARD_LIST.push('/Client/img/18.jpg');
CARD_LIST.push('/Client/img/19.jpg');
CARD_LIST.push('/Client/img/20.jpg');
CARD_LIST.push('/Client/img/21.jpg');
CARD_LIST.push('/Client/img/22.jpg');
CARD_LIST.push('/Client/img/23.jpg');
CARD_LIST.push('/Client/img/24.jpg');
CARD_LIST.push('/Client/img/25.jpg');
CARD_LIST.push('/Client/img/26.jpg');
CARD_LIST.push('/Client/img/27.jpg');
CARD_LIST.push('/Client/img/28.jpg');
CARD_LIST.push('/Client/img/29.jpg');
CARD_LIST.push('/Client/img/30.jpg');
CARD_LIST.push('/Client/img/31.jpg');
CARD_LIST.push('/Client/img/32.jpg');
CARD_LIST.push('/Client/img/33.jpg');
CARD_LIST.push('/Client/img/34.jpg');
CARD_LIST.push('/Client/img/35.jpg');
CARD_LIST.push('/Client/img/36.jpg');
CARD_LIST.push('/Client/img/37.jpg');
CARD_LIST.push('/Client/img/38.jpg');
CARD_LIST.push('/Client/img/39.jpg');
CARD_LIST.push('/Client/img/40.jpg');
CARD_LIST.push('/Client/img/41.jpg');
CARD_LIST.push('/Client/img/42.jpg');
CARD_LIST.push('/Client/img/43.jpg');
CARD_LIST.push('/Client/img/44.jpg');
shuffle(CARD_LIST);

//figure out how to shuffle array




//multiple self objects with multiple self.update position functions?
var Player = function (id, counter) {
    var self = {
        //x: 20,
        //y: 20,
        isCurrentTurn:false,
        isPulling:false,
        isReady:false,
        playerNumber:counter,
        id: id,
        number: "" + Math.floor(10 * Math.random()),
        pressingRight: false,
        pressingLeft: false,
        pressingUp: false,
        pressingDown: false,
        //maxSpd: 10,
        dragging:false,
        dragx:0,
        dragy:0,
        card1:{x:100,y:600,dragx:100,dragy:600,id:id,cardNum:1,image:''},
        card2:{x:300,y:600,dragx:300,dragy:600,id:id,cardNum:2,image:''},
        card3:{x:500,y:600,dragx:500,dragy:600,id:id,cardNum:3,image:''},
        card4:{x:700,y:600,dragx:700,dragy:600,id:id,cardNum:4,image:''},
        card5:{x:900,y:600,dragx:900,dragy:600,id:id,cardNum:5,image:''}
        
    };
    self.updatePosition = function () {
//        if (self.pressingRight)
//            self.x += self.maxSpd;
//        if (self.pressingLeft)
//            self.x -= self.maxSpd;
//        if (self.pressingUp)
//            self.y -= self.maxSpd;
//        if (self.pressingDown)
//            self.y += self.maxSpd;
//        if (self.dragging){
//            self.x=self.dragx;
//            self.y=self.dragy; 
//        };
        self.card1.x=self.card1.dragx;    
        self.card1.y=self.card1.dragy;    
        self.card2.x=self.card2.dragx;    
        self.card2.y=self.card2.dragy;    
        self.card3.x=self.card3.dragx;    
        self.card3.y=self.card3.dragy;    
        self.card4.x=self.card4.dragx;    
        self.card4.y=self.card4.dragy;    
        self.card5.x=self.card5.dragx;    
        self.card5.y=self.card5.dragy;    
            

    };
    return self;
};

var io = require('socket.io')(serv, {});
io.sockets.on('connection', function (socket) {
    counter++;
    socket.id = Math.random();
    socket.emit('YOUR_PLAYER_ID',socket.id);
    SOCKET_LIST[socket.id] = socket;

    var player = Player(socket.id);
    player.card1.image=CARD_LIST[CARD_LIST_COUNTER];
    CARD_LIST_COUNTER++;
    player.card2.image=CARD_LIST[CARD_LIST_COUNTER];
    CARD_LIST_COUNTER++;
    player.card3.image=CARD_LIST[CARD_LIST_COUNTER];
    CARD_LIST_COUNTER++;
    player.card4.image=CARD_LIST[CARD_LIST_COUNTER];
    CARD_LIST_COUNTER++;
    player.card5.image=CARD_LIST[CARD_LIST_COUNTER];
    CARD_LIST_COUNTER++;
//    player.card2.image='/Client/img/catTest.jpg';
//    player.card3.image='/Client/img/catTest.jpg';
//    player.card4.image='/Client/img/catTest.jpg';
//    player.card5.image='/Client/img/catTest.jpg';
    //this will be add to array [card counter] so that each card is unique

    PLAYER_LIST[socket.id] = player;

    socket.on('disconnect', function () {
        delete SOCKET_LIST[socket.id];
        delete PLAYER_LIST[socket.id];
        counter--;
    });
    socket.on('ready', function(){
        player.isReady=true;
        activePlayer=1;
        setInterval();
    });
    socket.on('newBunny', function (data) {
        BUNNY_LIST.push(data.id);
    });
    socket.on('kp', function (data) {
//        if (data.inputId === 'left')
//            player.pressingLeft = data.state;
//        else if (data.inputId === 'right')
//            player.pressingRight = data.state;
//        else if (data.inputId === 'up')
//            player.pressingUp = data.state;
//        else if (data.inputId === 'down')
           // player.pressingDown = data.state;
//         if (data.inputId=== 'dragged'){
//            player.dragging=data.state;
//        player.dragx=data.positionx;
//        player.dragy=data.positiony;}
        if(data.cardNum==='1'){
            player.card1.dragx=data.positionx;
            player.card1.dragy=data.positiony;
        }
        if(data.cardNum==='2'){
            player.card2.dragx=data.positionx;
            player.card2.dragy=data.positiony;
        }
        if(data.cardNum==='3'){
            player.card3.dragx=data.positionx;
            player.card3.dragy=data.positiony;
        }
        if(data.cardNum==='4'){
            player.card4.dragx=data.positionx;
            player.card4.dragy=data.positiony;
        }
        if(data.cardNum==='5'){
            player.card5.dragx=data.positionx;
            player.card5.dragy=data.positiony;
        }
        
            //player.x=data.positionx;
            //player.y=data.positiony;
    });

//    console.log('socket connection');

//    socket.on('test string', function (data) {
//        console.log('test successful' + data.testObject);
//    });
//    socket.on('testfunction', function (data) {
//        console.log('test function successful' + data.reason);
//    });
setInterval();

    socket.on('drop', function(){
        setInterval();
    });
});

 var setInterval=function () {
    //if(allPlayersReady===false){
        readyCheck();
   // } 
    var pack = [];
    for (var i in PLAYER_LIST) {
        var player = PLAYER_LIST[i];
        
        player.updatePosition();
       //pack=[];
        pack.push({
           // x: player.x,
            //y: player.y,
            activePlayer:activePlayer,
            allReady:allPlayersReady,
            ready:player.isReady,
            counter:counter,
            number: player.number,
            id: player.id,
            card1:player.card1,
            card2:player.card2,
            card3:player.card3,
            card4:player.card4,
            card5:player.card5
            
            
            
        });
    }
    console.log(pack);
    for (var i in SOCKET_LIST) {
        var socket = SOCKET_LIST[i];
        socket.emit('newP', pack);
        
   }



};

function readyCheck(){
   var readyCounter=0;
   for (var i in PLAYER_LIST){
       var player = PLAYER_LIST[i];
       if (player.isReady===true){
           readyCounter++;
       };
       if (readyCounter===counter){
           allPlayersReady=true;
       }else{
           allPlayersReady=false;
       }
   }
}
//submit button that refreshes all bunnies
//track all objects and positions. on submit, do new stage and create sprites for all
//objects and positions
function game(){
    startingPlayer= Math.floor(counter * Math.random());
   
    
};

