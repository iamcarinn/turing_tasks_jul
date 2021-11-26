let arr = [1,2,3,4,5];

// Возвращает массив всех чётных чисел
const nameFun1 = (array) => {
    return array.filter(item => item % 2 === 0)
};

//Возвращает сумму чисел массива
const nameFunc2 = (array) => {
    const sum = (firstValue, secondValue) => firstValue + secondValue;
    return array.reduce(sum);
} ;


//Создаем успешный промис :)
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(arr), 1000) });

//Обрабатываем наш промис с помощью метода then()
promise.then((array) => nameFun1()).then((array) => nameFunc2());





