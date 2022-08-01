import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-parent></app-parent>

    <div class="wrap">
      <h5>
        Relationship we can have with a directive 'father' and two component
        'children' who do not know each other. The connection comes through the
        father.
      </h5>
      <div appParent>
        <div class="child">
          <app-child-one></app-child-one>
          <app-child-two></app-child-two>
        </div>
      </div>
    </div>
    <hr />
    <div class="wrap">
      <h5>"A small informational message that pops up like toast."</h5>
      <app-toast></app-toast>
      <app-activator></app-activator>
    </div>
    <hr />
    <div class="wrap final">
      <app-multi-parent></app-multi-parent>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'component-pattern';
}
