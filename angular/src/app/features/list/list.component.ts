import { Component, OnInit } from '@angular/core';
import { IUser } from '../../core/models/user.model';
import { Subscription } from 'rxjs';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
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