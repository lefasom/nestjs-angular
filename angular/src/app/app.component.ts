import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { GameComponent } from './game/game.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'angular';
// }


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
  favGame = ""
  getFavGame(nameGame: string) {
    this.favGame = nameGame
  }
}