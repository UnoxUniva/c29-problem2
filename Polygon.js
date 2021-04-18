class Polygon{
    constructor(x, y, r) {
        var options = {
          isStatic:false,
            restitution:0,
            friction:1.0,
            density:1.5
        }
        this.body = Bodies.circle(x, y, r, options);
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("polygon.png");
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y,);
        rotate(angle);
        
        image(this.image,this.x,this.y,this.r,this.r)
        imageMode(CENTER);
        pop()
      }
}