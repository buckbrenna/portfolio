Die die1;
  int a=0;
  int b=0;
  int c=0;
  int d=0;
  int e=0;
  int f=0;

void setup()
{
  size(1000, 900);
    noLoop();
    
}
void draw()
{
  
  println(mouseX+" "+mouseY);
  background(#DCDDE0);
  fill(0);
    textSize(30);
    text("Let's roll some dice!", 352, 370);
    textSize(15);
    fill(125);
    text("click to begin", 445, 400);
  int x1=20;
  int y1=25;
  int count=0;
  //die1= new Die(50, 50);
  //die1.show();
  //die1= new Die(150, 50);
  //die1.show();
  for(x1=20 ; x1<1000; x1+=110){
    for(y1=25; y1<900; y1+=110){
    die1= new Die(x1,y1);
    die1.show();
    die1.bars();
    
    }
  }  
  
    //your code here
}
void mousePressed()
{
    redraw();
}
class Die //models one single dice cube
{
    //variable declarations here
    private int x;
    private int y;
    private int rand;
    
    
   public Die(int x, int y) //constructor
    {
        //variable initializations here
        this.x=x;
        this.y=y;
        rand=(int)(Math.random()*6)+1;
        if(rand==1)
        a++;
        if(rand==2)
        b++;
        if(rand==3)
        c++;
        if(rand==4)
        d++;
        if(rand==5)
        e++;
        if(rand==6)
        f++;
        
        
    }
   public void bars()
    {
      //if(a>750||b>750||c>750||d>750||e>750||f>750){
      //fill(#F22116);
      //rect(375, 550, 30, -150);
      //fill(#FF9900);
      //rect(420, 550, 30, -150);
      //fill(#F2CF07);
      //rect(465, 550, 30, -150);
      //fill(#52D647);
      //rect(510, 550, 30, -150);
      //fill(#2B70DE);
      //rect(555, 550, 30, -150);
      //fill(#B550FF);
      //rect(600, 550, 30, -150);}
      
      if(a>300||b>300||c>300||d>300||e>300||f>300){
      fill(#F22116);
      rect(375, 550, 30, -(.266666)*a);
      fill(#FF9900);
      rect(420, 550, 30, -(.266666)*b);
      fill(#F2CF07);
      rect(465, 550, 30, -(.266666)*c);
      fill(#52D647);
      rect(510, 550, 30, -(.266666)*d);
      fill(#2B70DE);
      rect(555, 550, 30, -(.266666)*e);
      fill(#B550FF);
      rect(600, 550, 30, -(.266666)*f);
      }
      else if(a>200||b>200||c>200||d>200||e>200||f>200){
      fill(#F22116);
      rect(375, 550, 30, -(.66666)*a);
      fill(#FF9900);
      rect(420, 550, 30, -(.66666)*b);
      fill(#F2CF07);
      rect(465, 550, 30, -(.66666)*c);
      fill(#52D647);
      rect(510, 550, 30, -(.66666)*d);
      fill(#2B70DE);
      rect(555, 550, 30, -(.66666)*e);
      fill(#B550FF);
      rect(600, 550, 30, -(.66666)*f);
      }
      else if(a>100||b>100||c>100||d>100||e>100||f>100){
      fill(#F22116);
      rect(375, 550, 30, -(1)*a);
      fill(#FF9900);
      rect(420, 550, 30, -(1)*b);
      fill(#F2CF07);
      rect(465, 550, 30, -(1)*c);
      fill(#52D647);
      rect(510, 550, 30, -(1)*d);
      fill(#2B70DE);
      rect(555, 550, 30, -(1)*e);
      fill(#B550FF);
      rect(600, 550, 30, -(1)*f);
      }
      else{
      fill(#F22116);
      rect(375, 550, 30, -(2)*a);
      fill(#FF9900);
      rect(420, 550, 30, -(2)*b);
      fill(#F2CF07);
      rect(465, 550, 30, -(2)*c);
      fill(#52D647);
      rect(510, 550, 30, -(2)*d);
      fill(#2B70DE);
      rect(555, 550, 30, -(2)*e);
      fill(#B550FF);
      rect(600, 550, 30, -(2)*f);
      }
    }
   public void show()
    {
        
          fill(255);
          strokeWeight(2);
          if(rand==1){
            rect(x, y, 80, 80, 10);
            fill(#F22116);
            ellipse(x+40, y+40, 15, 15);
            
          }
          if(rand==2){
            rect(x, y, 80, 80, 10);
            fill(#FF9900);
            ellipse(x+20, y+20, 15, 15);
            ellipse(x+60, y+60, 15, 15);
            
          }  
          if(rand==3){
            rect(x, y, 80, 80, 10);
            fill(#F2CF07);
            ellipse(x+40, y+40, 15, 15);
            ellipse(x+20, y+20, 15, 15);
            ellipse(x+60, y+60, 15, 15);
            
          }  
          if(rand==4){
            rect(x, y, 80, 80, 10);
            fill(#52D647);
            ellipse(x+20, y+20, 15, 15);
            ellipse(x+60, y+60, 15, 15);
            ellipse(x+60, y+20, 15, 15);
            ellipse(x+20, y+60, 15, 15);
            
          }  
          if(rand==5){
            rect(x, y, 80, 80, 10);
            fill(#2B70DE);
            ellipse(x+40, y+40, 15, 15);
            ellipse(x+20, y+20, 15, 15);
            ellipse(x+60, y+60, 15, 15);
            ellipse(x+60, y+20, 15, 15);
            ellipse(x+20, y+60, 15, 15);
            
          }  
          if(rand==6){
            rect(x, y, 80, 80, 10);
            fill(#B550FF);
            ellipse(x+20, y+20, 15, 15);
            ellipse(x+60, y+60, 15, 15);
            ellipse(x+60, y+20, 15, 15);
            ellipse(x+20, y+60, 15, 15);
            ellipse(x+20, y+40, 15, 15);
            ellipse(x+60, y+40, 15, 15);
            
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
 
 //below: if statemens to change number labels on y axis
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
        text("100", 337, 353);
       }
      //else{
      //  text("10", 337, 510);
      //  text("20", 337, 475);
      //  text("30", 337, 440);
      //  text("40", 337, 405);
      //  text("50", 337, 370);
      //}
      
      line(350, 550 , 360, 550);
      textSize(10);
      text("0", 342, 553);
 
      //for(int i=1; i<7; i++){
      //line(345+(45*i), 535, 345+(45*i), 545);
      //if(i==1){
        
      //fill(#F22116);
      //rect(375, 550, 30, -(4/15)*a);
      //if(i==2){
      //fill(#FF9900);
      //rect(420, 550, 30, -(4/15)*b);
      //if(i==3){
      //fill(#F2CF07);
      //rect(465, 550, 30, -(4/15)*c);
      //if(i==4){
      //fill(#52D647);
      //rect(510, 550, 30, -(4/15)*d);
      //if(i==5){
      //fill(#2B70DE);
      //rect(555, 550, 30, -(4/15)*e);
      //if(i==6){
      //fill(#B550FF);
      //rect(600, 550, 30, -(4/15)*f);
      
      //}
      //375, 540,  30, -
      //420, 540,  30, -
      //465, 540,  30, -
      //510, 540,  30, -
      //555, 540,  30, -
      //600, 540,  30, -
      
    //}
  }
 
  
}
