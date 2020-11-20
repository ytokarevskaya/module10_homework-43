let arrItem = [2, 7, 4, 4, 9, "7", 7, "4"];
for (let i = 0; i < arrItem.length; i++) {
    for(let k = 1; k < (arrItem.length); k++) {

        console.log(arrItem[i]);
        console.log(arrItem[k]);
        console.log(arrItem[i] == arrItem[k]);
    }
}