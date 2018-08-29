const toLowerCase = function(str) {
    let res = "";
    for(let ltr of str){
        if(ltr.charCodeAt() < 91 && ltr.charCodeAt() > 64) res+=String.fromCharCode(ltr.charCodeAt() + 32);
        else res+=ltr

    }
    return res;
};

console.log(toLowerCase('Al^$phaBEt'))