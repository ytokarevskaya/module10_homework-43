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