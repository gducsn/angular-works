import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-toast',
  template: ` <div class="toast" *ngIf="eventStream$ | async">
    Activated Process!
  </div>`,
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent {
  eventStream$: Observable<boolean>;

  constructor(private toast: ToastService) {
    this.eventStream$ = toast.eventStream$;
  }
}
