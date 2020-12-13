class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 1.6,
            length: 250
        }
        this.pointB = pointB;
        this.body= Constraint.create(options);
        World.add(world, this.body);
    }



    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            line(pointA.x, pointA.y,pointB.x, pointB.y);
            pop();
        }
 } 
}