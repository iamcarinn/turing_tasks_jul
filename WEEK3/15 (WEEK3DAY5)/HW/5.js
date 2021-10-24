function showValue() {
    let e = document.getElementById("filename");
    e.value = "foo";
    alert(e.value);
}

showValue();