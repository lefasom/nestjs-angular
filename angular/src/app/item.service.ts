import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item.model';

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    private baseUrl = 'http://localhost:3000/items'; // URL de tu API REST en NestJS

    constructor(private http: HttpClient) { }

    getAllItems(): Observable<Item[]> {
        return this.http.get<Item[]>(this.baseUrl);
    }

    getItemById(id: number): Observable<Item> {
        return this.http.get<Item>(`${this.baseUrl}/${id}`);
    }

    addItem(item: Item): Observable<Item> {
        return this.http.post<Item>(this.baseUrl, item);
    }

    updateItem(updatedItem: Item): Observable<Item> {
        return this.http.put<Item>(`${this.baseUrl}/${updatedItem.id}`, updatedItem);
    }

    deleteItem(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}
