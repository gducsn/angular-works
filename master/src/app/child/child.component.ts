import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
@Input() items!: Array<string>;
@Output() itemsToOut = new EventEmitter<string>();

constructor() { }

addEvent(value:string) {
  this.itemsToOut.emit(value)
}




}
