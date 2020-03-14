import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlinguoidungContentComponent } from './quanlinguoidung-content.component';

describe('QuanlinguoidungContentComponent', () => {
  let component: QuanlinguoidungContentComponent;
  let fixture: ComponentFixture<QuanlinguoidungContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlinguoidungContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlinguoidungContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
