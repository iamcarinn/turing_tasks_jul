

const obj1= {
    name: 'Dmitriy',
}

obj1.secondName='tyuio';

console.log(obj1);

let sum=function (a,b) {
    return a+b;
}

console.log(sum(1,2));

let sum1=(a,b) => {return a+b};

console.log(sum1(1,2));

let arr=[1,4,5,6,7,6];

console.log(arr.length);

console.log('Чз for');
for (let i=0; i<arr.length; i=i+1) {
    console.log(arr[i]+1);
}

console.log('Чз forEach');
arr.forEach ((value) => {
    console.log(value+1);
})


