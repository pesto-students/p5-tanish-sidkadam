//Exercise4.1:Implement a function namedgetNumberwhich generatesa random number. If randomNumberis divisible by 5 
//it will reject the promise else it will resolve the promise. Let’s also keep thepromise resolution/rejection time as a variable


//creating custom promise states 
const Promisestates = {
   PENDING:"PENDING",             //states is pending when there is not resolution or the program is still running 
   RESOLVED:"RESOLVED",
   REJECTED:"REJECTED"
}

//creating custome promise class 
class CustomPromise {
    constructor(fn) {
        this.Promisestates = Promisestates.PENDING;
        this.resolver = this.resolver.bind(this);
        this.rejector = this.rejector.bind(this);
        this.thenfn = null ;
        this.catchfn = null ; 
        fn(this.resolver, this.rejector); 
    }
//custom resolve function 
    resolver(resolvedData) {
        if (this.Promisestates === Promisestates.PENDING){
            this.thenfn && this.thenfn(resolvedData);
        } 
        this.Promisestates = Promisestates.RESOLVED;
    }
//custom reject function 
    rejector(rejectedData) {
        if (this.Promisestates === Promisestates.PENDING){
            this.catchfn && this.catchfn(rejectedData);
        }
        this.Promisestates = Promisestates.REJECTED; 
    }    
}


const getNumber = () => 
    new CustomPromise ((res,rej) => {
        const randomNumber = parseInt(Math.random()*100, 10);
        setTimeout(() => {
            if(randomNumber % 5 === 0) {
                rej("Rejected with num: ${randomNumber}");
            }
            res("Resolved with num: ${randomNumber}");
        }, randomNumber * 10);
    });

    getNumeber(); 













