import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHistoryItemComponent } from './profile-history-item.component';

describe('ProfileHistoryItemComponent', () => {
  let component: ProfileHistoryItemComponent;
  let fixture: ComponentFixture<ProfileHistoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHistoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHistoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
