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
        console.log(this.string.);
    }

}

const myString = new Editor('Много букв');
myString.bigLetters();
myString.smallLetters();
myString.symbols();