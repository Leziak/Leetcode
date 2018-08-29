// const countNumbersWithUniqueDigits = function(n) {
//     if(n==0) return 1;
//     let end = Number('1' + '0'.repeat(n));
//     let arr = [];
//     for(let i=0;i<end;i++){
//         let obj = {};
//         for(let digit of String(i)){
//             if(!obj[digit]) obj[digit] = 1;
//             else obj[digit]++;
//         }
//         if(!(Object.values(obj).some(el=>el>1))) arr.push(i);
//         obj = {};
//     }
//     console.log(arr);
//     return arr.length;
// };

const countNumbersWithUniqueDigits = (n) => {
    let count = 9;
    let sum = 9;
    if(!n) return 1
    for(let i=1;i<n;i++){
        sum*=count;
        count--;
    }
    return sum + 10;
}

console.log(countNumbersWithUniqueDigits(2))