function countdownTimer() {
    let seconds = document.querySelector('input').value;
    let start = new Date()
    let future = new Date (start.getTime()+seconds*1000);
    window.setInterval(function () {
        let seconds = document.querySelector('input').value;
        let now = new Date();
        let sec = Math.round(ms/1000);
        if (sec < 0) {
            return
        }
        document.getElementById('timer').innerText = sec;
        }, 1000)
}

