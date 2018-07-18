class GuessNumberGame {


    constructor() {
        this.number = new Number(1234).toString().split("");
    }

    test(input) {
        let value = input.split(" ");
        if (!this.validateInput(value)) {
            return "Wrong Input，Input again";
        }

        let correctCount = this.getCorrectCount(value);
        let malPositionCount = this.getMalPositionCount(value);
        return this.generateOutput(correctCount, malPositionCount);
    }

    validateInput(value) {
        if (value.length != 4) {
            return false;
        }
        if (new Set(value).size !== value.length) {
            return false;
        }

        return true;
    }

    getCorrectCount(value) {
        return this.number.filter((val, idx) => val === value[idx]).length;
    }

    getMalPositionCount(value) {
        return this.number.filter((val, idx) => val !== value[idx] && value.includes(val)).length;
    }

    generateOutput(correctCount, malPositionCount) {
        return `${correctCount}A${malPositionCount}B`;
    }

}

let game = new GuessNumberGame();

function test(game, input) {
    console.log(`Input:${input} Output:${game.test(input)}`)
}

// 1 5 6 7      1A0B                 1 correct
// 2 4 7 8      0A2B                 2 and 4 wrong position
// 0 3 2 4      1A2B                 4 correct，2 and 3 wrong position
// 5 6 7 8      0A0B                 all wrong
// 4 3 2 1      0A4B                 4 numbers position wrong
// 1 2 3 4      4A0B                 win, all correct
// 1 1 2 3    Wrong Input，Input again
// 1 2        Wrong Input，Input again
test(game, '1 5 6 7');
test(game, '2 4 7 8');
test(game, '0 3 2 4');
test(game, '5 6 7 8');
test(game, '4 3 2 1');
test(game, '1 2 3 4');
test(game, '1 1 2 3');
test(game, '1 2');