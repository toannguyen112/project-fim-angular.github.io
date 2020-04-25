import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeBanTruocComponent } from './ve-ban-truoc.component';

describe('VeBanTruocComponent', () => {
  let component: VeBanTruocComponent;
  let fixture: ComponentFixture<VeBanTruocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeBanTruocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeBanTruocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
