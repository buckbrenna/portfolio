 //declare bacteria variables here   
 PImage img;
 PImage img2;
 PImage fire;
 PImage pond;
 PImage bread;
 PImage toast;
 PImage hatch;
 PImage egg;
   
float xoff = 0.0;
float yoff = 0.0;

float x = 100;
float y = 100;
float angle1 = 0.0;
float segLength = 75;
boolean dead;

float[] ducks = new float[12];
boolean[] burn = new boolean[6];
boolean[] eggs = new boolean[6];
int[] count = new int[6];


//ArrayList<Float> ducks = new ArrayList<Float>();
 
 void setup() {     
   size(1000, 900);
   strokeWeight(40.0);
   stroke(#FFB412, 100);
   img = loadImage("duckLeft.png");
   img2= loadImage("duckRight.png");
   fire = loadImage("fire.jpg");
   pond = loadImage("pond.png");
   bread = loadImage("bread.png");
   toast = loadImage("toast.gif");
   hatch = loadImage("hatch.png");
   egg = loadImage("egg.png");
   for(int i=0; i<6; i++){
     burn[i]=false;}
   for(int i=0; i<6; i++){
     eggs[i]=false;}
   for(int i=0; i<6; i++){
     count[i]=0;}
   
 }   
 void draw()   
 {  
  //xoff = xoff + .01;
  //float n = noise(xoff) * width;
  //yoff = yoff + .01;
  //float m = noise(yoff) * width;
   
  background(0);
  image(fire, 0, 800);
  image(pond, 600, 0);
  image(bread, 800, 140);
  image(toast, 680, 140);
  float dx = mouseX-x;
  float dy = mouseY-y;
  //float dx = n-x;
  //float dy = m-y;
  angle1 = atan2(dy, dx);  
  x = mouseX - (cos(angle1) * segLength);
  y = mouseY - (sin(angle1) * segLength);
  //x = n - (cos(angle1) * segLength);
  //y = m - (sin(angle1) * segLength);
  image(img2, x-25, y-30);
  tint(#FF480A, 190);
  image(img2, x-25, y-30);
  noTint();
  
  ducks[0]=(mouseX-220*(cos(angle1)));
  ducks[1]=(mouseY-220*(sin(angle1)));
  
  ducks[2]=(mouseX-350*(cos(angle1)));
  ducks[3]=(mouseY-350*(sin(angle1)));
  
  ducks[4]=(x-80*(cos(angle1-(PI/6))));
  ducks[5]=(y-80*(sin(angle1-(PI/6))));
  
  ducks[6]=(x-80*(cos(angle1+(PI/6))));
  ducks[7]=(y-80*(sin(angle1+(PI/6))));
  
  ducks[8]=(x-210*(cos(angle1-(PI/12))));
  ducks[9]=(y-210*(sin(angle1-(PI/12))));
  
  ducks[10]=(x-210*(cos(angle1+(PI/12))));
  ducks[11]=(y-210*(sin(angle1+(PI/12))));
  
   for(int i=0; i<12; i+=2){
   if(ducks[i+1]>=800){
     burn[i/2]=true;
     eggs[i/2]=false;}
   if(!burn[i/2]){
     image(img, ducks[i]-25, ducks[i+1]-30);}
   if(burn[i/2]){
     if(ducks[i+1]<=190 && ducks[i]>=680){
       eggs[i/2]=true;}
     if(eggs[i/2]){
       if(count[i/2]<240){
         image(egg, ducks[i]-15, ducks[i+1]-25);}
       else if(count[i/2]<480){
         image(hatch, ducks[i]-35, ducks[i+1]-30);}
       else if(count[i/2]>=480){
         burn[i/2]= false;
         count[i/2]=0;}
       count[i/2]++;
       }
    }
   //for loop
   }
   
   
//draw
 }
