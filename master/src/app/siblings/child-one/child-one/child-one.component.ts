import { Component } from '@angular/core';
import { ParentDirective } from '../../parent.directive';

@Component({
  selector: 'app-child-one',
  template: `
    <div class="flexing">
      <div *ngIf="color$ | async as color" [ngStyle]="{ background: color }">
        <p>Select color:</p>
      </div>
    </div>
  `,
  styles: ['.flexing { max-width: 100%}', ' .flexing p {padding: 50px;} '],
})
export class ChildOneComponent {
  color$: any;

  constructor(public directive: ParentDirective) {}

  ngOnInit() {
    this.color$ = this.directive.observable$;
  }
}
