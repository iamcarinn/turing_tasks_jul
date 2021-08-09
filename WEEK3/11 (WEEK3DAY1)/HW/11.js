let password1=prompt('Введите пароль');
let password2=prompt('Повторите пароль');


if (password1==='131313'&&password1===password2) {
    alert('Правильно!');
} else {
    if (password1==='131313'||password2==='131313') {
        alert('Пароли не совпадают');
    } else {
        alert('Неправильно введен пароль');
    }
}
