window.onload = function () {
    window.setInterval(function () {
        let now = new Date();

        let tomorrow = new Date (now.getFullYear(), now.getMonth(), now.getDate()+1);
        let ms = tomorrow - now;

        let seconds = Math.round(ms/1000);
        document.getElementById('seconds').innerHTML = seconds + ' секунд';

    }, 1000)
}
