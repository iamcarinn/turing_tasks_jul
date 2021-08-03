/*let students ['Dmitriy', 'Lena', 'Petr', 'Vasya']

console.log(students[0], students[3], students.length)

function show() {
    let testInShow=true
/!*    console.log('function called')*!/
}

show()

let arr=[1,3,5,2,3,4,5]

function arraySum(dog) {
    let sum = dog.reduce((accum, item) => accum + item,0)
    return sum
    return sum
/!*    console.log({sum})*!/
}

const result = arraySum([3,5,2,1,6,7,8])
console.log(result)


console.log(arraySum([4,3,2,6,7,8,9]))

window.alert(arraySum([8,7,45,123,78,4,124,654]))

let str='123123'

const.log({str1,str2})

str1='werwer'

str2='123123'

console.log({str1,str2})



function superOLD() {}

const actionOLD=function () {}

const actiomNEW=() => {}

superOLD()
actionOLD()
actiomNEW(param2: '234234', param2: '456566745')*/

/*

const factorial = (num) => {
    if (typeof num === 'number') {
        if (number < 1) {
            return 1
        }

        const result = number * factorial(number - 1)
        return result
    } else {
        return 'Not a number'
    }
}

*/

const factorial = (num) => {
    if (typeof num!== 'number') {
        return 'Not a number'
    }
    if (num<1) {
        return 1
    }
    return num*factorial(num-1)
}

/*
console.log(factorial(5))*/


const factorialCycle = (num) => {
    if (typeof num !== 'number') {
        return 'Not a number'
    }

    let result = 1
    for (let i = 2; i <=num; i++) {
        result=result*i
    }
    return result
}