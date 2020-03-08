import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaFilmItemComponent } from './cinema-film-item.component';

describe('CinemaFilmItemComponent', () => {
  let component: CinemaFilmItemComponent;
  let fixture: ComponentFixture<CinemaFilmItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaFilmItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaFilmItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
