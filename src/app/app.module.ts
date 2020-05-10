import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {TitleComponent} from './components/title/title.component';
import {InfoCardComponent} from './components/info-card/info-card.component';
import {PersonIconComponent} from './components/person-icon/person-icon.component';
import {GraphicIconComponent} from './components/graphic-icon/graphic-icon.component';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './components/footer/footer.component';
import {StateService} from './services/state/state.service';
import { ShareComponent } from './components/share/share.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TitleComponent,
    InfoCardComponent,
    PersonIconComponent,
    GraphicIconComponent,
    FooterComponent,
    ShareComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgSelectModule,
    FormsModule
  ],
  providers: [
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
