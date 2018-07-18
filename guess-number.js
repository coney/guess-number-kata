class GuessNumberGame {


    constructor() {
        this.number = new Number(1234).toString().split("");
    }

    test(input) {
        let value = input.split(" ");
        console.log(this.number, value);
        let correctCount = this.number.filter((val, idx) => val === value[idx]).length;
        return this.generateOutput(correctCount, 0);
    }

    generateOutput(correctCount, malPositionCount) {
        return `${correctCount}A${malPositionCount}B`;
    }
}

let game = new GuessNumberGame();
console.log(game.test("1 2 3 4"))
