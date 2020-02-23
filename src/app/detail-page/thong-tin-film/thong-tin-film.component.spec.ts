import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinFilmComponent } from './thong-tin-film.component';

describe('ThongTinFilmComponent', () => {
  let component: ThongTinFilmComponent;
  let fixture: ComponentFixture<ThongTinFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
