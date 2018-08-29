const maxProduct = function(words) {
    let arr = [];
    for(let i=0;i<words.length;i++) {
        let word = words[i]
        for(let j=0;j<words.length;j++) {
            if(words[j].split('').every(ltr => !word.includes(ltr))) {
                arr.push(word.length * words[j].length)
            }
        }
    }
    if(!arr.length) return 0
    return Math.max(...arr)
};

console.log(maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]))