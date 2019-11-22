NormalParticle planet = new JumboParticle();
AddParticle meep = new AddParticle();
NormalParticle[] particles;
JumboParticle ship = new JumboParticle();
Oddball alienOne = new Oddball();
Oddball alienTwo = new Oddball(2*PI/3-PI/16);
Oddball alienThree = new Oddball(4*PI/3+ PI/20);
ArrayList<NormalParticle> particle = new ArrayList<NormalParticle>();
float lastX;
float lastY;
PImage ufo;
PImage alien1;
PImage alien2;
PImage alien3;
PImage mars, earth, venus;
int c=1;
float pX, pY;

void setup(){
  size(1000, 900);
  ufo = loadImage("ufo.png");
  alien1 = loadImage("alien1.png");
  alien2 = loadImage("alien2.png");
  alien3 = loadImage("alien3.png");
  mars = loadImage("mars.png");
  earth = loadImage("earth.png");
  venus = loadImage("d copy 2.png");
}

void draw(){
   background(0);
   for(int i=0; i<particle.size(); i++){
    particle.get(i).move();
    particle.get(i).show();
    if(lastX>1000 || lastX<0 || lastY>1000 || lastY<0)
    particle.remove(i); 
  }
   
   meep.star();
   meep.star();
   meep.star();
   
   alienOne.move();
   alienOne.show1();
   alienTwo.move();
   alienTwo.show2();
   alienThree.move();
   alienThree.show3();
   
   if(c/300==1){
   ship.addPlanet();
   c=0;}
 
   ship.ship();
   
   c++;
}

class NormalParticle implements Particle{
  float x;
  float y;
  double speed;
  float angle;
  float size;
  float circle;
  int count=0;
  float stroke;
  
  public NormalParticle(){
    x=(float)((Math.random()*1000)-500);
    y=(float)((Math.random()*900)-450);
    speed = 1;
    stroke = ((float)Math.random()*4)+.5;
    angle= -1*atan2(x, y)+(PI/2);
    x+=500;
    y+=450;
  }
  
  void move(){
    speed*=1.03;
    lastX=x;
    lastY=y;
    x += cos(angle)*speed;
    y += sin(angle)*speed;
  }
  
  void show(){
      stroke(3.5*count);
      strokeWeight(stroke*1.1);
      noStroke();
      fill((dist(500, 450, x, y)/dist(500, 450, 1000, 900)) * 255);
      ellipse(x, y, dist(x, y, lastX, lastY), dist(x, y, lastX, lastY));
      
      count++;
  }
}

 public interface Particle{
  void show();
  void move();
}

class AddParticle extends NormalParticle{
   
  AddParticle(){
    super();
  }
  
  void star(){
    particle.add(new NormalParticle());
    count=0;
  } 
}

class Oddball {
  //alien buddy
  double x, y, r;
  float ang;
  Oddball() {
    x=width/2;
    y=height/2;
    r= Math.random()*20;
    ang = 0;
    //ang = (Math.PI/2)*Math.random();
  }
  Oddball(float m){
    x=width/2;
    y=height/2;
    r= Math.random()*20;
    ang = m;
  }
  
  void show1(){
    image(alien1, (int)x, (int)y);
  }
  void show2(){
    image(alien2, (int)x, (int)y);
  }
  void show3(){
    image(alien3, (int)x, (int)y);
  }
  
  void move(){
    x = (cos((3.0)*ang)*cos(ang)*125)+484;
    y = (cos((3.0)*ang)*sin(ang)*125)+425;
    ang+=0.01;
  }
}

class JumboParticle extends NormalParticle{
 //planet
 int p;
 JumboParticle(){
   super();
    x=(float)((Math.random()*200)-10);
    y=(float)((Math.random()*150)-75);
    speed = 1;
    stroke = ((float)Math.random()*4);
    angle= -1*atan2(x, y)+(PI/2);
    x+=500;
    y+=450;
    p=(int)(Math.random()*3);
 }
 void ship(){
   image(ufo, 400, 400);
 }
  void addPlanet(){
   particle.add(new JumboParticle());
 }
 void show(){
   noStroke();
   fill((dist(500, 450, x, y)/dist(500, 450, 1000, 900)) * 255);
   size = (dist(500, 450, x, y)*50/dist(500, 450, 1000, 900));
      //ellipse(x, y, size, size);
   if(p==0){
     image(earth, x, y);
   }
   if(p==1){
     image(mars, x, y);
   }
   if(p==2){
     image(venus, x, y);
   }
   
 }
}
