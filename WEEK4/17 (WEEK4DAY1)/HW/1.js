

window.onload = function () {     //Функция, кот. будет открываться при загрузке страницы
    window.setInterval(function ()  {          //чтобы фун-ция вызывалась регулярно
        let date = new Date();

        //создаем 3 переменные, кот. хранят часы, минуты и секунды
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        //делаем нолик перед цифрами
        if (hours < 10) hours = '0' + hours;
        if (minutes < 10) minutes = '0' + minutes;
        if (seconds < 10) seconds = '0' + seconds;

        //вызываем переменные
        let clock = hours + ':' + minutes + ':' + seconds;
        document.getElementById('clock').innerHTML = clock;
        }, 1000);
};