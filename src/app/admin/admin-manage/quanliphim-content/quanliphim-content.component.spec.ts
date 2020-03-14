import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanliphimContentComponent } from './quanliphim-content.component';

describe('QuanliphimContentComponent', () => {
  let component: QuanliphimContentComponent;
  let fixture: ComponentFixture<QuanliphimContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanliphimContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanliphimContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
