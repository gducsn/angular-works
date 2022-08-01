import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChildComponent } from './child/child/child.component';
import { ParentComponent } from './child/parent/parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ParentComponent, ChildComponent],
  exports: [ParentComponent, ChildComponent],
})
export class ParentChild {}
