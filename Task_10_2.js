let str = "Hello";
let strRev = "";
for (i = str.length-1; i >= 0; i--){
    strRev += str[i];
}
console.log(strRev)

// Решение верное, но можно упростить и решить без использования циклв:

let reverseString = str.split('').reverse().join('');