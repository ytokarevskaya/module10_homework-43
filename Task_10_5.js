let arrItem = [2, 7, 4, 4, 9, "7", 7, "4"];
for (let i = 0; i < arrItem.length; i++) {
    for(let k = 1; k < (arrItem.length); k++) {

        console.log(arrItem[i]);
        console.log(arrItem[k]);
        console.log(arrItem[i] == arrItem[k]);
    }
}

// Решение неверное. По заданию нужно было определить, содержатся в массиве все одинаковые элементы или нет, и один раз вывести true/false как результат для целого массива. В текущем варианте элементы массива сравниваются между собой, по выводу невозможно понять, одинаковые элементы в массиве или нет, поэтому поставленная задача не решена.
// Ниже написала верное решение

let isEqual = true;
for (let i = 1; i < arrItem.length; i++) {
    if (arrItem[0] !== arrItem[i]) {
        isEqual = false;
        break;
    }
}

console.log(isEqual);