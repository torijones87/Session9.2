function plane(model,seating,speed){
    this.model = model;
    this.seating = seating;
    this.speed = speed;
    
}
var plane1 = new plane("750",200,"250mph");
var plane2 = new plane("jet",2, "1400mph");
var plane3 = new plane("twin",10,"350");
    console.log("this plane is " + plane1.type);
    console.log("this plane is " + plane2.type);
    console.log("this plane is " + plane3.type);
var plane1 = new plane("750",210,"600mph");
var plane2 = new plane("jet",12,"600mph");
var plane3 = new plane("twin",20,"600mph");
    console.log("this plane is " + plane1.type);
    console.log("this plane is " + plane2.type);
    console.log("this plane is " + plane3.type);