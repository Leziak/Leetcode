const shortestToChar = function(S, C) {
    let needles = [];
    for(let i=0;i<S.length;i++){
        if(S[i] == C) needles.push(i);
    }
    return S.split('').map((el, i) => Math.min(...needles.map(el => Math.abs(el - i))))
};

console.log(shortestToChar("loveleetcode", "e"))