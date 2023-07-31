module.exports = function reverse (number) {
    let reversedNumber = Math.abs(number).toString().split('').reverse().join('');
    return Number(reversedNumber);
}
