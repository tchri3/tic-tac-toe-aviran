import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly PLAYER_X = "X";
  readonly PLAYER_O = "O";
  board: Array<string>;
  currentPlayer: string;
  gameOverMessage: string;
  isGameOver: boolean;

  get winningIndexes(): Array<any> {
    return [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  constructor() {
    this.board = new Array<string>(9).fill(""); // init board
    this.currentPlayer = this.PLAYER_X;
  }

  newGame() {
    this.isGameOver = false;
    this.board = new Array<string>(9).fill(""); // clear board
    this.switchPlayer();
  }

  switchPlayer() {
    this.currentPlayer = this.currentPlayer == this.PLAYER_X ? this.PLAYER_O : this.PLAYER_X;
  }

  cellClicked(index) {

    if (this.board[index] == "" && !this.isGameOver) {
      
      // move
      this.board[index] = this.currentPlayer;

      if (this.isWinner(this.currentPlayer)) {
        this.isGameOver = true;
        this.gameOverMessage = "The winner is " + this.currentPlayer
      }
      else if (!this.isEmptyCellsExist()) {
        this.isGameOver = true;
        this.gameOverMessage = "Is a Draw";
      }
      else {
        this.switchPlayer();
      }

    }
  }

  isWinner(player) {
    for (let winIndex of this.winningIndexes) {
      let isPlayerWin = this.board[winIndex[0]] == player &&
        this.board[winIndex[1]] == player &&
        this.board[winIndex[2]] == player;

      if (isPlayerWin)
        return true;
    }

    return false;
  }

  isEmptyCellsExist() {
    return this.board.filter(cell => cell == "").length > 0;
  }
}

