let elemOl=document.querySelector('ol');
elemOl.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});