import { Component, computed, signal } from '@angular/core';
import { HijoComponent } from '../../shared/hijo/hijo.component';
import { Hijo2Component } from '../../shared/hijo2/hijo2.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent, Hijo2Component],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

  messageRecive(sms: string) {
    const messageReciveEventElement = document.getElementById("messageReciveEvent");
    if (messageReciveEventElement) {
      messageReciveEventElement.innerHTML += `<br>${sms}`;
    }
  }

  counter = signal<number>(0)

  increment() {
    this.counter.update((val: number) => val + 1)
  }
  decrement() {
    this.counter.update((val: number) => val - 1)
  }
  reset() {
    this.counter.set(0)
  }


}
