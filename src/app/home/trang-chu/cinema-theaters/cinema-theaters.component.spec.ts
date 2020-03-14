import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaTheatersComponent } from './cinema-theaters.component';

describe('CinemaTheatersComponent', () => {
  let component: CinemaTheatersComponent;
  let fixture: ComponentFixture<CinemaTheatersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaTheatersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaTheatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
