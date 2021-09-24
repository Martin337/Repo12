// Only change code below this line
function sumFibonacci(num){

    var prevFib = 0;
    var currFib = 1;
    var sum = 0;
    while(currFib < num){
        if(currFib%2 !==0){
            sum = sum + currFib;
        }
        currFib = currFib + prevFib;
        prevFib = currFib - prevFib;
    }

    return sum;

}

// Only change code above this line

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;