//3.1 solution
let cache = {};
const memoizedAdd = () => {
return (n , m) => {
if (n+m in cache) {
console.log('Fetching from cache');
return cache[n+m];
}
else {
console.log('Calculating result');
let result = n + m ;
cache[n + m] = result;
return result;
}
}
}
// returned function from memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(5,6)); // calculated
console.log(newAdd(5,6)); // cached


//3.2 solution

//call() :
//Example:-
Let obj = {num:2};
Function add(a,b){
Return this.num= a+b;
}
console.log(add.call(obj, 3,2));
//Apply():
//Example:-
Let obj = {num:2};
Function add(a,b){
Return this.num= a+b;
}
console.log(apply(obj,[3,2]))
//Bind():
//Example:-
Let obj = {num:2};
Function add(a,b){
Return this.num= a+b;
}
Const func = add.bind(obj, 3,5);
func();

//3.4 solution

function createStack(){
let list = [];
function push(value){
list.push(value);
console.log(list);
}
function pop(){
list.pop();
console.log(list);
}
return { push, pop
};
}
const stack = new createStack;
stack.push(10); //pushing 10 to array list<< [10]
stack.push(5); //pushing 5 to array list<< [10,5]
stack.pop(); //poping 5 from the array list<<[10]
stack.list ; //undefined
