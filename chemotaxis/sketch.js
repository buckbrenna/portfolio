'use strict'

//declare bacteria variables here   
var img;
var img2;
var fire;
var pond;
var bread;
var toast;
var hatch;
var egg;

var x = 100;
var y = 100;
var angle1 = 0.0;
var segLength = 75/2;
var dead = false;

var ducks = new Array();
var burn = new Array();
var eggs = new Array();
var count = new Array();


function setup() {
    var canvas = createCanvas(900/2, 800/2);
    canvas.parent('sketch-div');
    //strokeWeight(40.0);
    //stroke('#FFB412', 100);
    img = loadImage("data/duckLeft.png");
    img2 = loadImage("data/duckRight.png");
    fire = loadImage("data/fire.png");
    pond = loadImage("data/pond.png");
    bread = loadImage("data/bread.png");
    toast = loadImage("data/toast.gif");
    hatch = loadImage("data/hatch.png");
    egg = loadImage("data/egg.png");
    for (var i = 0; i < 6; i++) {
        burn[i] = false;
    }
    for (var i = 0; i < 6; i++) {
        eggs[i] = false;
    }
    for (var i = 0; i < 6; i++) {
        count[i] = 0;
    }

}

function draw() {
    fire.resize(500, 50);
    bread.resize(40,18);
    img.resize(25,25);
    img2.resize(25,25);
    pond.resize(200,125);
    toast.resize(35,30);
    hatch.resize(27,29);
    egg.resize(15,20);
    background(0);
    image(fire, 0, 700/2);
    image(pond, 500/2, 0);
    image(bread, 700/2, 140/2);
    image(toast, 580/2, 140/2);
    var dx = mouseX - x;
    var dy = mouseY - y;

    angle1 = atan2(dy, dx);
    x = mouseX - (cos(angle1) * segLength);
    y = mouseY - (sin(angle1) * segLength);

    image(img2, x - 25/2, y - 30/2);
    tint(255, 72, 48, 190);
    image(img2, x - 25/2, y - 30/2);
    noTint();

    ducks[0] = (mouseX - 110 * (cos(angle1)));
    ducks[1] = (mouseY - 110 * (sin(angle1)));

    ducks[2] = (mouseX - 175 * (cos(angle1)));
    ducks[3] = (mouseY - 175 * (sin(angle1)));

    ducks[4] = (x - 40 * (cos(angle1 - (PI / 6))));
    ducks[5] = (y - 40 * (sin(angle1 - (PI / 6))));

    ducks[6] = (x - 40 * (cos(angle1 + (PI / 6))));
    ducks[7] = (y - 40 * (sin(angle1 + (PI / 6))));

    ducks[8] = (x - 105 * (cos(angle1 - (PI / 12))));
    ducks[9] = (y - 105 * (sin(angle1 - (PI / 12))));

    ducks[10] = (x - 105 * (cos(angle1 + (PI / 12))));
    ducks[11] = (y - 105 * (sin(angle1 + (PI / 12))));

    for (var i = 0; i < 12; i += 2) {
        if (ducks[i + 1] >= 700/2) {
            burn[i / 2] = true;
            eggs[i / 2] = false;
        }
        if (!burn[i / 2]) {
            image(img, ducks[i] - 25/2, ducks[i + 1] - 30/2);
        }
        if (burn[i / 2]) {
            if (ducks[i + 1] <= 190/2 && ducks[i] >= 580/2) {
                eggs[i / 2] = true;
            }
            if (eggs[i / 2]) {
                if (count[i / 2] < 240/2) {
                    image(egg, ducks[i] - 15/2, ducks[i + 1] - 25/2);
                } else if (count[i / 2] < 480/2) {
                    image(hatch, ducks[i] - 35/2, ducks[i + 1] - 30/2);
                } else if (count[i / 2] >= 480/2) {
                    burn[i / 2] = false;
                    count[i / 2] = 0;
                }
                count[i / 2]++;
            }
        }

    }

}