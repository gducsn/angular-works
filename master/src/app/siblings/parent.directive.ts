import { Directive } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[appParent]',
})
export class ParentDirective {
  private behaviorSubject = new BehaviorSubject<String>('#F0FFFF');
  public observable$ = this.behaviorSubject.asObservable();

  constructor() {}

  ngOnInit() {}

  updateColor(color: string) {
    this.behaviorSubject.next(color);
  }
}
