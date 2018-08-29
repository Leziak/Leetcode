const generate = function(numRows) {
    let arr = [];
    let prev = [1,1];
    let next = [];
    for(let i = 0;i < numRows;i++){
        arr.push(prev)
        for(let j = 0;j < prev.length;j++){
            if(j==0) next.push(1)
            else if(j==prev.length - 1) next.push(1)
            else next.push(prev[j-1] + prev[j])
        }
        arr.push(next);
        prev = next;
    }
    return arr;
};

console.log(generate(3))