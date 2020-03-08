import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCinemaPageComponent } from './detail-cinema-page.component';

describe('DetailCinemaPageComponent', () => {
  let component: DetailCinemaPageComponent;
  let fixture: ComponentFixture<DetailCinemaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCinemaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCinemaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
