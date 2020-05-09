import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardComponent } from './info-card.component';
import {GraphicIconComponent} from '../graphic-icon/graphic-icon.component';
import {PersonIconComponent} from '../person-icon/person-icon.component';

describe('InfoCardComponent', () => {
  let component: InfoCardComponent;
  let fixture: ComponentFixture<InfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GraphicIconComponent,
        PersonIconComponent,
        InfoCardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
