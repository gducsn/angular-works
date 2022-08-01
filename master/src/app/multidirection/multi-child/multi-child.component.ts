import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { BehaviorSubject, concatMap, delay, tap } from 'rxjs';

@Component({
  selector: 'app-multi-child',
  template: `
    <div class="ctr" *ngIf="eventStream$ | async">
      <span *ngIf="state.value as value">{{ value }}</span>
    </div>
  `,
})
export class MultiChildComponent implements OnInit, OnDestroy {
  // definisci quanto tempo deve passare per completare
  @Input('loadtime') loadtime: any;

  // riceve l'osservabile per mostrare il valore
  @Input('eventStream') eventStream$: any;

  // creaimo un nuovo BehaviorSubject
  state: BehaviorSubject<string> = new BehaviorSubject('');

  // inviamo il valore al metodo che gestirà la chiusura
  @Output('done') eventEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    // all'init sottoscriviamoci
    // emettiamo il valore
    this.state.subscribe((val) => {
      this.eventEmitter.emit(val);
    });

    this.eventStream$ = this.eventStream$.pipe(
      tap((val) => {
        if (val === 'Running') this.start();
      })
    );
  }

  start() {
    // il valore sarà loading e dopo il tempo da noi deciso sarà complete
    // quando sarà complete verrà chiuso il cerchio
    this.state.next('Loading...');
    setTimeout(() => {
      this.state.next('Complete!');
    }, this.loadtime);
  }

  ngOnDestroy() {
    this.state.unsubscribe();
  }
}
