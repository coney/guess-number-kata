var shuffle = require('shuffle-array');

class GuessNumberGame {
    constructor(number) {
        this.retry = 0;
        this.answer = number === undefined ?  this.generateRandomNumber(): new Number(number).toString().split("");
        console.log(`answer is ${this.answer}`)
    }

    generateRandomNumber() {
        return shuffle("1234567890".split("").slice(0,4))
    }

    test(input) {
        let value = input.split(" ");
        if (!this.validateInput(value)) {
            return "Wrong Input，Input again";
        }
        if (this.retry >= 6) {
            return "Game Over, No Chance Left"
        }
        this.retry++;

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
        return this.answer.filter((val, idx) => val === value[idx]).length;
    }

    getMalPositionCount(value) {
        return this.answer.filter((val, idx) => val !== value[idx] && value.includes(val)).length;
    }

    generateOutput(correctCount, malPositionCount) {
        return `${correctCount}A${malPositionCount}B`;
    }

}


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
(function () {
    let game = new GuessNumberGame(1234);

    test(game, '1 5 6 7');
    test(game, '2 4 7 8');
    test(game, '0 3 2 4');
    test(game, '5 6 7 8');
    test(game, '4 3 2 1');
    test(game, '1 2 3 4');
    test(game, '1 1 2 3');
    test(game, '1 2');
}());

(function () {
    let game = new GuessNumberGame();

    test(game, '1 5 6 7');
    test(game, '1 5 6 7');
    test(game, '1 5 6 7');
    test(game, '1 5 6 7');
    test(game, '1 5 6 7');
    test(game, '1 5 6 7');
    test(game, '1 5 6 7');
}());
