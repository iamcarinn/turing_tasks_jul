/*
console.log(document);

console.log({test:123, qwe: '345'});

console.log(document.head);
console.log(document.body);

console.log(document.head.childNodes);
console.log(document.body.childNodes);

console.log(document.body.hasChildNodes('div'));

console.log(document.getElementById('our_element'));
console.log(document.querySelector('div'));
console.log(document.querySelectorAll('div'));
*/

/*const result = document.querySelectorAll('div');

result.forEach(elem => console.log(elem.innerText));

const newElement = document.createElement('div');

result[0].append(newElement);

newElement.innerText = 'new js added text';
newElement.style.color = 'green';

console.log(result[0].classList);

result[0].classList.add('js_big_font');
/!*
result[0].classList.remove('test');
result[0].classList.toggle('test');
console.log(result[0].classList.contains('test'));
*!/

console.log(result[0].style);
console.log(result[0].style.color);
result[0].style.margin='50px'*/


const result = document.querySelectorAll('div');


const handleClick1 = () => {
    const newElement = document.createElement('div');

    newElement.innerText = 'new js added text';
    newElement.style.color = 'green';

    result[0].after(newElement);
}

const handleClick2 = () => {
  result[0].classList.add('js_big_font');
}

const handleClick3 = () => {
    result[0].style.margin = '50px';
}



/*2 СПОСОБ. Добавление js через js*/
const button3 = document.querySelector('#our_button');
button3.onclick = handleClick2

/*3 СПОСОБ.*/
const button4 = document.querySelector('#our_button4');
button4.addEventListener('dblclick',handleClick3)