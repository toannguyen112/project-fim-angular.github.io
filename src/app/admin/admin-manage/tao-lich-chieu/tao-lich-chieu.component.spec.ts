import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoLichChieuComponent } from './tao-lich-chieu.component';

describe('TaoLichChieuComponent', () => {
  let component: TaoLichChieuComponent;
  let fixture: ComponentFixture<TaoLichChieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoLichChieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoLichChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
