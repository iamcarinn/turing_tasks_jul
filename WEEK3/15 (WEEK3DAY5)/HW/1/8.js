/*через св-во textContent*/
let elemId1 = document.querySelector('#blablabla1');

function changeText1(id,text) {
    id.textContent = text;
}

changeText1(elemId1,'приветик!');



/*через св-во innerHTML*/
let elemId2 = document.querySelector('#blablabla2');

function changeText2(id, text) {
    id.innerHTML=text;
}

changeText2(elemId2, 'как дела?')