const myDiv = document.querySelector('div');

myDiv.className = 'newClass';
myDiv.classList.add('addNewNewClass');
console.log(myDiv.classList);

myDiv.style.background = 'lightpink'
myDiv.style.width = '60px';

myDiv.id = 'newId';
console.log(myDiv.id);
