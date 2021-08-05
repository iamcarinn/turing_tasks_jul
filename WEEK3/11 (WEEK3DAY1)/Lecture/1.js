let one;
one=123;

let two=234;

let one_string='1';
let two_string='2';

/*console.log(one,two)

console.log(one+two, one_string+two_string)*/

let isExist = one>two
/*let isExist=false*/

/*console.log({isExist})*/

let result1=null
let result2=undefined

let result_empty

/*console.log({result_empty})*/

let obj;

let house={
    address: 'Moscow, Red Square, 1',
    floors:5,
    business: true,
    sub: {
        id: 1,
        body: {
            id: 4
        }
    }
}

let car={
    seats: 5,
    wheels: 4,
    name:'Lada'
}

/*
console.log(house)
console.log(house.address,house.business)
console.log(house.sub.body.id)*/


let resultCondition1=null==undefined
let resultCondition2='123'>='123'

console.log({resultCondition1, resultCondition2})


if(20>30) {
    console.log('IMPOSSIBLE!!!')
} else {
    console.log('RIGHT!!!')
}

console.log('12345')

let number=10

while (number>0) {
    console.log({number})
    number=number-1
}

console.log('12345')
number=5
do{
    console.log({number})
    number=number-1
} while (number>0)

for (let i=3; i>0; i--) {
    console.log({i})
    if (i<3) {
        break;
    }
}


let condition='Dmitriy'

switch (condition) {
    case "Anna":
        console.log('My name is Anna');
        break;
    case "Dmitriy":
        console.log('My name is Dmitriy');
        break;
    case "Roman":
        console.log('My name is Roman');
        break;
    default:
        console.log('NO name found');
        break;
}