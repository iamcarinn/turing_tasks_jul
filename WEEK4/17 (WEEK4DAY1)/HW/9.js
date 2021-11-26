let arr1 = [1,2,3,4,5];
let arr2 = [];

// Возвращает массив всех чётных чисел
const nameFun1 = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        if ((array[i] % 2) === 0) {
            arr2.push(array[i])
        }
    }
    console.log(arr2);
    return arr2;
};

//Возвращает сумму чисел массива
const nameFunc2 = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length-1; i++) {
        sum += array[i]
    }
    console.log(sum);
    return sum;
} ;


//Создаем успешный промис :)
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(arr1), 1000) });

//Обрабатываем наш промис с помощью метода then()

promise.then((arr1) => nameFun1()).then((arr2) => nameFunc2());

console.log(promise);




