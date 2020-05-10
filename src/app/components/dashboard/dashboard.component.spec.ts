import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import {InfoCardComponent} from '../info-card/info-card.component';
import {PersonIconComponent} from '../person-icon/person-icon.component';
import {GraphicIconComponent} from '../graphic-icon/graphic-icon.component';
import {HttpClientModule} from '@angular/common/http';
import {ShareComponent} from '../share/share.component';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import {environment} from '../../../environments/environment';
import {StateService} from '../../services/state/state.service';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<DashboardComponent>;
  let stateService: StateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        InfoCardComponent,
        PersonIconComponent,
        GraphicIconComponent,
        ShareComponent
      ],
      imports: [
        HttpClientTestingModule,
        NgSelectModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    stateService = TestBed.get(StateService);
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render state message', () => {
    component.selected = {
      uid: 35,
      uf: 'SP',
      state: 'São Paulo',
      cases: 41830,
      deaths: 3416,
      suspects: 5334,
      refuses: 596,
      broadcast: 0,
      comments: '',
      datetime: '2020-05-08T22:33:57.225Z'
    };
    fixture.detectChanges();

    const shareButton = fixture.nativeElement.querySelector('.ca-share__buttons a');

    expect(shareButton.href.indexOf('41830') > -1).toBeTruthy();
  });

  it('should get dashboard country request and update screen', fakeAsync(() => {
    const mockRequest = {data: {country: 'Brazil', cases: 79691, confirmed: 149101, deaths: 10113, recovered: 59297, updated_at: '2020-05-09T21:32:30.000Z'}};
    const req = httpTestingController.expectOne(environment.url.byCountry);

    component.ngOnInit();
    tick();
    expect(req.request.method).toEqual('GET');

    req.flush(mockRequest);
    tick();

    fixture.detectChanges();

    const dashValue = fixture.nativeElement.querySelector('.ca-info-card__value').textContent;

    expect(dashValue !== 0).toBeTruthy();
  }));

  it('should get dashboard by state request and update screen', fakeAsync(() => {
    const mockRequest = {
      data: [
        {
          uid: 35,
          uf: 'SP',
          state: 'São Paulo',
          cases: 41830,
          deaths: 3416,
          suspects: 5334,
          comments: '',
          broadcast: 0,
          refuses: 596,
          datetime: '2020-05-08T22:33:57.225Z'
        },
      ]
    };
    const req = httpTestingController.expectOne(environment.url.states);

    component.ngOnInit();
    tick();

    expect(req.request.method).toEqual('GET');

    req.flush(mockRequest);
    tick();

    component.selected = {
      uid: 35,
      uf: 'SP',
      state: 'São Paulo',
      cases: 100,
      deaths: 200,
      suspects: 300,
      comments: '',
      broadcast: 0,
      refuses: 596,
      datetime: '2020-05-08T22:33:57.225Z'
    };

    fixture.detectChanges();

    const shareButton = fixture.nativeElement.querySelector('.ca-share__buttons a');

    expect(shareButton.href.indexOf('100') > -1).toBeTruthy();
  }));

  it('should change dashboard info', () => {
    component.country$ = {country: 'Brazil', cases: 79691, confirmed: 149101, deaths: 10113, recovered: 59297, updated_at: '2020-05-09T21:32:30.000Z'};

    const stateMock = {
      uid: 35,
      uf: 'SP',
      state: 'São Paulo',
      cases: 9000,
      deaths: 8000,
      suspects: 7000,
      comments: '',
      broadcast: 0,
      refuses: 596,
      datetime: '2020-05-08T22:33:57.225Z'
    };
    component.changeDashboardInfo(stateMock);
    fixture.detectChanges();

    const dashValue = fixture.nativeElement.querySelector('.ca-info-card__value').textContent;

    expect(dashValue.trim()).toEqual('9000');

    component.changeDashboardInfo(null);
    fixture.detectChanges();

    const newDashValue = fixture.nativeElement.querySelector('.ca-info-card__value').textContent;

    expect(newDashValue !== 9000).toBeTruthy();
  });

  it('should by text', () => {
      const stateMock = {
        uid: 35,
        uf: 'SP',
        state: 'São Paulo',
        cases: 100,
        deaths: 200,
        suspects: 300,
        comments: '',
        broadcast: 0,
        refuses: 596,
        datetime: '2020-05-08T22:33:57.225Z'
      };
      expect(component.searchBy('sp', stateMock)).toBeTruthy();
      expect(component.searchBy('', stateMock)).toBeFalsy();

      stateMock.uf = '';

      expect(component.searchBy('são', stateMock)).toBeTruthy();
  });
});
