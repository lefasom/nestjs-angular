import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  template: `
  <h1> Estos son: {{title}}</h1>
  <ul>
      @for (game of games; track game.id) {
        <li>
          <button (click)="mostrar(game.name)">
             {{game.name}}
          </button>
          <br>
          <button (click)="fav(game.name)">
             {{game.name}} - father
          </button>
        </li>
      }
  </ul>
  `,
  styles: ``
})
export class GameComponent {
  @Input() title = ""

  games = [
    {
      id: "1",
      name: "God of war II"
    },
    {
      id: "2",
      name: "FIFA 24"
    },
    {
      id: "3",
      name: "GTA V"
    },
  ]
  mostrar = (name: string) => {
    alert(`Game: ${name}`)
  }

  @Output() addFavoriteEvent = new EventEmitter<string>();
  fav = (name: string) => {
    this.addFavoriteEvent.emit(name)
  }
}
