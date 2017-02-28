/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var shuffle = require('shuffle-array');
var pixi = require('pixi');
var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/Client/index.html');
});

app.use('/client', express.static(__dirname + '/Client'));

serv.listen(2000);

var GameOver=0;
var ObjectiveFlipper=true;
var SOCKET_LIST = {};
var PLAYER_LIST = {};
var BUNNY_LIST = [];
var PLAYERS_NUMBER_LIST = [];
//var CurrentPlayer=0;
var turnCounter = 0;
var startGame = false;
var ID_ARRAY = [];
var counter = 0;
var allPlayersReady = false;
var activePlayer = 0;
var pullingPlayer = 0;
var CARD_LIST = [];
var CARD_LIST_COUNTER = 0;
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
CARD_LIST.push('/Client/img/45.jpg');
CARD_LIST.push('/Client/img/50.png');
CARD_LIST.push('/Client/img/51.png');
CARD_LIST.push('/Client/img/48.png');
CARD_LIST.push('/Client/img/52.png');
CARD_LIST.push('/Client/img/53.png');
CARD_LIST.push('/Client/img/54.png');
CARD_LIST.push('/Client/img/55.png');
CARD_LIST.push('/Client/img/56.png');
CARD_LIST.push('/Client/img/57.png');
CARD_LIST.push('/Client/img/58.png');
CARD_LIST.push('/Client/img/59.png');
CARD_LIST.push('/Client/img/60.png');
CARD_LIST.push('/Client/img/61.png');
CARD_LIST.push('/Client/img/62.png');
CARD_LIST.push('/Client/img/63.png');
CARD_LIST.push('/Client/img/64.png');
CARD_LIST.push('/Client/img/65.png');
CARD_LIST.push('/Client/img/66.png');
CARD_LIST.push('/Client/img/67.png');

shuffle(CARD_LIST);




var Player = function (id, counter) {
    var self = {
       

        isCurrentTurn: false,
        objective:"",
        isPulling: false,
        isReady: false,
        playerNumber: counter,
        id: id,
        number: "" + Math.floor(10 * Math.random()),
        pressingRight: false,
        pressingLeft: false,
        pressingUp: false,
        pressingDown: false,
        //maxSpd: 10,
        dragging: false,
        dragx: 0,
        dragy: 0,
        card1: {x: 100, y: 600, dragx: 100, dragy: 600, id: id, cardNum: 1, image: ''},
        card2: {x: 300, y: 600, dragx: 300, dragy: 600, id: id, cardNum: 2, image: ''},
        card3: {x: 500, y: 600, dragx: 500, dragy: 600, id: id, cardNum: 3, image: ''},
        card4: {x: 700, y: 600, dragx: 700, dragy: 600, id: id, cardNum: 4, image: ''},
        card5: {x: 900, y: 600, dragx: 900, dragy: 600, id: id, cardNum: 5, image: ''}

    };
    self.updatePosition = function () {

        self.card1.x = self.card1.dragx;
        self.card1.y = self.card1.dragy;
        self.card2.x = self.card2.dragx;
        self.card2.y = self.card2.dragy;
        self.card3.x = self.card3.dragx;
        self.card3.y = self.card3.dragy;
        self.card4.x = self.card4.dragx;
        self.card4.y = self.card4.dragy;
        self.card5.x = self.card5.dragx;
        self.card5.y = self.card5.dragy;


    };
    return self;
};



var io = require('socket.io')(serv, {});
io.sockets.on('connection', function (socket) {
    counter++;
    socket.id = Math.random();
    socket.emit('YOUR_PLAYER_ID', socket.id);
    SOCKET_LIST[socket.id] = socket;
    ID_ARRAY.push(socket.id);
    //PLAYERS_NUMBER_LIST.push(counter);

    var player = Player(socket.id);
    player.card1.image = CARD_LIST[CARD_LIST_COUNTER];
    CARD_LIST_COUNTER++;
    player.card2.image = CARD_LIST[CARD_LIST_COUNTER];
    CARD_LIST_COUNTER++;
    player.card3.image = CARD_LIST[CARD_LIST_COUNTER];
    CARD_LIST_COUNTER++;
    player.card4.image = CARD_LIST[CARD_LIST_COUNTER];
    CARD_LIST_COUNTER++;
    player.card5.image = CARD_LIST[CARD_LIST_COUNTER];
    CARD_LIST_COUNTER++;
    if(ObjectiveFlipper===true){
        player.objective="pull";
        ObjectiveFlipper=false;
    }else{
        player.objective="no pull";
        ObjectiveFlipper=true;
    }

    //this will be add to array [card counter] so that each card is unique

    PLAYER_LIST[socket.id] = player;

    socket.on('disconnect', function () {
        delete SOCKET_LIST[socket.id];
        delete PLAYER_LIST[socket.id];
        //this doesn't work, make this actually remove the id from the array
        for (var i = 0; i < ID_ARRAY.length; i++) {
            if (ID_ARRAY[i] === socket.id) {
                ID_ARRAY.pop(ID_ARRAY[i]);
            }
        };

        setInterval();
        console.log(ID_ARRAY);
       
    });
    socket.on('ready', function () {
        player.isReady = true;
        //activePlayer=1;
        setInterval();
    });
    socket.on('pull', function () {
        GameOver=1;
         setInterval();
    });
    socket.on('noPull', function () {
        GameOver=2;
         setInterval();
    });
    socket.on('newBunny', function (data) {
        BUNNY_LIST.push(data.id);
    });
    socket.on('kp', function (data) {

        if (data.cardNum === '1') {
            player.card1.dragx = data.positionx;
            player.card1.dragy = data.positiony;
        }
        if (data.cardNum === '2') {
            player.card2.dragx = data.positionx;
            player.card2.dragy = data.positiony;
        }
        if (data.cardNum === '3') {
            player.card3.dragx = data.positionx;
            player.card3.dragy = data.positiony;
        }
        if (data.cardNum === '4') {
            player.card4.dragx = data.positionx;
            player.card4.dragy = data.positiony;
        }
        if (data.cardNum === '5') {
            player.card5.dragx = data.positionx;
            player.card5.dragy = data.positiony;
        }

        //player.x=data.positionx;
        //player.y=data.positiony;
    });


    setInterval();

    socket.on('drop', function () {
        turnCounter++;
        if (ID_ARRAY[turnCounter] === undefined) {
            turnCounter = 0;
        }
        activePlayer = ID_ARRAY[turnCounter];

        // turnCounter++;
        if (ID_ARRAY[turnCounter] === undefined) {
            turnCounter = 0;
        }
        setInterval();
    });
});

//this sends all the info about players and card positions to the 
//client whenever a player connects or drops a card
var setInterval = function () {
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
            objective:player.objective,
            pullingPlayer: pullingPlayer,
            gameOver: GameOver,
            activePlayer: activePlayer,
            allReady: allPlayersReady,
            ready: player.isReady,
            counter: counter,
            number: player.number,
            id: player.id,
            card1: player.card1,
            card2: player.card2,
            card3: player.card3,
            card4: player.card4,
            card5: player.card5



        });
    }
    //console.log(pack);
    console.log(activePlayer);
    //console.log("here is the number list"+ID_ARRAY);
    for (var i in SOCKET_LIST) {
        var socket = SOCKET_LIST[i];
        socket.emit('newP', pack);

    }



};

//checks if players have clicked the ready button

function readyCheck() {
    var readyCounter = 0;
    for (var i in PLAYER_LIST) {
        var player = PLAYER_LIST[i];
        if (player.isReady === false) {
            readyCounter++;
        }
        ;
        if (readyCounter === 0) {
            allPlayersReady = true;
            if (activePlayer === 0) {
                beginGame();

            }


        } else {
            allPlayersReady = false;
        }
    }
}
//submit button that refreshes all bunnies
//track all objects and positions. on submit, do new stage and create sprites for all
//objects and positions
function beginGame() {
    shuffle(ID_ARRAY);
    //startGame=true;
    activePlayer = ID_ARRAY[0];
    pullingPlayer = ID_ARRAY[0];
    console.log("thisistheactiveplay0000000000000000000000000000000000000000000000000000000000000000er" + activePlayer);
    console.log(ID_ARRAY);

}
;
