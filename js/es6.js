import Person, {data,welcome} from './person.js'

// Variable Declaration: Scoping
var x=5;

{
    var y=60;
}

function abc(){
    var i=50;//function scoped
    // c=20;
}
//es6
 let a=5;// block scoped
for(let i=0;i<5;i++){
    let b=60;
}
//console.log(i);
const DENOMINATOR = 5;
//ARROW FUNCTIONS
let calc = function(y){
    let x=25;
    return x*y;
}
let calc2 = (y) => {
    let x=25;
    return x*y;
}
console.log(calc2(52))
//classes: constructor functions (sugar coated)
var object1={
    fname:'Gedi',
    who(){
        console.log('I\'m who');
    }
}

object1.who();

class Student{
    constructor(f, a){
        this.fname=f;
        this.age=a;
    }
    who(){
        console.log(this.fname);
    }
}
//instantiation
var std1= new Student('Gedi',52);
std1.who();
//Inheritance


class Lecturer extends Person{
    constructor(fn,mn,ln,faculty,age){
        super(fn,mn,ln);
        this.faculty=faculty;
        this.age=age;
    }
}

//Module in js: every class in its own file
let p=new Person('Hinda','Ismail','Ali');
console.log(p.fname);
