document.querySelector('.myValidate').addEventListener('blur', function () {
    if (this.value === document.querySelector('div').innerHTML) {
        alert('правильно')
    } else {
        alert('попробуй ещё раз')
    };
});


