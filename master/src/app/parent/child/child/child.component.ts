import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface Mook {
  enabled: boolean;
  toolTip: boolean;
}

@Component({
  selector: 'app-child',
  template: `
    <ng-container *ngIf="eventStream$ | async as evt">
      <div *ngIf="evt.toolTip">
        {{ getMessage(evt.enabled) }}
      </div>
    </ng-container>
  `,
})
export class ChildComponent implements OnInit {
  @Input('eventStream') eventStream$: Observable<Mook> | undefined;

  constructor() {}

  ngOnInit() {}

  getMessage(toggle: boolean) {
    if (toggle) return 'Agreed - when it is accepted';
    else
      return 'Agree to terms by clicking - when you do hover the event is triggered and is shown';
  }
}
