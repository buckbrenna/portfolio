'use strict';

var startX = 400;
var startY = 375;
var endX = 400;
var endY = 375;
var c = 0;
var count = 0;
//var myImage = new Image(470, 360);
var img;


function preload() {
    img = loadImage('data/mushu.png');

}

function setup() {
    createCanvas(1000, 750);
    background(161);
    frameRate(40);
    strokeWeight(13);
    textSize(25);
    text('   see Mushu breathe fire', 10, 50);

    //image(img, 0, 270);


}


function draw() {
    textSize(25);
    text('   see Mushu breathe fire', 10, 50);
   
    applyMatrix();
    scale(-0.8, 0.8);
    image(img, -img.width, 270);
    resetMatrix();

    c = (int)(Math.random() * 3);
    if (c === 0) {
    stroke((int)((Math.random() * 255) + 125), (int)(Math.random() * 40), (Math.random() * 30)); }
    else if (c === 1) {
    stroke((int)((Math.random() * 90) + 175), (int)((Math.random() * 50) + 50), (Math.random() * 40)); }
    else {
        stroke((int)((Math.random() * 50) + 210), (int)((Math.random() * 120) + 30), (Math.random() * 30)); }

    //if(keyPressed){
    //if(key==' '){
    while (endX < 1000) {
        endX = startX + (int)(Math.random() * 9);
        endY = startY + (int)((Math.random() * 29) - 14.5);
        line(startX, startY, endX, endY);
        startX = endX;
        startY = endY;
    }
    if (count < 200) {
        startX = 400;
        startY = 375;
        endX = 400;
        endY = 375;
    } else {
        background('#A1A1A1');
        textSize(25);
        text("   see Mushu breathe fire", 10, 50);
        count = 0;
    }

    //if (count / 4530 === 0) {
        textSize(10);
       
        fill(255);
        var e = (int)((Math.random() * 2));
        if (e === 0) {
            noStroke();
            text("HOT", ((((Math.random() * 100) + 1)) * 10), ((((Math.random() * 90) + 1)) * 10)); }
    //}
    count = count + 1;

    //}}

    //println(mouseX + " " + mouseY);
}


