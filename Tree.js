class Tree{
      constructor(x,y,width,height){
              var options={
                  isStatic:true
              }
              //this.body = Bodies.rectangle(x, y, 550, 550, options);
              this.x = x;
              this.y = y;
              this.width = 550;
              this.height = 550;
              this.image = loadImage("sprites/tree.png");
             // World.add(world,this.body);
      }
      display(){
          //var pos =  this.body.position;
          push();
          translate(this.x, this.y);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height)
          pop();

      }
}