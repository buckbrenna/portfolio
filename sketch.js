'use strict';

var die1;
var totala=0;
var totalb=0;
var totalc=0;
var totald=0;
var totale=0;
var totalf=0;

function setup() {

    createCanvas(1000, 900);
    noLoop();
}


function draw() {
    background(220, 221, 224);
    fill(0);
    textSize(30);
    text("Let's roll some dice!", 352, 370);
    textSize(15);
    fill(125);
    text("click to begin", 445, 400);
    var x1 = 20;
    var y1 = 25;
    var count = 0;
    for (x1 = 20; x1 < 1000; x1 += 110) {
        for (y1 = 25; y1 < 900; y1 += 110) {
            die1 = new Die(x1, y1);
            die1.show();
            die1.bars();
            
            
        }
    }
}

function mousePressed() {
    redraw();
}

class Die {

    constructor(x, y) {
       
        this.x = x;
        this.y = y;
        this.a = 1 ;
        this.b = 1;
        this.c = 1;
        this.d = 1;
        this.e = 1;
        this.f = 1;

        this.rand = Math.floor((Math.random() * 6) + 1);
        //console.log(this.rand);
        if (this.rand == 1) {
            totala += this.a;
            this.a=totala;
        }
        if (this.rand == 2) {
            totalb += this.b;
            this.b = totalb;
        }
        if (this.rand == 3) {
            totalc += this.c;
            this.c = totalc;
        }
        if (this.rand == 4) {
            totald += this.d;
            this.d = totald;
        }
        if (this.rand == 5) {
            totale += this.e;
            this.e = totale;
        }
        if (this.rand == 6) {
            totalf += this.f;
            this.f = totalf;
        }
    }

    bars() {
        
        if (totala > 300 || totalb > 300 || totalc > 300 || totald > 300 || totale > 300 || totalf > 300) {
            fill(242, 33, 22);
            rect(375, 550, 30, -(0.266666) * totala);
            fill(255, 153, 0);
            rect(420, 550, 30, -(0.266666) * totalb);
            fill(242, 207, 7);
            rect(465, 550, 30, -(0.266666) * totalc);
            fill(82, 214, 71);
            rect(510, 550, 30, -(0.266666) * totald);
            fill(43, 112, 222);
            rect(555, 550, 30, -(0.266666) * totale);
            fill(181, 80, 255);
            rect(600, 550, 30, -(0.266666) * totalf);
        } 
        else if (totala > 200 || totalb > 200 || totalc > 200 || totald > 200 || totale > 200 || totalf > 200) {
            fill(242, 33, 22);
            rect(375, 550, 30, -(0.666) * totala);
            fill(255, 153, 0);
            rect(420, 550, 30, -(0.666) * totalb);
            fill(242, 207, 7);
            rect(465, 550, 30, -(0.666) * totalc);
            fill(82, 214, 71);
            rect(510, 550, 30, -(0.666) * totald);
            fill(43, 112, 222);
            rect(555, 550, 30, -(0.666) * totale);
            fill(181, 80, 255);
            rect(600, 550, 30, -(0.666) * totalf);
        } 
        else if (totala > 100 || totalb > 100 || totalc > 100 || totald > 100 || totale > 100 || totalf > 100) {
            fill(242, 33, 22);
            rect(375, 550, 30, -(1) * totala);
            fill(255, 153, 0);
            rect(420, 550, 30, -(1) * totalb);
            fill(242, 207, 7);
            rect(465, 550, 30, -(1) * totalc);
            fill(82, 214, 71);
            rect(510, 550, 30, -(1) * totald);
            fill(43, 112, 222);
            rect(555, 550, 30, -(1) * totale);
            fill(181, 80, 255);
            rect(600, 550, 30, -(1) * totalf);
        } 
        else {
            fill(242, 33, 22);
            rect(375, 550, 30, -(2) * totala);
            fill(255, 153, 0);
            rect(420, 550, 30, -(2) * totalb);
            fill(242, 207, 7);
            rect(465, 550, 30, -(2) * totalc);
            fill(82, 214, 71);
            rect(510, 550, 30, -(2) * totald);
            fill(43, 112, 222);
            rect(555, 550, 30, -(2) * totale);
            fill(181, 80, 255);
            rect(600, 550, 30, -(2) * totalf);
            console.log("one");
        }

    }

    show() {
        fill(255);
        strokeWeight(2);
        if (this.rand == 1) {
            rect(this.x, this.y, 80, 80, 10);
            fill(242, 33, 22);
            ellipse(this.x + 40, this.y + 40, 15, 15);

        }
        if (this.rand == 2) {
            rect(this.x, this.y, 80, 80, 10);
            fill(255, 153, 0);
            ellipse(this.x + 20, this.y + 20, 15, 15);
            ellipse(this.x + 60, this.y + 60, 15, 15);

        }
        if (this.rand == 3) {
            rect(this.x, this.y, 80, 80, 10);
            fill(242, 207, 7);
            ellipse(this.x + 40, this.y + 40, 15, 15);
            ellipse(this.x + 20, this.y + 20, 15, 15);
            ellipse(this.x + 60, this.y + 60, 15, 15);
        }
        if (this.rand == 4) {
            rect(this.x, this.y, 80, 80, 10);
            fill(82, 214, 71);
            ellipse(this.x + 20, this.y + 20, 15, 15);
            ellipse(this.x + 60, this.y + 60, 15, 15);
            ellipse(this.x + 60, this.y + 20, 15, 15);
            ellipse(this.x + 20, this.y + 60, 15, 15);

        }
        if (this.rand == 5) {
            rect(this.x, this.y, 80, 80, 10);
            fill(43, 112, 222);
            ellipse(this.x + 40, this.y + 40, 15, 15);
            ellipse(this.x + 20, this.y + 20, 15, 15);
            ellipse(this.x + 60, this.y + 60, 15, 15);
            ellipse(this.x + 60, this.y + 20, 15, 15);
            ellipse(this.x + 20, this.y + 60, 15, 15);

        }
        if (this.rand == 6) {
            rect(this.x, this.y, 80, 80, 10);
            fill(181, 80, 255);
            ellipse(this.x + 20, this.y + 20, 15, 15);
            ellipse(this.x + 60, this.y + 60, 15, 15);
            ellipse(this.x + 60, this.y + 20, 15, 15);
            ellipse(this.x + 20, this.y + 60, 15, 15);
            ellipse(this.x + 20, this.y + 40, 15, 15);
            ellipse(this.x + 60, this.y + 40, 15, 15);
        }


        fill(255);
        rect(335, 340, 330, 220, 7);
        fill(0);
        line(355, 550, 645, 550);
        line(355, 347, 355, 550);
        //below: lines for hashes on y axis
        line(352, 510, 358, 510);
        line(352, 470, 358, 470);
        line(352, 430, 358, 430);
        line(352, 390, 358, 390);
        line(352, 350, 358, 350);


        if (this.a > 300 || this.b > 300 || this.c > 300 || this.d > 300 || this.e > 300 || this.f > 300) {
            textSize(8);
            text("150", 337, 513);
            text("300", 337, 473);
            text("450", 337, 433);
            text("600", 337, 393);
            text("750", 337, 353);
        } else if (this.a > 200 || this.b > 200 || this.c > 200 || this.d > 200 || this.e > 200 || this.f > 200) {

            textSize(8);
            text("60", 337, 513);
            text("120", 337, 473);
            text("180", 337, 433);
            text("240", 337, 393);
            text("300", 337, 353);
        } else if (this.a > 100 || this.b > 100 || this.c > 100 || this.d > 100 || this.e > 100 || this.f > 100) {
            textSize(8);
            text("40", 337, 513);
            text("80", 337, 473);
            text("120", 337, 433);
            text("160", 337, 393);
            text("200", 337, 353);
        }
        //if(a>50||b>50||c>50||d>50||e>50||f>50){
        else {
            textSize(8);
            text("20", 337, 513);
            text("40", 337, 473);
            text("60", 337, 433);
            text("80", 337, 393);
            text("100", 337, 353);
        }


        line(350, 550, 360, 550);
        textSize(10);
        text("0", 342, 553);

        //end of show()  
    }

    //end of Die
}
