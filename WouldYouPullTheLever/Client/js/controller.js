var CARD_LIST = [];
var CARD_LIST2 = [];

var randomCard1 = {};
var randomCard2 = {};
var randomCard3 = {};
var randomCard4 = {};
var randomCard5 = 0;
var randomCard6 = 0;
var randomCard7 = 0;
var randomCard8 = 0;
var randomCard9 = 0;
var randomCard10 = 0;

var canvas = document.getElementById('ctx'),
        context = canvas.getContext('2d');
var test = '0';

$(document).ready(function () {
    loadTheCards();
    make_base();
    drawOnce();

    $('#new_track').click(function (event) {
        event.preventDefault();
     
            randomizeCards3();

            try {
             
                setTimeout(function () {
                    myCanvas2();
                    console.log('2');
                }, 500);
                setTimeout(function () {
                    myCanvas3();
                    console.log('3');
                }, 500);
                setTimeout(function () {
                    myCanvas4();
                    console.log('4');
                }, 500);
                setTimeout(function () {
                    myCanvas5();
                    console.log('5');
                }, 500);
                setTimeout(function () {
                    myCanvas6();
                    console.log('6');
                }, 500);
                setTimeout(function () {
                    myCanvas7();
                    console.log('7');
                }, 500);
                setTimeout(function () {
                    myCanvas8();
                    console.log('8');
                }, 500);
                setTimeout(function () {
                    myCanvas9();
                    console.log('9');
                }, 500);
                setTimeout(function () {
                    myCanvas10();
                    console.log('10');
                }, 500);
                setTimeout(function () {
                    myCanvas11();
                    console.log('11');
                }, 500);
                setTimeout(function () {
                    myCanvas12();
                    console.log('12');
                }, 500);
                setTimeout(function () {
                    myCanvas13();
                    console.log('13');
                }, 500);
                setTimeout(function () {
                    myCanvas14();
                    console.log('14');
                }, 500);
                setTimeout(function () {
                    myCanvas15();
                    console.log('15');
                }, 500);
            
            } catch (err) {
                console.log(err);
            }


            $('#new_track').remove();
    });


});



function randomizeCards3() {
    shuffleArray(CARD_LIST);
    shuffleArray(CARD_LIST2);

    randomCard1 = CARD_LIST[0];
    randomCard2 = CARD_LIST[1];
    randomCard3 = CARD_LIST[2];
    randomCard4 = CARD_LIST[3];

    randomCard5 = CARD_LIST2[0];
    randomCard6 = CARD_LIST2[1];
    randomCard7 = CARD_LIST2[2];
    randomCard8 = CARD_LIST2[3];
    randomCard9 = CARD_LIST2[4];
    randomCard10 = CARD_LIST2[5];
   
}


function drawOnce() {
    var c = document.getElementById('ctx');
    var ctx = c.getContext("2d");

    for (var i = 0; i < 52; i++) {
        var img22 = new Image();
        img22.src = CARD_LIST[i].image;



        ctx.drawImage(img22, 358, 323, 242, 161);
    }


    for (var i = 0; i < 16; i++) {


        var img66 = new Image();
        img66.src = CARD_LIST2[i];
        ctx.fillStyle = "#FFFFFF";


        ctx.drawImage(img66, 888, 40, 120, 180);
    }
    var img111 = new Image();
    img111.src = '/Client/img/track.jpg';


    ctx.drawImage(img111, 0, 100, 700, 500);
}


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
        ctx.fillRect(610, 40, 50, 175);
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

    if (randomCard4.type.toString() === "1") {


        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img8 = new Image();
        img8.src = randomCard6;
        ctx.fillStyle = "#FFFFFF";

        ctx.save();

        ctx.rotate(20 * Math.PI / 180);
        ctx.translate(-10, -330);
        ctx.fillRect(927, 40, 30, 180);
        ctx.fillRect(888, 40, 130, 93);
        ctx.drawImage(img8, 888, 40, 120, 180);




        ctx.restore();
    } else {
        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img8 = new Image();
        img8.src = randomCard6;
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


        var img9 = new Image();
        img9.src = randomCard7;



        ctx.fillStyle = "#FFFFFF";

        ctx.save();

        ctx.rotate(-30 * Math.PI / 180);
        ctx.translate(-25, 100);

        ctx.fillRect(240, 40, 30, 180);
        ctx.fillRect(200, 40, 130, 93);
        ctx.drawImage(img9, 200, 40, 120, 180);

        ctx.restore();
    } else {
        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img9 = new Image();
        img9.src = randomCard7;



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
    if (randomCard1.type.toString() === '1') {
        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img10 = new Image();
        img10.src = randomCard8;



        ctx.fillStyle = "#FFFFFF";

        ctx.save();

        ctx.rotate(183 * Math.PI / 180);
        ctx.translate(-470, -600);

        ctx.fillRect(40, 0, 30, 180);
        ctx.fillRect(0, 0, 130, 93);
        ctx.drawImage(img10, 0, 0, 130, 190);

        ctx.restore();
    } else {
        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img10 = new Image();
        img10.src = randomCard8;



        ctx.fillStyle = "#FFFFFF";

        ctx.save();

        ctx.rotate(183 * Math.PI / 180);
        ctx.translate(-470, -600);

        ctx.fillRect(50, 0, 15, 180);
        ctx.fillRect(0, 0, 130, 93);
        //ctx.drawImage(img6, 0, 0, 130, 190);

        ctx.restore();
    }

}
;
function myCanvas11() {
    if (randomCard1.type.toString() === '1') {
        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img11 = new Image();
        img11.src = randomCard8;



        ctx.fillStyle = "#FFFFFF";

        ctx.save();

        ctx.rotate(1 * Math.PI / 180);
        ctx.translate(0, 0);

        ctx.fillRect(350, 520, 50, 180);
        ctx.fillRect(310, 510, 140, 123);
        ctx.drawImage(img11, 310, 520, 130, 190);
        ctx.fillRect(350, 625, 50, 180);

        ctx.restore();
    } else {
        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img11 = new Image();
        img11.src = randomCard8;



        ctx.fillStyle = "#FFFFFF";

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
    test = '0';
    if (Math.floor(Math.random() * 52 > 30)) {
        test = '1';
        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img12 = new Image();
        img12.src = randomCard9;



        ctx.fillStyle = "#FFFFFF";

        ctx.save();

        ctx.rotate(180 * Math.PI / 180);
        ctx.translate(-695, -620);

        ctx.fillRect(40, 0, 30, 180);
        ctx.fillRect(0, 0, 130, 93);
        ctx.drawImage(img12, 0, 0, 130, 190);

        ctx.restore();
    } else {
        test = '0';
        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img12 = new Image();
        img12.src = randomCard9;



        ctx.fillStyle = "#FFFFFF";

        ctx.save();

        ctx.rotate(180 * Math.PI / 180);
        ctx.translate(-695, -620);

        ctx.fillRect(40, 0, 50, 185);
        ctx.fillRect(0, 0, 130, 93);
        // ctx.drawImage(img6, 0, 0, 130, 190);

        ctx.restore();
    }

}
;
function myCanvas13() {
    if (test === '1') {
        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img13 = new Image();
        img13.src = randomCard9;



        ctx.fillStyle = "#FFFFFF";

        ctx.save();

        ctx.rotate(1 * Math.PI / 180);
        ctx.translate(0, 0);

        ctx.fillRect(600, 520, 50, 180);
        ctx.fillRect(560, 510, 140, 123);
        ctx.drawImage(img13, 560, 520, 130, 190);
        ctx.fillRect(600, 625, 50, 180);

        ctx.restore();
    } else {
        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img13 = new Image();
        img13.src = randomCard9;



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
    if (randomCard3.type.toString() === '1') {
        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img14 = new Image();
        img14.src = randomCard10;



        ctx.fillStyle = "#FFFFFF";

        ctx.save();

        ctx.rotate(179 * Math.PI / 180);
        ctx.translate(-895, -640);

        ctx.fillRect(40, 0, 30, 180);
        ctx.fillRect(0, 0, 130, 93);
        ctx.drawImage(img14, 0, 0, 130, 190);

        ctx.restore();
    } else {
        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img14 = new Image();
        img14.src = randomCard10;



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
    if (randomCard3.type.toString() === '1') {
        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img15 = new Image();
        img15.src = randomCard10;



        ctx.fillStyle = "FFFFFF";

        ctx.save();

        ctx.rotate(1 * Math.PI / 180);
        ctx.translate(0, 0);

        ctx.fillRect(820, 520, 50, 180);
        ctx.fillRect(780, 510, 140, 123);
        ctx.drawImage(img15, 780, 520, 130, 190);
        ctx.fillRect(820, 625, 50, 180);

        ctx.restore();
    } else {
        var c = document.getElementById('ctx');
        var ctx = c.getContext("2d");


        var img15 = new Image();
        img15.src = randomCard10;



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

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


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

function loadTheCards(){
    CARD_LIST.push({image: '/Client/img/1.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/Sman.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/harambe.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/jackass.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/mcDee.jpg', type: 0});//good
CARD_LIST.push({image: '/Client/img/panda.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/panda2.jpg', type: 1});//good
CARD_LIST.push({image: '/Client/img/police2.png', type: 0});//good
CARD_LIST.push({image: '/Client/img/tracknonmain.png', type: 0});//good
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

CARD_LIST2.push('/Client/img/65.png');
CARD_LIST2.push('/Client/img/66.png');
CARD_LIST2.push('/Client/img/67.png');

}
//http://trolleyproblem.herokuapp.com/