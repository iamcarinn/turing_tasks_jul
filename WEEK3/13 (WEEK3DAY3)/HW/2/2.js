let obg1 = {
    a: 2,
    b: 'Coding',
}

/*Метод Object.assign*/

let clone1 = Object.assign({}, obg1);

console.log(clone1);

/*Spread-оператор*/

let clone2 = {...obg1}

console.log(clone2);
