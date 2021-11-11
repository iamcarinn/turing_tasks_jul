let tds=document.getElementsByTagName('td');
for (let i=0; i<tds.length; i++) {
    tds[i].addEventListener('click',square);
}

function square() {
    this.innerHTML = this.innerHTML*this.innerHTML;
}