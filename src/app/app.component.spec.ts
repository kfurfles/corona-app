import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {TitleComponent} from './components/title/title.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import {InfoCardComponent} from './components/info-card/info-card.component';
import {PersonIconComponent} from './components/person-icon/person-icon.component';
import {GraphicIconComponent} from './components/graphic-icon/graphic-icon.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DashboardComponent,
        TitleComponent,
        InfoCardComponent,
        PersonIconComponent,
        GraphicIconComponent,
      ],
      imports: [
        HttpClientModule,
        BrowserModule,
        NgSelectModule,
        FormsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'corone-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('corone-app');
  });
});
