import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() words!: string;
  @ContentChild('ref') content!: ElementRef;

  constructor() {
    console.log('1) the constructor is called first.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2) onChanges is called before onInit.');
  }
  ngOnInit(): void {
    console.log('3) onInit -> Then the onInit method.');
  }
  ngDoCheck() {
    console.log(
      '3.5) DoCheck -> On startup called immediately after onChanges and OnInit.' +
        'It will be called whenever there is a change after onChanges.'
    );
  }

  ngAfterContentInit(): void {
    console.log(
      '?) afterContentInit -> Called only once when the whole view has been rendered.',
      this.content
    );
  }
  ngAfterContentChecked(): void {
    console.log(
      '?) afterContentChecked -> Called at first only once after afterContentInit. Subsequently whenever there is the doCheck.'
    );
  }
  ngAfterViewInit(): void {
    console.log('afterViewInit -> only once after ngAfterContentChecked');
  }
  ngAfterViewChecked(): void {
    console.log(
      'afterViewChecked -> only once after ngAfterViewInit and then every subsequent ngAfterContentChecked'
    );
  }
  ngOnDestroy(): void {
    console.log(
      'Lastly, this method is called only once during the component’s lifecycle, right before Angular destroys it.'
    );
  }
}
