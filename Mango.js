class Mango{
    constructor(x,y,radius){
        var options={
            'restitution':0.5,
            'friction':0.3,
            'density':1.0,
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("sprites/mango.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        ellipseMode(CENTER);
	    image(this.image, 0,0,this.radius*2, this.radius*2);
        pop();
    }
}