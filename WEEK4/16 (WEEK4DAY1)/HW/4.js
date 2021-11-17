class Editor {
    constructor(string) {
        this.string = string
    }

    bigLetters() {
        console.log(this.string.toUpperCase())
    }

    smallLetters() {
        console.log(this.string.toLowerCase());
    }

    symbols() {
        let  puk = this.string.split(' ');
        let puk1=puk.join('');
        console.log('Кол-во символов в строке без пробелов:', puk1.length);
    }

}

const myString = new Editor('Много букв');
myString.bigLetters();
myString.smallLetters();
myString.symbols();
