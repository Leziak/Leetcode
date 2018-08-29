const nextGreatestLetter = function(letters, target) {
    let greater = []
    letters = letters.map(ltr => ltr.charCodeAt());
    target = target.charCodeAt();
    for(let ltr of letters){
        if(ltr > target) greater.push(ltr)
    }
    if(!greater.length) return String.fromCharCode(Math.min(...letters))
    return String.fromCharCode(Math.min(...greater))
};

console.log(nextGreatestLetter(["c", "f", "j"], "k"));

