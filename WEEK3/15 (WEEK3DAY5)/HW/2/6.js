let form=document.querySelector("form");
form.addEventListener('click', function( event) {
    if (event.target.tagName === 'INPUT') {
        event.target.style.border='6px green solid';
    }
})

form.addEventListener('focusout', function( event) {
    if (event.target.tagName === 'INPUT') {
        event.target.style.border='3px solid red';
    }
})