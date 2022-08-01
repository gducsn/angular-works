import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MultiChildComponent } from './multi-child/multi-child.component';
import { MultiParentComponent } from './multi-parent/multi-parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MultiChildComponent, MultiParentComponent],
  exports: [MultiChildComponent, MultiParentComponent],
})
export class MultiDirection {}
