import { Component, OnInit, effect, signal } from '@angular/core';
import { IUser } from '../../core/models/user.model';
import { Subscription } from 'rxjs';
import { UserService } from '../../core/services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  userSubscription: Subscription;
  // users = signal<IUser[]>([])
  users: IUser[] = ([])

  constructor(private _UserService: UserService) {
    this.userSubscription = new Subscription();

    // effect(() => { console.log(this.users()) })
  }

  getUser() {
    this.userSubscription = this._UserService.getAll().subscribe({
      next: (data: IUser[]) => {
        // this.users.set(data);
        this.users = data;
      },
      error: (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    });
  }

  deleteUser(id: string | any) {
    this._UserService.delete(id).subscribe({
      next: () => {
        console.log('Se eliminó el usuario con id:', id);
        this.getUser()
        // Aquí podrías realizar alguna acción adicional si es necesario
      },
      error: (error) => {
        console.error('Error al eliminar usuario:', error);
      }
    });
  }
  ngOnInit(): void {
    this.getUser()
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}