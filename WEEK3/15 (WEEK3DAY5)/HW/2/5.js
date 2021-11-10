document.querySelector('.myValidate').addEventListener('onfocusout', function () {
    if (this.value === '123') {
        alert('правильно')
    } else {
        alert('попробуй ещё раз')
    };
});


