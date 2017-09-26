class TicTacToe {
    constructor() {
        this._currentPlayerSymbol = 'x';
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

        this.equal = function (a, b, c) {
            return a != null && a == b && b == c && a == c;
        }

    }

    getCurrentPlayerSymbol() {
        return this._currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] == null) {
            this.field[rowIndex][columnIndex] = this._currentPlayerSymbol;
            this._currentPlayerSymbol = this._currentPlayerSymbol === 'x' ? 'o' : 'x';
        }

    }

    isFinished() {
        return this.getWinner() != null || this.noMoreTurns();
    }

    getWinner() {
        // vertical win
        for (var i = 0; i < 3; i++) {
              if (this.equal(this.field[0][i], this.field[1][i], this.field[2][i]))
                return this.field[0][i];                
        }
        // horizontal win
        for (var i = 0; i < 3; i++) {
            if (this.equal(this.field[i][0], this.field[i][1], this.field[i][2])) {
                return this.field[i][0];
            }
        }

        // diagonal win
        if (this.equal(this.field[0][0], this.field[1][1], this.field[2][2])) {
            return this.field[0][0];
        }
        if (this.equal(this.field[0][2], this.field[1][1], this.field[2][0])) {
            return this.field[0][2];
        }
        return null;
    }


    noMoreTurns() {

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.field[i][j] == null)
                    return false;
            }
        }
        return true;
    }

    isDraw() {
        if (!this.isFinished() || this.getWinner() != null) {
            return false;
        } else return true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

