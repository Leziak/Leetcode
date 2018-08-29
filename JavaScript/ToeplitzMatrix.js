// I felt like such a tool when I saw that the best solution was ~4 lines of code. Well, at least it works.

const isToeplitzMatrix = function(matrix) {
    let arrs = [], arr_index = 0, start_index = 0, i, j;

    if(matrix.length < 2) return true

    for(let count=0;count<matrix.length*matrix[0].length;count++){
        for (let row of matrix) arrs.push([])
    }

    for(i = matrix.length - 1; i > -1 ; i--) {
        arr_index = start_index;
        for(j = 0; j < matrix[i].length; j++) {
            arrs[arr_index].push(matrix[i][j]);
            arr_index++;
        }
        start_index++;
    }

    return arrs.every(arr => {
        return arr.every((el, idx) => {
            return el == arr[0];
        })
    })
};

console.log(isToeplitzMatrix([1,2,3,4], [5,1,2,3], [9,5,1,2]))