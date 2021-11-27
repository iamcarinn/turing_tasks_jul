const myElems = document.querySelectorAll('li');

for (let i = 0; i < myElems.length; i++) {
    if (i % 2 !== 0) {
        myElems[i].style.backgroundColor = 'grey';
        myElems[i].style.fontWeight = 'bold';
    }
}