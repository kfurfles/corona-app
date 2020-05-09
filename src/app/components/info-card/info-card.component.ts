import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ca-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoCardComponent implements OnInit {

  @Input()
  public variation: 'purple' | 'orange' | 'green' | 'red' = 'purple';
  @Input()
  public title = '< no title >';
  @Input()
  public number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
