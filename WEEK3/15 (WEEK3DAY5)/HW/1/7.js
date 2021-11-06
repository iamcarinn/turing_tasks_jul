let elemDiv = document.querySelector('div');
const newSpan1 = document.createElement('span');
const newSpan2 = document.createElement('span');
elemDiv.append(newSpan1, newSpan2);
newSpan1.innerText='текст span1 ';
newSpan2.innerText='текст span2 ';
