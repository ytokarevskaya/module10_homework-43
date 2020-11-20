let arrMap = new Map([

    ['key1', 'item1'],

    ['key2', 'item2'],

    ['key3', 'item3']

]);

for (let name of arrMap.keys()) {

    console.log(name);

}
for (let [key, item] of arrMap) {
    console.log(`${key}-${item}`);
}