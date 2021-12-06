let arr = [1,2,3,4,5];

const nameFun1 = (array) => array.filter(item => item % 2 === 0);
const nameFunc2 = (array) => array.reduce((a,b)=>a+b, 0);

const f = async () => await new Promise((resolve) =>
    setTimeout(() => resolve(arr), 1000));

f().then((arr1) => nameFun1(arr1)).then((arr2) => nameFunc2(arr2)).then(arr3 => console.log(arr3));