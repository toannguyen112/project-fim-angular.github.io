import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinCinemaComponent } from './thongtin-cinema.component';

describe('ThongtinCinemaComponent', () => {
  let component: ThongtinCinemaComponent;
  let fixture: ComponentFixture<ThongtinCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtinCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
