const checkFib = arr => {
    for(let i = 2;i<arr.length;i++){
        if(arr[i-1] + arr[i-2] != arr[i]) return false;
    }
    return true;
}

const fibLength = arr => {
    let fibs = [fib], j, i;
    for(j=0;j<arr.length;j++){
        for(i=0;i<arr.length;i++){
            let copy = arr.slice();
            copy.splice(i,j);
            fibs.push(copy);
        }
    }
    fibs = fibs.map(fib => checkFib(fib) ? fib.length : 0);
    console.log(fibs);
    return Math.max(...fibs);
}

let fib = [1,2,3,5,8,13,31,34,55,89];

console.log(fibLength(fib))