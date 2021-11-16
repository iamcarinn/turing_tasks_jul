class DomHelper {
    constructor(abcd) {
        this.abcd = abcd;
    }

    changeText: () => this.abcd.textContent='Пока';
}

let myElem = new DomHelper(document.querySelector('#hi'));
myElem.changeText()