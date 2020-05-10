import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ca-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  @Input() message: string;
  constructor() { }

  ngOnInit(): void {
  }

}
