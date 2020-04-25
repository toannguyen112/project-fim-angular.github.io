import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePhimComponent } from './update-phim.component';

describe('UpdatePhimComponent', () => {
  let component: UpdatePhimComponent;
  let fixture: ComponentFixture<UpdatePhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
