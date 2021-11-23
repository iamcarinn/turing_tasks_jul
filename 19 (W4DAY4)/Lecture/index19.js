const firstValue = localStorage.getItem('firstValue');
const person = localStorage.getItem('person');

//Как вернуть из строки объект обратно?
const personObj = JSON.parse(person);
console.log(personObj);

/////////////////////////////////////////
console.log({firstValue})
let  test = 123;
test += 234;

console.log({test})

localStorage.setItem('firstValue', test);
////////////////////////////////////////
//А что будет с объектом?
const obj = {
    id: 12,
    name: 'Petr'
}

/*localStorage.setItem('person', obj);*/
//сохранил person - [object Object]

///////////////////////////////////////
//Тогда надо объект перегнать предварительно в строку
localStorage.setItem('person', JSON.stringify(obj));
//сохранил person - {"id":12,"name":"Petr"}

///////////////////////////////////////
//Метод, удаляющий ключ и значение из localStorage
localStorage.removeItem('person');

///////////////////////////////////////
//Метод, очищающий весь localStorage
localStorage.clear();


//////////////////////////////////////////
/*sessionStorage имеет те же методы,
НО сущ-ет в рамках текущей вкладки браузера

как только закрываем вкладку, все сохраненные данные теряются*/



