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
______
// let trs=document.querySelector('tr');
//
// trs.addEventListener('mouseover', function (event) {
//     if (event.target.tagName == 'TD') {
//         event.innerHTML.background="red";
//     }
// });
//
// trs.addEventListener('mouseout', function (event) {
//     if (event.target.tagName == 'TD') {
//         event.target.style.background="linen";
//     }
// });