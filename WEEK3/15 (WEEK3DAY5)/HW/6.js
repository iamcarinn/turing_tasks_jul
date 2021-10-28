function a() {
    let foo = document.querySelectorAll('.foo');
    foo.forEach(e => {
        e.setAttribute("disabled", "");
    });
}

a();