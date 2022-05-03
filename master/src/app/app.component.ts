import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemsToChild: string = 'Element from parent!'
title = ""
  items: Array<string> = [];
  
  addItem(newItem: string) {
    this.items.push(newItem);
    if(this.items.length > 5){
      this.items.splice(1)
    }
 
  }

  reset(value:number) {
    this.items.splice(value, 1)
  }
    

}
