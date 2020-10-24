import { Component, OnInit, Input } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  @Input() value: string;
  @Input() index: number;

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }


  cellClicked() {
    this.gameService.playerMove(this.index);
  }
}
