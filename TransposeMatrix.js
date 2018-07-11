const transpose = function(A) {
    let arr = [], sub_arr = [], i, j;
    for(i=0;i<A[0].length;i++){
        for(j=0;j<A.length;j++){
            sub_arr.push(A[j][i])
        }
        arr.push(sub_arr);
        sub_arr = [];
    }
    return arr;
};

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))