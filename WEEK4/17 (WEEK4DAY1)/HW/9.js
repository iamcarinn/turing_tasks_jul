let arr1 = [1,2,3,4,5];
let arr2 = []
let sum = 0;
let promise1 = new Promise(function (resolve) {
    setTimeout( () => {
        for (let i = 0; i < arr1.length-1; i++) {
            if ((arr1[i] % 2) === 0) {
                arr2.push(arr1[i])
            }
        }
        resolve(`Массив четных чисел [${arr2}]`);
    }, 1000)
});

const promise2 = promise1.then(function () {
    for (let i = 0; i < arr2.length-1; i++) {
        sum += arr2[i]
    }
    return sum;
});

