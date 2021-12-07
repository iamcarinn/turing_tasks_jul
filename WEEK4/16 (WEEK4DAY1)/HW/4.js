class Editor {
    constructor(string) {
        this.string = string
    }

    bigLetters() {
        console.log(this.string.split(' ').map(
            word => word[0].toUpperCase() + word.substring(1)
        ).join(' '))
    }

    smallLetters() {
        console.log(this.string.split(' ').map(
            word => word[0].toLowerCase() + word.substring(1)
        ).join(' '))
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
