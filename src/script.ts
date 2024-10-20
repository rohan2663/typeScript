//DAY 1

// console.log("Hello this is a typescript file");
// // let a:number;
// // a = 10;
// let a:number | string;
// a = 10;
// a = "asds";
// console.log(a);
// const RED:number= 1;
// enum Colors{RED,GREEN,BLUE};
// let mycolor:Colors;
// mycolor=Colors.RED;
// console.log(mycolor);
// console.log("Compiled automatically");
// let sum = (x:number,y:number)=>{
//     console.log("Sum of x & y is : ",x+y);
// }
// sum(2,3);
// let sub = (x:number,y:number)=>{
//     console.log("Substraction of x & y is : ",x-y);
// }
// sub(3,2);
// let mul = (x:number,y:number)=>{
//     console.log("Multilication of x & y is : ",x*y);
// }
// mul(2,3);
// let div = (x:number,y:number)=>{
//     console.log("Division of x & y is : ",x/y);
// }
// div(4,2);


//DAY 2

// interface Point{
//     x:number,
//     y:number
// }

// function drawPoint(point:Point){}

// function getDistance(point1:Point,point2:Point){}

// function drawPoint(point:{x:number,y:number}){
//     console.log(point.x,point.y);
// }

// function getDistance(point1:{x:number,y:number},point2:{x:number,y:number}){}

// drawPoint({x:10,y:20});
// getDistance({x:30,y:40},{x:50,y:60});

// let obj = {name:"adas"};

// let obj:{name:string,id:number}={
//     name:"Code",id:0
// };

// let emp:{name:string,code:number}={
//     name:"Code",code:10
// };

// let emp1:{name:string,code:number}={
//     name:"Code1",code:11
// };

// type Employee = {
//     name:string;
//     id:number
// }

// interface Employee{
//     name:string,
//     id:number
// }

// interface Employee {
//   age:number
// }

// let emp2:Employee={
//     name:"Code2",id:12,age:21
// };
// let emp3:Employee;

class Point {
  private x: number = 10;
  private y: number = 20;
  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  drawPoint() {
    console.log(this.x, this.y);
  }

  getDistance(point: Point) {
    console.log(this.x, point.x);
  }

  // getX(){
  //     return this.x;
  // }

  // setX(x:number){
  //     this.x = x;
  // }

  set X(x: number) {
    this.x = x;
  }

  get X() {
    return this.x;
  }

  getY(){
      return this.y;
  }

  setY(y:number){
      this.y = y;
  }
}

let p:Point;
p = new Point();
// p.setX(30);
// p.setY(100);
// p.getX();
// p.getY();
p.X = 10; //setter
let x = p.X; //getter
//p.x = 300;
//p.y = 400;
p.drawPoint();

//Point p; //Refernce to Point class = null
//Point *p= new Point();

class Employee{
    // name:string;
    // age:number;
    constructor(private name:string,private age:number){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
}