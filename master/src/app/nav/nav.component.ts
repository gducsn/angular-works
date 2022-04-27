import { Component, Input, OnInit } from '@angular/core';
import { apexCards } from '../mockup/mockup-cards/apex-cards';
import { ObjService } from '../obj.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

changeEl = false;
  constructor(private objService: ObjService) { }

  ngOnInit() {
    this.returnVal(0)
  }

  returnVal(value:number | null){
   
    this.objService.objToIterate.splice(0,6)
    return this.objService.selectOBJ(value! | null!);
  }
 
 
}

/*

All'interno del metodo returVal ho utilizzato .splice così ogni volta che clicchi non somma altri array ma elimina gli attuali così da far vedere gli altri
---

All'interno di ngOnInit c'è una chiamata al metodo per selezionare la cards con argomento 0, così appena avvii l'app è già selezionato il tutto.

*/