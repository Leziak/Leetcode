const mostCommonWord = function(paragraph, banned) {
    let arr = paragraph.toLowerCase().split(/[\s,\.\!\?'";]/).filter(el => el && !banned.includes(el));
    let obj = {};
    for(let word of arr){
        if(!obj[word]) obj[word] = 1
        else obj[word]++
    }
    return Object.keys(obj).sort((a,b)=>obj[b] - obj[a])[0];
};

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ['ball', 'hit']))