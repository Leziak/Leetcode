const addBinary = function(a, b) {
    let bigger = a.length >= b.length ? a.split('').reverse().join('') : b.split('').reverse().join('');
    let smaller = a.length < b.length ? a.split('').reverse().join('') : b.split('').reverse().join('');
    for(let i = 0;i < bigger.length;i++) smaller += '0'

    let result = '';
    let carry = false;
    for(let i = 0; i < bigger.length; i++) {
        if((bigger[i] != smaller[i]) && !carry) result += '1'
        else if ((bigger[i] != smaller[i]) && carry) result += '0'
        else if ((bigger[i] == 1 && smaller[i] == 1) && carry) result += '1'
        else if ((bigger[i] == 0 && smaller[i] == 0) && !carry) result+= '0'
        else if ((bigger[i] == 0 && smaller[i] == 0) && carry) {
            result+= '1'
            carry = !carry
        }
        else {
            result+= '0'
            carry = !carry
        }
    }
    if(carry) result+='1'
    return result.split('').reverse('').join('')
}

console.log(addBinary('1000', '111'))
//console.log(addBinary('10100', '111111111'))
