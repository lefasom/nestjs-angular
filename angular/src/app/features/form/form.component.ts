import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { IUser } from '../../core/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  users: IUser[] = [];
  userSubscription: Subscription;

  constructor(private _UserService: UserService) {
    this.userSubscription = new Subscription();
  }
  ngOnInit(): void {
    this.userSubscription = this._UserService.getAll().subscribe({
      next: (data: IUser[]) => {
        this.users = data;
        console.log(data)
      },
      error: (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    });
  }
  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
