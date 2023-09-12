import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Game } from '../example-two/example-two.component';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css'],
})
export class GameItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() game!: Game;
  shouldTitleBePurple: boolean = false;

  ngOnDestroy(): void {
    console.log('Game Item Component Create');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Game Item Component Change', changes);
  }
  ngOnInit(): void {
    console.log('Game Item Component Delete');
  }
}
