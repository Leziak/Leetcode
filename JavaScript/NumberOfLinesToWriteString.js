const numberOfLines = function(widths, S) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz', obj = {}, count = 0, lines = 0;
    for(let i=0;i<alphabet.length;i++){
        obj[alphabet[i]] = widths[i]
    }
    for(let el of S){
        if(count+obj[el]>100){
            lines++;
            count = 0;
        }
        count+= obj[el]
        if(count>100){
            lines++
            count-=100;
        }
    }
    if(count>0) lines++
    return [lines, count]
};

console.log(numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "bbbcccdddaaa"))