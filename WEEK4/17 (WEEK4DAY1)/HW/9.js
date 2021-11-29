let arr = [1,2,3,4,5];

// Возвращает массив всех чётных чисел
const nameFun1 = (array) => {
    return array.filter(item => item % 2 === 0)
};

//Возвращает сумму чисел массива
const nameFunc2 = (array) => {
    return array.reduce((a,b)=>a+b, 0)
};

//Создаем успешный промис :)
let promise = new Promise((resolve, reject) =>
    setTimeout(() => resolve(arr), 1000));

//Обрабатываем наш промис с помощью метода then()
promise.then((arr1) => nameFun1(arr1)).then((arr2) => nameFunc2(arr2)).then(arr3 => console.log(arr3));