class Chain{

    constructor(bodyA, pointB){
    
        var options = {
    
        bodyA:bodyA,
        pointB: pointB,
        stiffness:0.07,
        length:10
    
        }
    
    this.pointB=pointB;
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
    
    
    }

    fly(){
        this.chain.bodyA = null;
    }

    attach(body){
        this.chain.bodyA = body;
    }
    
    display(){
    
    var pointA = this.chain.bodyA.position
    var pointB = this.chain.bodyB.position
    
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    
    
    }
    
    }