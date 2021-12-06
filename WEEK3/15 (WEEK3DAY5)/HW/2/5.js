let myValidate = document.querySelector('.myValidate');
myValidate.addEventListener('blur', function () {
    if (event.target.tagName === 'INPUT' && this.value === document.querySelector('div').innerHTML) {
        alert('правильно')
    } else {
        alert('попробуй ещё раз')
    };
});



