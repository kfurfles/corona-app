import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ca-graphic-icon',
  templateUrl: './graphic-icon.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    ca-graphic-icon{
      display: inline-block;
    }
    ca-graphic-icon svg{
      display: block;
    }
  `]
})
export class GraphicIconComponent {

  constructor() { }

}
