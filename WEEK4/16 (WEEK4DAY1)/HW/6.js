class DomHelper {
    constructor(abcd) {
        this.abcd = abcd;
    }

    changeText () {
        return this.abcd.textContent = 'Пока';
    };

    changeHTML() {
        return this.abcd.innerHTML = 'Как дела'
    }

    addChildNode() {
        const newDiv = document.createElement('div');
        newDiv.innerText='Я потомок';
        return this.abcd.append(newDiv);
    }

    addLineStart() {
        const newLineStart = document.createElement('div');
        newLineStart.innerText = 'Я узел, добавленый в начало узла'
        return this.abcd.prepend(newLineStart);
    }

    addLineEnd() {
        const newLineEnd = document.createElement('div');
        newLineEnd.innerText = 'Я узел, добавленый в конец узла'
        return this.abcd.append(newLineEnd);
    }

    changeAttributes() {
        let exampleImg = document.querySelector('img');
        return exampleImg.setAttribute('src', 'https://i.pinimg.com/564x/1c/62/92/1c6292b7d8e5fe3808d0e36a62359b16.jpg');
    }

    removal() {
        return this.abcd.remove();
    }

    getChildSelector() {
        return alert(this.abcd.children);
    }
}

let myElem = new DomHelper(document.querySelector(`#hi`));
myElem.changeText();
myElem.changeHTML();
myElem.addChildNode();
myElem.addLineStart();
myElem.addLineEnd();
myElem.changeAttributes();
/*myElem.removal()*/
myElem.getChildSelector();
