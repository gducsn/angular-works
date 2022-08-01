import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-multi-parent',
  template: `
    <h3>{{ state.value }}</h3>
    <button type="button" (click)="state.next('Running')">Start</button>
    <app-multi-child
      [eventStream]="eventStream$"
      [loadtime]="1000"
      (done)="updateStatus($event)"
    ></app-multi-child>
    <app-multi-child
      [eventStream]="eventStream$"
      [loadtime]="2000"
      (done)="updateStatus($event)"
    ></app-multi-child>
  `,
  styles: ['button {width: 100px;border: none;padding: 15px;}'],
})
export class MultiParentComponent {
  //quando arriva a due invia il valore di 'complete' al behavior.
  private counter: number = 0;
  // valore di partenza behavior
  public state = new BehaviorSubject('Off');
  // crea un nuovo osservabile con soggetto il behavior come fonte
  public eventStream$: Observable<string> = this.state.asObservable();

  // riceve valore da un Output
  updateStatus(value: string): void {
    // se completo aumenta il counter
    if (value === 'Complete!') this.counter++;
    //due volte completa il processo
    if (this.counter === 2) {
      this.state.next('Process Complete');
      this.counter = 0;
    }
  }
}
