class GuessNumberGame {


    constructor() {
        this.number = new Number(1234).toString().split("");
    }

    test(input) {
        let value = input.split(" ");
        console.log(this.number, value);
        let correctCount = this.getCorrectCount(value);
        return this.generateOutput(correctCount, 0);
    }

    getCorrectCount(value) {
        return this.number.filter((val, idx) => val === value[idx]).length;
    }

    generateOutput(correctCount, malPositionCount) {
        return `${correctCount}A${malPositionCount}B`;
    }
}

let game = new GuessNumberGame();

function test(game, input) {
    console.log(`Input:${input} Output:${game.test(input)}`)
}

test(game, '1 2 3 4');
test(game, '1 2 3 5');