

// 4.2 Create an object calledTeacherderived from thePersonclass, and implement a method calledteachwhich receives a 
//string called subject, andprints out:[teacher's name]is now teaching[subject]

var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}


var Teacher = function() {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject)
{
    console.log(this.name + " is now teaching " + subject);
}

var him = new Teacher();

him.initialize("Adam",45);
him.teach("Inheritance");











// 4.3 Implement Fibonacci Series with Iterators

function fibonacci(number){
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
}