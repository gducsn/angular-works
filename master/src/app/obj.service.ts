
import { Injectable, OnInit } from '@angular/core';
import { apexCards } from './mockup/mockup-cards/apex-cards';
import { battlefieldCards } from './mockup/mockup-cards/battelefield-cards';
import { eaPlayCards } from './mockup/mockup-cards/eaplay-cards';
import { f1Cards } from './mockup/mockup-cards/f1-cards';
import { fifaCards } from './mockup/mockup-cards/fifa-cards';
import { insideCards } from './mockup/mockup-cards/inside-cards';
import { notizieCards } from './mockup/mockup-cards/notizie-cards';

 export interface singleOBJ{
  id: number; 
  imgUrl: string; 
  textDate: string; 
  textEa: string; 
  textMain: string; 
  textTitle: string;
}

@Injectable({
  providedIn: 'root'
})


export class ObjService {

   // bisogna aggiungere le altre cards
  allCardsObj = [[notizieCards],[eaPlayCards],[apexCards],[fifaCards],[battlefieldCards], [f1Cards], [insideCards] ]

  objToIterate: singleOBJ[] = []
  
constructor() { }
// 
  selectOBJ(value:number | undefined){

    let selectOBJ = this.allCardsObj[value!]
    selectOBJ[0].forEach((element: singleOBJ) => {
      let obj = {
        ...element,
      }
      this.objToIterate.push(obj)
    });
  }

}

/*
Il metodo returnVal precedende fa poi riferimento a questo metedo qui 'selectOBJ', riceve il numero inserito. 
Questo numero mi serve come indice così posso selezionare dinamamente l/oggetto da fare ciclare
Quindi una volta ricevuto l'indice pusha un nuovo oggetto contenente tutti gli elementi dell'oggetto che voglio.

Ho utilizzato solo 4 cards per prova. 


*/