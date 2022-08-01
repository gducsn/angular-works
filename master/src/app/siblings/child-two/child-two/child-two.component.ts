import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ParentDirective } from '../../parent.directive';

@Component({
  selector: 'app-child-two',
  template: ` <div class="border">
    <ng-container *ngIf="color$ | async as color">
      <input
        #picker
        type="color"
        [value]="color"
        (change)="updateColor(picker.value)"
      />
    </ng-container>
  </div>`,
  styleUrls: ['./child-two.component.css'],
})
export class ChildTwoComponent {
  color$!: Observable<String>;

  constructor(public directive: ParentDirective) {}

  ngOnInit() {
    this.color$ = this.directive.observable$;
  }

  updateColor(color: string) {
    this.directive.updateColor(color);
  }
}
