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
        }


      

    });
    

});

var CARD_LIST = [];
var CARD_LIST2 = [];

CARD_LIST.push('/Client/img/1.jpg');//good
CARD_LIST.push('/Client/img/Sman.jpg');//good
CARD_LIST.push('/Client/img/harambe.jpg');//good
CARD_LIST.push('/Client/img/jackass.jpg');//good
CARD_LIST.push('/Client/img/mcDee.jpg');//good
CARD_LIST.push('/Client/img/panda.jpg');//good
CARD_LIST.push('/Client/img/panda2.jpg');//good
CARD_LIST.push('/Client/img/police2.png');//good
CARD_LIST.push('/Client/img/track.png');//good
CARD_LIST.push('/Client/img/tunnel.jpg');//good
CARD_LIST.push('/Client/img/2.jpg');//good
CARD_LIST.push('/Client/img/3.jpg');//good
CARD_LIST.push('/Client/img/4.jpg');//good
CARD_LIST.push('/Client/img/5.jpg');//good
CARD_LIST.push('/Client/img/6.jpg');//good
CARD_LIST.push('/Client/img/7.jpg');//good
CARD_LIST.push('/Client/img/8.jpg');//good
CARD_LIST.push('/Client/img/9.jpg');//good
CARD_LIST.push('/Client/img/10.jpg');//good
CARD_LIST.push('/Client/img/11.jpg');//good
CARD_LIST.push('/Client/img/12.jpg');//good
CARD_LIST.push('/Client/img/13.jpg');//good
CARD_LIST.push('/Client/img/14.jpg');//good
CARD_LIST.push('/Client/img/15.jpg');//good
CARD_LIST.push('/Client/img/16.jpg');//good
CARD_LIST.push('/Client/img/17.jpg');//good
CARD_LIST.push('/Client/img/18.jpg');//good
CARD_LIST.push('/Client/img/19.jpg');//good
CARD_LIST.push('/Client/img/20.jpg');//good through 29
CARD_LIST.push('/Client/img/21.jpg');
CARD_LIST.push('/Client/img/22.jpg');
CARD_LIST.push('/Client/img/23.jpg');
CARD_LIST.push('/Client/img/24.jpg');
CARD_LIST.push('/Client/img/25.jpg');
CARD_LIST.push('/Client/img/26.jpg');
CARD_LIST.push('/Client/img/27.jpg');
CARD_LIST.push('/Client/img/28.jpg');
CARD_LIST.push('/Client/img/29.jpg');//good
CARD_LIST.push('/Client/img/30.jpg');//good
CARD_LIST.push('/Client/img/31.jpg');//good
CARD_LIST.push('/Client/img/32.jpg');//good
CARD_LIST.push('/Client/img/33.jpg');//good
CARD_LIST.push('/Client/img/34.jpg');//good
//CARD_LIST.push('/Client/img/35.jpg');//good
CARD_LIST.push('/Client/img/36.jpg');//good
CARD_LIST.push('/Client/img/37.jpg');//good
CARD_LIST.push('/Client/img/38.jpg');//good
CARD_LIST.push('/Client/img/39.jpg');//good
CARD_LIST.push('/Client/img/40.jpg');//good
CARD_LIST.push('/Client/img/41.jpg');//good
CARD_LIST.push('/Client/img/42.jpg');//good
CARD_LIST.push('/Client/img/43.jpg');//good
CARD_LIST.push('/Client/img/44.jpg');//good
//CARD_LIST.push('/Client/img/45.jpg');//good
CARD_LIST2.push('/Client/img/50.png');
CARD_LIST2.push('/Client/img/51.png');
//CARD_LIST2.push('/Client/img/48.png');
CARD_LIST2.push('/Client/img/52.png');
//CARD_LIST2.push('/Client/img/53.png');
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
CARD_LIST2.push('/Client/img/64.png');
CARD_LIST2.push('/Client/img/65.png');
CARD_LIST2.push('/Client/img/66.png');
CARD_LIST2.push('/Client/img/67.png');
//var shuffle = require('shuffle-array');
//shuffle(CARD_LIST);

var randomCard1 = 0;
var randomCard2 = 0;
var randomCard3 = 0;
var randomCard4 = 0;
var randomCard5 = 0;

//function randomizeCards(){
//
//randomCard1=CARD_LIST[Math.floor(Math.random() * 44)];
//randomCard2=CARD_LIST[Math.floor(Math.random() * 44)];
//randomCard3=CARD_LIST[Math.floor(Math.random() * 44)];
//randomCard4=CARD_LIST[Math.floor(Math.random() * 44)];
//randomCard5=CARD_LIST[45+ Math.floor(Math.random() * 10)];
//randomCard5=CARD_LIST[45+ Math.floor(Math.random() * 10)];
//console.log(randomCard1);
//};
function randomizeCards2() {

    do {
        randomCard1 = CARD_LIST[Math.floor(Math.random() * 53)];
        randomCard2 = CARD_LIST[Math.floor(Math.random() * 53)];
        randomCard3 = CARD_LIST[Math.floor(Math.random() * 53)];
        randomCard4 = CARD_LIST[Math.floor(Math.random() * 53)];
        randomCard5 = CARD_LIST2[Math.floor(Math.random() * 18)];
    } while (randomCard1 === randomCard2 || randomCard1 === randomCard3 || randomCard1 === randomCard4 || randomCard2 === randomCard3 || randomCard2 === randomCard4 || randomCard3 === randomCard4);
    console.log(randomCard1);
    console.log(randomCard2);
    console.log(randomCard3);
    console.log(randomCard4);
}
;



function myCanvas1() {

    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");
    
    var img1 = new Image();
    img1.src = '/Client/img/track.jpg';


    ctx.drawImage(img1, 0, 60, 700, 500);


}
;
function myCanvas2() {

    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");
   

    var img2 = new Image();
    img2.src = randomCard1;



    ctx.drawImage(img2, 358, 283, 242, 161);


}
;
function myCanvas3() {

    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");
   

    var img3 = new Image();
    img3.src = randomCard2;



    ctx.drawImage(img3, 358, 122, 242, 161);



}
;
function myCanvas4() {

    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");
   

    var img4 = new Image();
    img4.src = randomCard3;



    ctx.drawImage(img4, 678, 283, 242, 161);


}
;
function myCanvas5() {

    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");
    

    var img5 = new Image();
    img5.src = randomCard4;


    ctx.drawImage(img5, 678, 123, 242, 161);

}
;
function myCanvas6() {

    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");
   

    var img6 = new Image();
    img6.src = randomCard5;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(588, 0, 150, 100);
    ctx.drawImage(img6, 588, 0, 120, 180);

}
;
function myCanvas7() {

    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");
    

  
    ctx.fillStyle = "#000000";
    ctx.fillRect(359, 282, 560, 1);
    

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
        context.drawImage(base_image, 0, 60, 700, 500);
      
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


