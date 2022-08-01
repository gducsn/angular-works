import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivatorComponent } from './activator/activator/activator.component';
import { ToastService } from './toast.service';
import { ToastComponent } from './toast/toast/toast.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ActivatorComponent, ToastComponent],
  exports: [ActivatorComponent, ToastComponent],
  providers: [ToastService],
})
export class UnrelateModule {}
