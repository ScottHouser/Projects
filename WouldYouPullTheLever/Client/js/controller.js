//missing pandas tunnel and empty track

$(document).ready(function () {
    console.log("hi");

    $('#new_track').click(function (event) {
        event.preventDefault();
        //I don't know why but it works better when you do it twenty times
        for (var i = 0; i < 20; i++) {
            //console.log('loop'+i);
            randomizeCards2();
            myCanvas1();
            myCanvas2();
            myCanvas3();
            myCanvas4();
            myCanvas5();
            myCanvas6();
            myCanvas7();
            myCanvas8();
            myCanvas9();
            myCanvas10();
            myCanvas11();
            myCanvas12();
            myCanvas13();
            myCanvas14();
            myCanvas15();

            // rotateAndCache(randomCard5,20);
        }




    });


});
var test='0';
var CARD_LIST = [];
var CARD_LIST2 = [];

CARD_LIST.push({image: '/Client/img/1.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/Sman.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/harambe.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/jackass.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/mcDee.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/panda.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/panda2.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/police2.png', type: 0});//good
CARD_LIST.push({image: '/Client/img/track.png', type: 0});//good
CARD_LIST.push({image: '/Client/img/tunnel.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/2.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/3.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/4.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/5.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/6.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/7.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/8.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/9.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/10.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/11.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/12.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/13.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/14.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/15.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/16.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/17.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/18.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/19.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/20.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/21.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/22.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/23.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/24.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/25.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/26.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/27.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/28.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/29.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/30.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/31.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/32.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/33.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/34.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/36.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/37.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/38.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/39.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/40.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/41.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/42.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/43.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/44.jpg', type: 1});//good



CARD_LIST2.push('/Client/img/50.png');
CARD_LIST2.push('/Client/img/51.png');
CARD_LIST2.push('/Client/img/52.png');
CARD_LIST2.push('/Client/img/54.png');
CARD_LIST2.push('/Client/img/55.png');
CARD_LIST2.push('/Client/img/56.png');
CARD_LIST2.push('/Client/img/57.png');
CARD_LIST2.push('/Client/img/58.png');
CARD_LIST2.push('/Client/img/59.png');
CARD_LIST2.push('/Client/img/60.png');
CARD_LIST2.push('/Client/img/61.png');
CARD_LIST2.push('/Client/img/62.png');
CARD_LIST2.push('/Client/img/63.png');
//CARD_LIST2.push('/Client/img/64.png');
CARD_LIST2.push('/Client/img/65.png');
CARD_LIST2.push('/Client/img/66.png');
CARD_LIST2.push('/Client/img/67.png');
//var shuffle = require('shuffle-array');
//shuffle(CARD_LIST);

var randomCard1 = {};
var randomCard1Type = {};
var randomCard2 = {};
var randomCard4 = {};
var randomCard5 = 0;
var randomCard6 = 0;
var randomCard7 = 0;
var randomCard8 = 0;
var randomCard9 = 0;
var randomCard10 = 0;


function randomizeCards2() {

    do {
        randomCard1 = CARD_LIST[Math.floor(Math.random() * 51)];
        randomCard2 = CARD_LIST[Math.floor(Math.random() * 51)];
        randomCard3 = CARD_LIST[Math.floor(Math.random() * 51)];
        randomCard4 = CARD_LIST[Math.floor(Math.random() * 51)];
      
    } while (randomCard1 === randomCard2 || randomCard1 === randomCard3 || randomCard1 === randomCard4 || randomCard2 === randomCard3 || randomCard2 === randomCard4 || randomCard3 === randomCard4);
    console.log(randomCard1.image + "1");
    console.log(randomCard2.image + '2');
    console.log(randomCard3.image + "3");
    console.log(randomCard4.image + '4');

    do {

        randomCard9 = CARD_LIST2[Math.floor(Math.random() * 15)];
        randomCard10 = CARD_LIST2[Math.floor(Math.random() * 15)];
        randomCard8 = CARD_LIST2[Math.floor(Math.random() * 15)];
        randomCard7 = CARD_LIST2[Math.floor(Math.random() * 15)];
        randomCard6 = CARD_LIST2[Math.floor(Math.random() * 15)];
        randomCard5 = CARD_LIST2[Math.floor(Math.random() * 15)];
    } while (randomCard5 === randomCard6 || randomCard5 === randomCard7 || randomCard5 === randomCard8 || randomCard5 === randomCard9 || randomCard5 === randomCard10 || randomCard6 === randomCard7 || randomCard6 === randomCard8 || randomCard6 === randomCard9 || randomCard6 === randomCard10 || randomCard7 === randomCard8 || randomCard7 === randomCard9 || randomCard7 === randomCard10 || randomCard8 === randomCard9 || randomCard8 === randomCard10 || randomCard9 === randomCard10);

}
;



function myCanvas1() {

    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");

    var img1 = new Image();
    img1.src = '/Client/img/track.jpg';


    ctx.drawImage(img1, 0, 100, 700, 500);


}
;
function myCanvas2() {

    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");


    var img2 = new Image();
    img2.src = randomCard1.image;



    ctx.drawImage(img2, 358, 323, 242, 161);


}
;
function myCanvas3() {

    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");


    var img3 = new Image();
    img3.src = randomCard2.image;



    ctx.drawImage(img3, 358, 162, 242, 161);



}
;
function myCanvas4() {

    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");


    var img4 = new Image();
    img4.src = randomCard3.image;



    ctx.drawImage(img4, 678, 323, 242, 161);


}
;
function myCanvas5() {

    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");


    var img5 = new Image();
    img5.src = randomCard4.image;


    ctx.drawImage(img5, 678, 163, 242, 161);

}
;
function myCanvas6() {
    if (Math.floor(Math.random() * 52 > 30)) {
        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img6 = new Image();
        img6.src = randomCard5;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(588, 40, 150, 100);
        ctx.drawImage(img6, 588, 40, 120, 180);
    } else {
        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img6 = new Image();
        img6.src = randomCard5;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(588, 40, 150, 100);
        //ctx.drawImage(img6, 588, 40, 120, 180); 
    }
}
;
function myCanvas7() {

    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");



    ctx.fillStyle = "#000000";
    ctx.fillRect(359, 322, 560, 1);


}
;

function myCanvas8() {

//    var c = document.getElementById('ctx');
//    var ctx = c.getContext("2d");
//
//
//    var img6 = new Image();
//    img6.src = randomCard6;
    if (randomCard4.type.toString() === "1") {


        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img6 = new Image();
        img6.src = randomCard6;
        ctx.fillStyle = "#FFFFFF";

        ctx.save();

        ctx.rotate(20 * Math.PI / 180);
        ctx.translate(-10, -330);
        ctx.fillRect(927, 40, 30, 180);
        ctx.fillRect(888, 40, 130, 93);
        ctx.drawImage(img6, 888, 40, 120, 180);




        ctx.restore();
    } else {
        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img6 = new Image();
        img6.src = randomCard6;
        ctx.fillStyle = "#FFFFFF";

        ctx.save();

        ctx.rotate(20 * Math.PI / 180);
        ctx.translate(-10, -330);
        ctx.fillRect(927, 40, 30, 180);
        ctx.fillRect(888, 40, 130, 93);
        // ctx.drawImage(img6, 888, 40, 120, 180);




        ctx.restore();
    }
    ;

}
;
function myCanvas9() {
    if (randomCard2.type.toString() === '1') {
        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img6 = new Image();
        img6.src = randomCard7;



        ctx.fillStyle = "#FFFFFF";

        ctx.save();

        ctx.rotate(-30 * Math.PI / 180);
        ctx.translate(-25, 100);

        ctx.fillRect(240, 40, 30, 180);
        ctx.fillRect(200, 40, 130, 93);
        ctx.drawImage(img6, 200, 40, 120, 180);

        ctx.restore();
    } else {
        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img6 = new Image();
        img6.src = randomCard7;



        ctx.fillStyle = "#FFFFFF";

        ctx.save();

        ctx.rotate(-30 * Math.PI / 180);
        ctx.translate(-25, 100);

        ctx.fillRect(240, 40, 30, 180);
        ctx.fillRect(200, 40, 130, 93);
        ctx.restore();
        //ctx.drawImage(img6, 200, 40, 120, 180);
    }


}
;
function myCanvas10() {
if(randomCard1.type.toString()==='1'){
    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");


    var img6 = new Image();
    img6.src = randomCard8;



    ctx.fillStyle = "#FFFFFF";

    ctx.save();

    ctx.rotate(183 * Math.PI / 180);
    ctx.translate(-470, -600);

    ctx.fillRect(40, 0, 30, 180);
    ctx.fillRect(0, 0, 130, 93);
    ctx.drawImage(img6, 0, 0, 130, 190);

    ctx.restore();
    }else{
         var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");


    var img6 = new Image();
    img6.src = randomCard8;



    ctx.fillStyle = "#FFFFFF";

    ctx.save();

    ctx.rotate(183 * Math.PI / 180);
    ctx.translate(-470, -600);

    ctx.fillRect(40, 0, 30, 180);
    ctx.fillRect(0, 0, 130, 93);
    //ctx.drawImage(img6, 0, 0, 130, 190);

    ctx.restore(); 
    }

}
;
function myCanvas11() {
if(randomCard1.type.toString()==='1'){
    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");


    var img6 = new Image();
    img6.src = randomCard8;



    ctx.fillStyle = "FFFFFF";

    ctx.save();

    ctx.rotate(1 * Math.PI / 180);
    ctx.translate(0, 0);

    ctx.fillRect(350, 520, 50, 180);
    ctx.fillRect(310, 510, 140, 123);
    ctx.drawImage(img6, 310, 520, 130, 190);
    ctx.fillRect(350, 625, 50, 180);

    ctx.restore();
    }else{
        var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");


    var img6 = new Image();
    img6.src = randomCard8;



    ctx.fillStyle = "FFFFFF";

    ctx.save();

    ctx.rotate(1 * Math.PI / 180);
    ctx.translate(0, 0);

    ctx.fillRect(350, 520, 50, 180);
    ctx.fillRect(310, 510, 140, 123);
   // ctx.drawImage(img6, 310, 520, 130, 190);
    ctx.fillRect(350, 625, 50, 180);

    ctx.restore(); 
    }

}
;
function myCanvas12() {
    test='0';
 if (Math.floor(Math.random() * 52 > 30)){
    test='1';
    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");


    var img6 = new Image();
    img6.src = randomCard9;



    ctx.fillStyle = "#FFFFFF";

    ctx.save();

    ctx.rotate(180 * Math.PI / 180);
    ctx.translate(-695, -620);

    ctx.fillRect(40, 0, 30, 180);
    ctx.fillRect(0, 0, 130, 93);
    ctx.drawImage(img6, 0, 0, 130, 190);

    ctx.restore();
 }else{
     test='0';
      var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");


    var img6 = new Image();
    img6.src = randomCard9;



    ctx.fillStyle = "#FFFFFF";

    ctx.save();

    ctx.rotate(180 * Math.PI / 180);
    ctx.translate(-695, -620);

    ctx.fillRect(40, 0, 30, 180);
    ctx.fillRect(0, 0, 130, 93);
   // ctx.drawImage(img6, 0, 0, 130, 190);

    ctx.restore();
 }

}
;
function myCanvas13() {
    if(test==='1'){
    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");


    var img6 = new Image();
    img6.src = randomCard9;



    ctx.fillStyle = "FFFFFF";

    ctx.save();

    ctx.rotate(1 * Math.PI / 180);
    ctx.translate(0, 0);

    ctx.fillRect(600, 520, 50, 180);
    ctx.fillRect(560, 510, 140, 123);
    ctx.drawImage(img6, 560, 520, 130, 190);
    ctx.fillRect(600, 625, 50, 180);

    ctx.restore();
    }else{
         var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");


    var img6 = new Image();
    img6.src = randomCard9;



    ctx.fillStyle = "FFFFFF";

    ctx.save();

    ctx.rotate(1 * Math.PI / 180);
    ctx.translate(0, 0);

    ctx.fillRect(600, 520, 50, 180);
    ctx.fillRect(560, 510, 140, 123);
    //ctx.drawImage(img6, 560, 520, 130, 190);
    ctx.fillRect(600, 625, 50, 180);

    ctx.restore();
    }

}
;
function myCanvas14() {
if(randomCard3.type.toString()==='1'){
    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");


    var img6 = new Image();
    img6.src = randomCard10;



    ctx.fillStyle = "#FFFFFF";

    ctx.save();

    ctx.rotate(179 * Math.PI / 180);
    ctx.translate(-895, -640);

    ctx.fillRect(40, 0, 30, 180);
    ctx.fillRect(0, 0, 130, 93);
    ctx.drawImage(img6, 0, 0, 130, 190);

    ctx.restore();
    }else{
        var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");


    var img6 = new Image();
    img6.src = randomCard10;



    ctx.fillStyle = "#FFFFFF";

    ctx.save();

    ctx.rotate(179 * Math.PI / 180);
    ctx.translate(-895, -640);

    ctx.fillRect(40, 0, 30, 180);
    ctx.fillRect(0, 0, 130, 93);
   // ctx.drawImage(img6, 0, 0, 130, 190);

    ctx.restore(); 
    }

}
;
function myCanvas15() {
if(randomCard3.type.toString()==='1'){
    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");


    var img6 = new Image();
    img6.src = randomCard10;



    ctx.fillStyle = "FFFFFF";

    ctx.save();

    ctx.rotate(1 * Math.PI / 180);
    ctx.translate(0, 0);

    ctx.fillRect(820, 520, 50, 180);
    ctx.fillRect(780, 510, 140, 123);
    ctx.drawImage(img6, 780, 520, 130, 190);
    ctx.fillRect(820, 625, 50, 180);

    ctx.restore();
    }else{
         var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");


    var img6 = new Image();
    img6.src = randomCard10;



    ctx.fillStyle = "FFFFFF";

    ctx.save();

    ctx.rotate(1 * Math.PI / 180);
    ctx.translate(0, 0);

    ctx.fillRect(820, 520, 50, 180);
    ctx.fillRect(780, 510, 140, 123);
   // ctx.drawImage(img6, 780, 520, 130, 190);
    ctx.fillRect(820, 625, 50, 180);

    ctx.restore();
    }

}
;









var canvas = document.getElementById('ctx'),
        context = canvas.getContext('2d');

function make_base()
{
    base_image = new Image();
    base_image.src = 'Client/img/track.jpg';
    base_image2 = new Image();


    base_image.onload = function () {
        context.drawImage(base_image, 0, 100, 700, 500);

    };
}
;
make_base();

//randomizeCards2();  
// randomizeCards2();
//            myCanvas1();
//        myCanvas2();
//        myCanvas3();
//        myCanvas4();
//        myCanvas5();
//        myCanvas6();
//make_base();     
//console.log(randomCard1);

//app.controller('MainController', ['$scope', function($scope) { 
//  
//  
//  $scope.bottomCaption = ''; 
//  $scope.bottomCaption = ''; 
//  
//  $scope.cardList=CARD_LIST;
//  $scope.randomCard1 = ""; 
//  $scope.randomCard2 = ""; 
//  $scope.randomCard3 = ""; 
//  $scope.randomCard4 = ""; 
//  
//
//        $scope.assignCards = function() { 
//            
////            $scope.randomCard1=$scope.cardList[Math.floor(Math.random() * 44)];
////            $scope.randomCard2=$scope.cardList[Math.floor(Math.random() * 44)];
////            $scope.randomCard3=$scope.cardList[Math.floor(Math.random() * 44)];
////            $scope.randomCard4=$scope.cardList[Math.floor(Math.random() * 44)];
//            $scope.randomCard1=$scope.cardList[0];
//            $scope.randomCard2=$scope.cardList[1];
//            $scope.randomCard3=$scope.cardList[2];
//            $scope.randomCard4=$scope.cardList[4];
//             console.log($scope.randomCard1);
//                        console.log($scope.randomCard2);
//                        console.log($scope.randomCard3);
//                        console.log($scope.randomCard4);
//            //make_base();
//            myCanvas();
//            
//            
////            for (var i = 0; i < $scope.items.length; i++) {
////                if($scope.items[i].place===string && double>=$scope.items[i].price){
////                    $scope.minusOne(i);
////                    var newImage=$scope.items[i].image;
////                }
////                
////            }
////            $scope.inputModelPlace=null;
////            $scope.inputModelMoney=null;
////            var newImage=$scope.items[i].image;
////            $scope.bought=$scope.items[i].image;
////            $scope.bought= newImage;
//	};
//        
//        
////  var canvas = document.getElementById('ctx'),
////  context = canvas.getContext('2d');
////                                function make_base()
////                                {
////                                    base_image = new Image();
////                                    base_image.src = 'Client/img/track.jpg';
////                                    base_image2 = new Image();
////                                    base_image2.src = $scope.randomCard1;
////                                    base_image3 = new Image();
////                                    base_image3.src = $scope.randomCard2;
////                                    base_image4 = new Image();
////                                    base_image4.src = $scope.randomCard3;
////                                    base_image5 = new Image();
////                                    base_image5.src = $scope.randomCard4;
////
////                                    base_image.onload = function () {
////                                        context.drawImage(base_image, 0, 100, 700, 500);
////                                        context.drawImage(base_image2, 358, 323, 242, 161);
////                                        context.drawImage(base_image3, 358, 162, 242, 161);
////                                        context.drawImage(base_image4, 678, 323, 242, 161);
////                                        context.drawImage(base_image5, 678, 163, 242, 161);
////                                    };
////                                };
////                        
////                        //make_base();
////                        console.log($scope.randomCard1);
////                        console.log($scope.randomCard2);
////                        console.log($scope.randomCard3);
////                        console.log($scope.randomCard4);
////                        
////       function myCanvas() {
////        
////        var c = canvas;
////        var ctx = c.getContext("2d");
////        //ctx.clearRect(0, 0, canvas.width, canvas.height);
////        var img1 = new Image();
////        img1.src = '/Client/img/track.jpg';
////        var img2 = new Image();
////        img2.src = $scope.randomCard1;
////        var img3 = new Image();
////        img3.src = $scope.randomCard2;
////        var img4 = new Image();
////        img4.src = $scope.randomCard3;
////        var img5 = new Image();
////        img5.src = $scope.randomCard4;
////
////        ctx.drawImage(img1, 0, 100, 700, 500);
////        ctx.drawImage(img2, 358, 323, 242, 161);
////        ctx.drawImage(img3, 358, 162, 242, 161);
////        ctx.drawImage(img4, 678, 323, 242, 161);
////        ctx.drawImage(img5, 678, 163, 242, 161);
////        
////       }
////      //myCanvas();
////      make_base();
//      
//  
//}]);





/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


