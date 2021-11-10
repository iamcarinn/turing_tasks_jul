let tds=document.getElementsByTagName('td');
for (let i=0; i<tds.length; i++) {
    tds[i].addEventListener('mouseover',cellColor);
    tds[i].addEventListener('mouseout',returnColor);
}
function cellColor() {
    this.style.background="red";
}

function returnColor() {
    this.style.background="linen";
}
