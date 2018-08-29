//S.split(' ').map... was returning an array of undefined for some reason even though the printed values were correct, so I just used a for loop.

const toGoatLatin = function(S) {
    let res = [];
    S.split(' ').forEach((word, index) => {
        if('aeiouAEIOU'.includes(word[0])) {
            word = word + 'ma';
        } else {
            let letter = word.slice(0, 1);
            word = word.slice(1, word.length) + letter + 'ma';
        }
        word = word + 'a'.repeat(index + 1);
        res.push(word);
    });
    return res.join(' ');
};

console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"))