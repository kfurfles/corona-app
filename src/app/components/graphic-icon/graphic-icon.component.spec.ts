import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GraphicIconComponent} from './graphic-icon.component';

describe('GraphicIconComponent', () => {
  let component: GraphicIconComponent;
  let fixture: ComponentFixture<GraphicIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
