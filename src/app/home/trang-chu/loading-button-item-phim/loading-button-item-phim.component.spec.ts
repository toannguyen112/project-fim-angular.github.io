import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingButtonItemPhimComponent } from './loading-button-item-phim.component';

describe('LoadingButtonItemPhimComponent', () => {
  let component: LoadingButtonItemPhimComponent;
  let fixture: ComponentFixture<LoadingButtonItemPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingButtonItemPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingButtonItemPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
