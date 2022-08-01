import { Component } from '@angular/core';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-activator',
  template: `
    <button #activate type="button" (click)="onChange()">Activate!</button>
  `,
  styleUrls: ['./activator.component.css'],
})
export class ActivatorComponent {
  constructor(private toast: ToastService) {}

  onChange(): void {
    this.toast.setEnabled();
  }
}
