let n = 10;

var createCounter = function (n){
    return function(){
        let number = (n, n + 1, n + 2)
        return number
    }
    
}

console.log(createCounter)