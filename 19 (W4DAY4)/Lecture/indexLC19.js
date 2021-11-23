//Генерация случайных чисел
//Объект Math и его методы

//random генератор случаных чисел от 0 до 1
// и много знаков после запятой
/*console.log(Math.random())*/
/*
for (let i = 0; i < 15; i++) {
    console.log(i, ':', Math.random())
}*/
//Методы округления
/*
const num = 0.51

console.log(Math.floor(num)) //до ближайшего целого в меньшую сторону
console.log(Math.ceil(num)) //до ближайшего целого в большую сторону
console.log(Math.round(num)) //до ближайшего целого по правилам округления (если дробная часть <0,5, то в меньшую сторону и наоборот)
*/

//Генерируем рандомное целое число
/*function generateNumber(num) {
    if (num <= 0) return 0
    return Math.round(num * Math.random())
}

for (let i = 0; i < 20; i++) {
    console.log(i, ':', generateNumber(i))
}*/
//////////////////////////////////////////
//Генерирует число в заданном диапазоне (от 3 до 10)
/*const randomIntervalGenerator = (min, max) => {
    return Math.round((max - min) * Math.random() + min)
}

for (let i = 0; i < 20; i++) {
    console.log(i, ':', randomIntervalGenerator(3, 10))
}*/

/////////////////////////////////////////
//Если в функции несколько return, то срабаотывает только первый,
//а остальные игнорируются

//Т.е. функция заканчивается тогда, когда срабатывает первый return

//!Весь код функции после сработавшего ретерна не срабатывает
//Зачем нужно несколько return?

/*const testOneReturn = (test) => {
    if (test > 30) {
        return 1
    }
    if (test > 20) {
        return 2
    }
    if (test > 10) {
        return 3
    }
    console.log('123123123') //если сработал return выше, то консоль не выводится
    return 6
}*/
//Когда вызываем функцию, то записываем ее значение в переменную
//А в переменную может записаться только одно значение
/*const result =testOneReturn(5)
console.log({result})*/
////////////////////////////////////////
//Функция-генератор
//yield аналог return
//yield мб вызвана несколько раз, но не бесконечное кол-во

/*
function* generateNumber(maxNum) {
    for (let i = 1; i <= maxNum; i++) {
        yield i
    }
}
const generator = generateNumber(12);
console.log({generator});
console.log('1:', generator.next());
console.log('2:', generator.next());
console.log('3:', generator.next());
console.log('4:', generator.next());
console.log('5:', generator.next());
console.log('6:', generator.next());
console.log('7:', generator.next());
console.log('8:', generator.next());
console.log('9:', generator.next());
console.log('10:', generator.next());
console.log('11:', generator.next());
console.log('12:', generator.next());
console.log('13:', generator.next());
console.log('14:', generator.next());*/
//done: true/false говорит закончилось выполнение функции или нет

//Благодаря функции-генератору можем возвращать разные значения каждый вызов


/////////////////////////////////



//Возможность не просто вызывать метод next,
//а возможность передавать в этот next какое-то значение


function* someGenerator () {
    const value = yield 42 //здесь в первый раз останавливается
    console.log({value})
    return 'End'
}

const generator = someGenerator()
console.log('First call:', generator.next());
console.log('Second call:', generator.next('I am string passed to generator'));
//второй раз строку с yield заменяем на этот текст
//т.е. это будет value
console.log('Third call:', generator.next('I am string passed to generator'));
