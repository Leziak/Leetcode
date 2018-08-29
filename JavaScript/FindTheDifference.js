const findTheDifference = function(s, t) {
    let obj1 = {}, obj2 = {};
    for(let el of t){
        if(!obj1[el]) obj1[el] = 1;
        else obj1[el]++
    }
    for(let el of s){
        if(!obj2[el]) obj2[el] = 1;
        else obj2[el]++
    }
    for(let el in obj1){
        if(obj2[el] != obj1[el]) return el
    }
};

console.log(findTheDifference('aabcdefgh', 'abcdefgh'))