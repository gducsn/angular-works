import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.css']
})
export class RxjsTestComponent implements OnInit {

  title = 'rxjs-ex';
  divisibleByThreeObservable!: Observable<{isDivisibleByThree: false, number: 0}>;
  firstSubscription!: Subscription;
  subscriberOneValue: number = 0;
  isSubscriberOneDivisible!: boolean;


  constructor() { }

  ngOnInit() {

    this.divisibleByThreeObservable = new Observable((observer:any) => {
      let number = 0;
      setInterval(()=> {
        if (number % 3 === 0){
          observer.next({isDivisibleByThree: true, number: number})
        } else {
          observer.next({isDivisibleByThree: false, number: number})
        }
        number++
      }, 1000)
    })
  }

  subscribe() {
    this.firstSubscription = 
    this.divisibleByThreeObservable
    .subscribe({
      next: (value) => {
       
        this.subscriberOneValue = value.number;
        this.isSubscriberOneDivisible = value.isDivisibleByThree;
      }
    })
  }

  unsubscribe(){
    this.firstSubscription.unsubscribe();
  }

  reset() {
    this.subscriberOneValue = 0;
  }
 

}
