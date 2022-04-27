import { Component, Input, OnInit } from '@angular/core';
import { ObjService } from '../obj.service';

interface objToIT {
  id: number,
  imgUrl: string,
  textEa: string,
  textDate: string,
  textTitle: string,
  textMain: string
}

@Component({
  selector: 'app-obj',
  templateUrl: './obj.component.html',
  styleUrls: ['./obj.component.css']
})
export class ObjComponent implements OnInit {

objToIterate: objToIT[] = []

  constructor(private objService: ObjService) { 
  }
  
  ngOnInit() {
    this.objToIterate = this.objService.objToIterate
  }

  
  
}

/* 

Qui ho solo creato una variabile che contenesse l'oggetto creato dinamicamente nei servizi per poi poterlo iterare. 

Devo sistemare le intefacce, ho utilizzano 'any' e non penso vada bene. s
*/
