import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhgiaCinemaComponent } from './danhgia-cinema.component';

describe('DanhgiaCinemaComponent', () => {
  let component: DanhgiaCinemaComponent;
  let fixture: ComponentFixture<DanhgiaCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhgiaCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhgiaCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
