import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMainInfoCinemaComponent } from './detail-main-info-cinema.component';

describe('DetailMainInfoCinemaComponent', () => {
  let component: DetailMainInfoCinemaComponent;
  let fixture: ComponentFixture<DetailMainInfoCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMainInfoCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMainInfoCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
