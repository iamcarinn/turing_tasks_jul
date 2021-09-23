const obj1={
    name:'Karina',
    alt: 23,
};

const obj2={}

for (let key in obj1) {
    obj2[key]=obj1[key];
}

obj2.alt=32,

console.log({obj1});
console.log({obj2});