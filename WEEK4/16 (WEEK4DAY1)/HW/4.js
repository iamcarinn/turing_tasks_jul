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
        const  puk = this.string.split(' ');
        let sum = 0;
        function Summa() {
            for (let i = 0; i<puk.length; ++i) {
                return sum += puk[i].length;
            }
            console.log(sum);
        }
        Summa()


    }

}

const myString = new Editor('Много букв');
myString.bigLetters();
myString.smallLetters();
myString.symbols();
