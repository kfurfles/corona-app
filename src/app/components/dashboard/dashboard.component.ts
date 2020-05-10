import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ICountry, IRequestBrazilStates, IRequestByCountry, IState} from '../../typings/api';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {StateService} from '../../services/state/state.service';

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

  country$: Partial<ICountry>;
  states$: Observable<IState[]>;
  selected: null | IState;

  constructor(
    private readonly stateService: StateService,
    private readonly httpClient: HttpClient) { }

  get shareMessage() {
    if (this.selected){
      const {
        uf,
        cases,
        deaths: totalDeaths,
        suspects
      } = this.selected;

      return `Em ${uf} hoje existe ${cases} casos confirmados, ${totalDeaths} mortes e ${suspects} suspeitos.`;
    } else {
      const {
        confirmed,
        deaths,
        recovered} = this.infos;
      return `O brasil hoje tem ${confirmed} casos confirmados, ${deaths} mortes e ${recovered} recuperados.`;
    }
  }

  ngOnInit(): void {
    this.getDashBoardInfo();
    this.getStateInfo();
  }

  getDashBoardInfo(){
    this.httpClient.get<IRequestByCountry>(environment.url.byCountry)
      .pipe(
        map(({
          data: {
            cases,
            confirmed,
            deaths,
            recovered
          }
        }) => {
          return {
            cases,
            confirmed,
            deaths,
            recovered
          };
        })
      )
      .subscribe(response => {
        this.infos = response;
        this.country$ = {
          ...response
        };
    });
  }

  getStateInfo(){
    this.states$ = this.httpClient.get<IRequestBrazilStates>(environment.url.states)
      .pipe(
        map(res => res.data),
        map(states => this.stateService.setAdditionalInfoStates(states))
      );
  }

  changeDashboardInfo(newDashboardInfo: IState | null){
    if (newDashboardInfo){
      this.infos.deaths = newDashboardInfo.deaths;
      this.infos.cases = newDashboardInfo.cases;
    } else {
      const {
        cases,
        confirmed,
        recovered,
        deaths,
      } = this.country$;
      this.infos = {
        cases,
        confirmed,
        recovered,
        deaths
      };
    }
  }

  searchBy(term: string, item: IState){
    const {
      uf,
      state
    } = item;

    const searchTerm = term.toLowerCase();
    const ufSearch = uf.toLowerCase();
    const stateSearch = state.toLowerCase();

    return searchTerm && (ufSearch.includes(searchTerm) || stateSearch.includes(searchTerm));
  }

}
