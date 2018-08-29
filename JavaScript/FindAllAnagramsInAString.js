//Didn't pass the last complexity test, but I will come up with something later.

const findAnagrams = function(s, p) {
    let arr = s.split('');
    let res = []
    for(let i=0;i<=s.length-p.length;i++){
        if(arr.slice(i, p.length+i).sort((a,b)=>a.charCodeAt()-b.charCodeAt()).join('')
            == p.split('').sort((a,b)=>a.charCodeAt()-b.charCodeAt()).join('')) {
            res.push(i)
        }
    }
    return res;
};

console.log(findAnagrams('wadadwadsadasdwadsadwasdadwad', 'awd'))