const lengthOfLastWord = function(s) {

    if(!s.match(/[a-zA-Z]/)) return 0;
    let arr = s.split(/\s+/g).filter(el=>el);
    return arr[arr.length-1].length

};

console.log('Hello World')