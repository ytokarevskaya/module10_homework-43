let arrItem = [ 1, 4, 6, "b", 9, 12, "null", 17, 23, null, 0, "0"];

for (let i = 0; i<arrItem.length; i++) {
    if (arrItem[i] === null || isNaN(+arrItem[i])) {
        console.log(arrItem[i] + " is not a number");
        continue;
    }

    if (arrItem[i] == 0) {
        console.log(arrItem[i] + " равно 0");
        continue;
    }

    if (arrItem[i] % 2 == 0)
        console.log("Четное число" + " " + arrItem[i]);
    else
        console.log("Нечетное число" + " " + arrItem[i]);
}

// Решение неверное. По заданию нужно было считать и выводить именно сумму четных\нечетных\нулей. Чтобы посчитать сумму, нужно воспользоваться переменными-счетчиками. Ниже написала верный вариант

let even = 0, odd = 0, zero = 0;

for (let i = 0; i < arrItem.length; i++) {
    if (typeof arrItem[i] === 'number' && !isNaN(arrItem[i])) {
        if (arrItem[i] === 0){
            zero++;
        } else if(arrItem[i] % 2 === 0 ){
            even++;
        } else odd++;
    }
}

console.log ("Четных - " + even);
console.log("Нечетных - " + odd);
console.log("Нулей - " +zero);