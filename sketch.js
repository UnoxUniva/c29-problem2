const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,platform1,platform2
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31,box32,box33,box34,box35,box36,box37,box38,box39,box40,box41,box42,box43,box44,box45,box46,box47,box48,box49,box50,box51,box52,box53,box54,box55,box56,box57,box58,box59,box60,box61
var polygon,polygon_img
var polygon_options
var sling1

function preload() {
    polygon_img = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,800)
    engine = Engine.create();
    world = engine.world;

    polygon_options = {
        restitution : 1.5,
        density : 2,
        setForce:5
    }

    polygon = Bodies.circle(100,200,30,polygon_options)
    World.add(world,polygon)

    ground = new Ground(width/2,700,width,20)
    platform1 = new Ground(width/3,520,300,20)
    platform2 = new Ground(800, 340 , 300 , 20)

     box1 = new Block(400, 490 , 30 , 40)
     box2 = new Block(430, 490 , 30 , 40)
     box3 = new Block(460, 490 , 30 , 40)
     box4 = new Block(490, 490 , 30 , 40)
     box5 = new Block(520, 490 , 30 , 40)
     box6 = new Block(370, 490 , 30 , 40)
     box7 = new Block(340, 490 , 30 , 40)
     box8 = new Block(310, 490 , 30 , 40)
     box9 = new Block(280, 490 , 30 , 40) 
     box10 = new Block(415, 450 , 30 , 40)
     box11 = new Block(445, 450 , 30 , 40)
     box12 = new Block(475, 450 , 30 , 40)
     box13 = new Block(505, 450 , 30 , 40)
     box14 = new Block(385, 450 , 30 , 40)
     box15 = new Block(355, 450 , 30 , 40)
     box16 = new Block(325, 450 , 30 , 40)
     box17 = new Block(295, 450 , 30 , 40)
     box18 = new Block(400, 410 , 30 , 40)
     box19 = new Block(430, 410 , 30 , 40)
     box20 = new Block(460, 410 , 30 , 40)
     box21 = new Block(490, 410 , 30 , 40)
     box22 = new Block(370, 410 , 30 , 40)
     box23 = new Block(340, 410 , 30 , 40)
     box24 = new Block(310, 410 , 30 , 40)
     box25 = new Block(415, 370 , 30 , 40)
     box26 = new Block(445, 370 , 30 , 40)
     box27 = new Block(475, 370 , 30 , 40)
     box28 = new Block(385, 370 , 30 , 40)
     box29 = new Block(355, 370 , 30 , 40)
     box30 = new Block(325, 370 , 30 , 40)
     box31 = new Block(800, 310 , 30 , 40)
     box32 = new Block(830, 310 , 30 , 40)
     box33 = new Block(860, 310 , 30 , 40)
     box34 = new Block(890, 310 , 30 , 40)
     box35 = new Block(920, 310 , 30 , 40)
     box36 = new Block(770, 310 , 30 , 40)
     box37 = new Block(740, 310 , 30 , 40)
     box38 = new Block(710, 310 , 30 , 40)
     box39 = new Block(680, 310 , 30 , 40)
     box40 = new Block(815, 270 , 30 , 40)
     box41 = new Block(845, 270 , 30 , 40)
     box42 = new Block(875, 270 , 30 , 40)
     box43 = new Block(905, 270 , 30 , 40)
     box44 = new Block(785, 270 , 30 , 40)
     box45 = new Block(755, 270 , 30 , 40)
     box46 = new Block(725, 270 , 30 , 40)
     box47 = new Block(695, 270 , 30 , 40)
     box48 = new Block(800, 230 , 30 , 40)
     box49 = new Block(830, 230 , 30 , 40)
     box50 = new Block(860, 230 , 30 , 40)
     box51 = new Block(890, 230 , 30 , 40)
     box52 = new Block(770, 230 , 30 , 40)
     box53 = new Block(740, 230 , 30 , 40)
     box54 = new Block(710, 230 , 30 , 40)
     box55 = new Block(815, 190 , 30 , 40)
     box56 = new Block(845, 190 , 30 , 40)
     box57 = new Block(875, 190 , 30 , 40)
     box58 = new Block(785, 190 , 30 , 40)
     box59 = new Block(755, 190 , 30 , 40)
     box60 = new Block(725, 190 , 30 , 40)

     



     sling1 = new SlingShot(this.polygon,{x:100,y:200})


}

function draw() {
    Engine.update(engine);
    background("grey")

    ground.display()
    platform1.display()
    platform2.display()

    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()
    box21.display()
    box22.display()
    box23.display()
    box24.display()
    box25.display()
    box26.display()
    box27.display()
    box28.display()
    box29.display()
    box30.display()
    box31.display()
    box32.display()
    box33.display()
    box34.display()
    box35.display()
    box36.display()
    box37.display()
    box38.display()
    box39.display()
    box40.display()
    box41.display()
    box42.display()
    box43.display()
    box44.display()
    box45.display()
    box46.display()
    box47.display()
    box48.display()
    box49.display()
    box50.display()
    box51.display()
    box52.display()
    box53.display()
    box54.display()
    box55.display()
    box56.display()
    box57.display()
    box58.display()
    box59.display()
    box60.display()

    imageMode(CENTER)
    image(polygon_img, polygon.position.x,polygon.position.y,50,50)
    

    sling1.display()
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})

}
function mouseReleased(){
    sling1.fly()
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(this.polygon,{x:100,y:200})
        sling1.attach(this.polygon,this.sling1)
    }
}
