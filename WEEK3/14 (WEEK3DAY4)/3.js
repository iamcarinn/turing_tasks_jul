let arr1=['Маша','Петя','Костя','Вася','Карина'];
let arr2=[1,2,3,4,5];
let arr3=['Екатеринбург','Москва','Санкт-Петребург','Брянск','Серпухов'];

let map = new Map();

map.set(arr1,'первый массив')
    .set(arr2,'второй массив')
    .set(arr3,'третий массив');

console.log(map.get(arr1));
console.log(map.get(arr2));
console.log(map.get(arr3));