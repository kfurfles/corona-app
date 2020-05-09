import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ca-person-icon',
  templateUrl: './person-icon.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    ca-person-icon{
      display: inline-block;
    }
    ca-person-icon svg{
      display: block;
    }
  `]
})
export class PersonIconComponent{

  @Input() public color = '#000';
  constructor() { }

}
