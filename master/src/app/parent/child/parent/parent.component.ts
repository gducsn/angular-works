import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Mook {
  enabled: boolean;
  toolTip: boolean;
}

@Component({
  selector: 'app-parent',
  template: `
    <div class="tochild">
      <h5>
        Exchange of information between component, called 'father', in which
        inside there is another component called 'son'.
      </h5>
      <span>Agree to the Terms of Service:</span>
      <input
        #toggle
        type="checkbox"
        (change)="update(toggle.checked, 'enabled')"
        (mouseover)="update(true, 'toolTip')"
        (mouseleave)="update(false, 'toolTip')"
      />
      <app-child [eventStream]="eventStream$"></app-child>
    </div>
  `,
  styles: [
    '.tochild {display: flex; justify-content: center; padding: 40px; flex-direction: column; align-items: center;border-bottom: 1px solid black}',
  ],
})
export class ParentComponent implements OnInit {
  ngOnInit(): void {}
  private state = new BehaviorSubject<Mook>({
    enabled: false,
    toolTip: false,
  });

  // Creates a new Observable with this Subject as the source.
  public eventStream$: Observable<Mook> = this.state.asObservable();

  update(value: boolean, command: string) {
    let update = this.state.value;
    if (command === 'enabled') update.enabled = value;
    if (command === 'toolTip') update.toolTip = value;
    this.state.next(update);
  }
}
