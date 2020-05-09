import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IRequestByCountry} from '../../typings/api';

@Component({
  selector: 'ca-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  infos = {
    cases: 0,
    confirmed: 0,
    deaths: 0,
    recovered: 0
  };

  constructor(private readonly httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<IRequestByCountry>(environment.url.byCountry).subscribe(response => {
      const {
        cases,
        confirmed,
        deaths,
        recovered
      } = response.data;

      this.infos = {
        cases,
        confirmed,
        deaths,
        recovered
      };
    });
  }

}
