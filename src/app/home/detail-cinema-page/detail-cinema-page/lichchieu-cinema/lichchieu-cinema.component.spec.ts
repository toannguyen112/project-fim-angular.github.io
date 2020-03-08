import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichchieuCinemaComponent } from './lichchieu-cinema.component';

describe('LichchieuCinemaComponent', () => {
  let component: LichchieuCinemaComponent;
  let fixture: ComponentFixture<LichchieuCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichchieuCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichchieuCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
