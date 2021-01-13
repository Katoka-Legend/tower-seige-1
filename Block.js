class Block{
    constructor(x,y,w,h){

        var op = {'restitiution':1,'friction':1.0,'density':1.0,isStatic:false}
        this.body = Bodies.rectangle(x,y,w,h,op)
        World.add(world,this.body)
        this.width = w
        this.height = h



    }

    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}