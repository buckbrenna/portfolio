'use strict';

var die1;
  var a = 0;
  var b = 0;
  var c = 0;
  var d = 0;
  var e = 0;
  var f = 0;


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
    die1.bars(); }
   }
}

function mousePressed() {
   redraw();
  }
  
class Die {
 
  Die(x, y){
    this.x = x;
    this.y = y;
    
    this.rand =(Math.random()*6)+1;
        if(this.rand==1){
        a++;}
        if(this.rand==2){
        b++;}
        if(this.rand==3){
        c++;}
        if(this.rand==4){
        d++;}
        if(this.rand==5){
        e++;}
        if(this.rand==6){
        f++;}
  }
  
 bars(){
    if(a>300||b>300||c>300||d>300||e>300||f>300){
      fill(242,33,22);
      rect(375, 550, 30, -(0.266666)*a);
      fill(255,153,0);
      rect(420, 550, 30, -(0.266666)*b);
      fill(242,207,7);
      rect(465, 550, 30, -(0.266666)*c);
      fill(82,214,71);
      rect(510, 550, 30, -(0.266666)*d);
      fill(43,112,222);
      rect(555, 550, 30, -(0.266666)*e);
      fill(181,80,255);
      rect(600, 550, 30, -(0.266666)*f);
      }
      else if(a>200||b>200||c>200||d>200||e>200||f>200){
      fill(242,33,22);
      rect(375, 550, 30, -(0.666)*a);
      fill(255,153,0);
      rect(420, 550, 30, -(0.666)*b);
      fill(242,207,7);
      rect(465, 550, 30, -(0.666)*c);
      fill(82,214,71);
      rect(510, 550, 30, -(0.666)*d);
      fill(43,112,222);
      rect(555, 550, 30, -(0.666)*e);
      fill(181,80,255);
      rect(600, 550, 30, -(0.666)*f);
      }
      else if(a>100||b>100||c>100||d>100||e>100||f>100){
      fill(242,33,22);
      rect(375, 550, 30, -(1)*a);
      fill(255,153,0);
      rect(420, 550, 30, -(1)*b);
      fill(242,207,7);
      rect(465, 550, 30, -(1)*c);
      fill(82,214,71);
      rect(510, 550, 30, -(1)*d);
      fill(43,112,222);
      rect(555, 550, 30, -(1)*e);
      fill(181,80,255);
      rect(600, 550, 30, -(1)*f);
      }
      else{
      fill(242,33,22);
      rect(375, 550, 30, -(2)*a);
      fill(255,153,0);
      rect(420, 550, 30, -(2)*b);
      fill(242,207,7);
      rect(465, 550, 30, -(2)*c);
      fill(82,214,71);
      rect(510, 550, 30, -(2)*d);
      fill(43,112,222);
      rect(555, 550, 30, -(2)*e);
      fill(181,80,255);
      rect(600, 550, 30, -(2)*f);
      }
      
  }

 show(){
  fill(255);
  strokeWeight(2);
          if(this.rand==1){
            rect(this.x, this.y, 80, 80, 10);
            fill(242,33,22);
            ellipse(this.x+40, this.y+40, 15, 15);
            
          }
          if(this.rand==2){
            rect(this.x, this.y, 80, 80, 10);
            fill(255,153,0);
            ellipse(this.x+20, this.y+20, 15, 15);
            ellipse(this.x+60, this.y+60, 15, 15);
            
          }  
          if(this.rand==3){
            rect(this.x, this.y, 80, 80, 10);
            fill(242,207,7);
            ellipse(this.x+40, this.y+40, 15, 15);
            ellipse(this.x+20, this.y+20, 15, 15);
            ellipse(this.x+60, this.y+60, 15, 15);
            
          }  
          if(this.rand==4){
            rect(this.x, this.y, 80, 80, 10);
            fill(82,214,71); 
            ellipse(this.x+20, this.y+20, 15, 15);
            ellipse(this.x+60, this.y+60, 15, 15);
            ellipse(this.x+60, this.y+20, 15, 15);
            ellipse(this.x+20, this.y+60, 15, 15);
            
          }  
          if(this.rand==5){
            rect(this.x, this.y, 80, 80, 10);
            fill(43,112,222);
            ellipse(this.x+40, this.y+40, 15, 15);
            ellipse(this.x+20, this.y+20, 15, 15);
            ellipse(this.x+60, this.y+60, 15, 15);
            ellipse(this.x+60, this.y+20, 15, 15);
            ellipse(this.x+20, this.y+60, 15, 15);
            
          }  
          if(this.rand==6){
            rect(this.x, this.y, 80, 80, 10);
            fill(181,80,255);
            ellipse(this.x+20, this.y+20, 15, 15);
            ellipse(this.x+60, this.y+60, 15, 15);
            ellipse(this.x+60, this.y+20, 15, 15);
            ellipse(this.x+20, this.y+60, 15, 15);
            ellipse(this.x+20, this.y+40, 15, 15);
            ellipse(this.x+60, this.y+40, 15, 15);
          } 
          
          
     fill(255);
      rect(335, 340, 330, 220, 7);
      fill(0);
      line(355, 550, 645, 550); 
      line(355, 347, 355, 550);
      //below: lines for hashes on y axis
      line(352, 510 , 358, 510);
      line(352, 470 , 358, 470);
      line(352, 430 , 358, 430);
      line(352, 390 , 358, 390);
      line(352, 350 , 358, 350);     
  
  
  if(a>300||b>300||c>300||d>300||e>300||f>300){
        textSize(8);
        text("150", 337, 513);
        text("300", 337, 473);
        text("450", 337, 433);
        text("600", 337, 393);
        text("750", 337, 353);
      }
      else if(a>200||b>200||c>200||d>200||e>200||f>200){
        
        textSize(8);
        text("60", 337, 513);
        text("120", 337, 473);
        text("180", 337, 433);
        text("240", 337, 393);
        text("300", 337, 353);
      } 
      else if(a>100||b>100||c>100||d>100||e>100||f>100){
        textSize(8);
        text("40", 337, 513);
        text("80", 337, 473);
        text("120", 337, 433);
        text("160", 337, 393);
        text("200", 337, 353);
       }
      //if(a>50||b>50||c>50||d>50||e>50||f>50){
        else{
        textSize(8);
        text("20", 337, 513);
        text("40", 337, 473);
        text("60", 337, 433);
        text("80", 337, 393);
        text("100", 337, 353);}
  
  
      line(350, 550 , 360, 550);
      textSize(10);
      text("0", 342, 553);
      
    //end of show()  
    }
  
  //end of Die
}
  
