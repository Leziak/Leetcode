const largeGroupPositions = function(S) {
    let count = 1, arr = [], first_index = 0, last_index,  temp = S[0];
    for(let i=1;i<S.length;i++){
        if(S[i] == temp) {
            count++;
            last_index = i;
            if(count > 2 && i == S.length - 1) {
                arr.push([first_index, last_index]);
            }
        } else {
            if(count > 2) {
                arr.push([first_index, last_index]);
            }
            count = 1;
            temp = S[i];
            first_index = i;
        }
    }
    return arr;
};

console.log(largeGroupPositions("abcdddeeeeaabbbcd"))