const reverseVowels = function(s) {
    s = s.split('')
    let vowels = [];
    let aeiou = 'aeiouAEIOU';
    for(let i = s.length - 1;i>=0;i--) if(aeiou.includes(s[i])) vowels.push(s[i])
    for(let i = 0;i <= s.length;i++) if(aeiou.includes(s[i])) s[i] = vowels.shift()
    return s.join('')
};

console.log('leetcode');