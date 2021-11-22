/*const button = document.querySelector('button');

//Добавляем событие - АССИНХРОННЫЙ CALLBACK (не знаем, когда он вызовется (когда кликнут))
button.addEventListener('click', () => {
    for (let i=0; i<1000000000; i++) {
        const someValue = i + 1;
        const obj = { someValue };
    }
    alert('I am alert after loop');
})
//Показывает alert с задержкой, т.к. сначала делает долгий цикл

//Ещё callback,  которым сталкивались - СИНХРОННЫЙ CALLBACK
const someArr = ['Hello', 'there', 'general', 'Kenobi'];
someArr.forEach(word => console.log(word))*/


//////////////////////////////////////////////////////////////////////////
/*const foo = (b) => {
    const a = 12;
    return a + b;
}
/!*Как только фун-ция foo выполнилась,
её контекст выполения удаляется из стека*!/



/!*При вызове фун-ции bar создается контекст выполнения,
содержащий аргументы фун-ции bar (x) и её локальные переменные (someVar)*!/
const bar = (x) => {
    const someVar = 5;
    /!*При выхове фун-ции foo создается второй контекст (ПОМЕЩАЕТСЯ В СТЭК ВЫЗОВОВ ВЫШЕ ПЕРВОГО),
    содержащий аргументы фун-ции foo (b) и её локальные переменные (a)*!/
    return foo(x + someVar);
}

//Запускаем цикл
console.log(bar(10));*/
/////////////////////////////////////////////////////
/*ОТЛОЖЕННЫЙ ВЫЗОВ ФУНКЦИИ

Добавить в очередь произвольный код
ч/з функции JS (setTimeout(() => действие, время в мс (1с=1000мс)) или setInterval()), которые позволяют вызвать
фун-цию один раз ч/з определ. интервал времени*/
/*console.log('befor timeout console');
setTimeout(() => console.log('set timeout function called'), 3000);
console.log('after timeout console');*/
//ассинхронное выполнение функции

/////////////////////LC//////////////////////////
/*ПРОМИСЫ - стиль организации ассинхроннного кода,
кот. исп-ся в современном вебимпиай
ИСПОЛНИТЕЛЬ - функция, кот. передается в промис
может разрешать ассинхронный код либо успешно, либо неуспешно

СИНТАКСИС: new Promise((resolve, reject) => {...},
где resolve, reject - это методы*/
/*    let isError = false;

const promise = new Promise((resolve, reject) => {
    if (isError) {
        reject({error: 'New error appeared'}); //callback, если работа завершилась успешно
        //можем в него передать параметры ПР. текст ошибки
    } else {
        resolve( {id: '123'}); //callback, если работа завершилась успешно
        //можем в него передать параметры ПР. данные, которые вернулись с сервера
    }
})*/
/////////////////////////////////////////////////
//Пример короткого промиса
/*const fulfilledPromise = new Promise(resolve => resolve(42))
console.log('fulfilledPromise', fulfilledPromise)*/

//////////////////////////////
 //ДОБАВИМ АССИОНХРОННОСТИ (добавим setTimeout() в промис)

/*const pendingPromise = new Promise(
    resolve => setTimeout(() => resolve(42),5000)
)
console.log('pendingPromise',pendingPromise);*/

//////////////////////////////
//Раскрытие промисов
/*fulfilledPromise
    .then(result => {
        console.log('first then')
        return result + 10
    })
    .finally(() => console.log('Finally'))
    .then(result => result > 50 ? console.log('Greater then 50', result): console.log('Less that 50'))*/
/*
async await*/

//////////////////////////////
//Что будет, если применить к промису с ошибкой
/*const rejectedPromise = new Promise((resolve, reject) =>
    setTimeout(() => reject('Error 404'), 3000)
)
console.log('rejectedPromise', rejectedPromise);

rejectedPromise
    .then(result => console.log('Result:', result)) //для ситуаций, когда промис сработал успешно
    .then(null, error => console.log('Then error handing', error))
    .catch(error => console.log('Catch error handing', error)) //catch предназначен для отлова ошибок
    //результат catch не выводится, т.к. ошибка уже отловлена предыдущим then
    .finally(() => console.log('finally'))*/
//Те методы, которые не работают с ошибкой, не вызываются

//then лучше использовать для успешного промиса,
// а catch, для неуспешного промиса (ошибки)
//finally срабатывает всегда, в независимости, был успех или не успех




/////////////////////////////////////////////////////////
//запись через стрелочные фун-ции
/*const someFunction = async () => {*/
//или такая запись
async function someFunction() {
    const promiseResult = await new Promise(resolve => setTimeout(
        () => resolve('Hello, World'), 3000))
    return promiseResult;
}

const functionCallResult = someFunction();
console.log('functionCallResult',functionCallResult)