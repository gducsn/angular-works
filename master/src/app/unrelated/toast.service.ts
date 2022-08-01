import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

@Injectable()
export class ToastService {
  private behaviorsubject = new BehaviorSubject<boolean>(false);
  public eventStream$: Observable<boolean> =
    this.behaviorsubject.asObservable();

  showToast(): void {
    this.behaviorsubject.next(true);
    setTimeout(() => {
      this.behaviorsubject.next(false);
    }, 5000);
  }

  public setEnabled(): void {
    if (!this.behaviorsubject.value) this.showToast();
  }

  /**
   * questo forse è il più 'semplice'. Crei un servizio con un osservabile che cambia il valore da true a false.
   * La cosa più difficile, per me, è fare l'animazione...
   */
}
