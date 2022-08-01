import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChildOneComponent } from './child-one/child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two/child-two.component';
import { ParentDirective } from './parent.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ChildOneComponent, ChildTwoComponent],
  exports: [ChildOneComponent, ChildTwoComponent],
  providers: [ParentDirective],
})
export class Siblings {}
