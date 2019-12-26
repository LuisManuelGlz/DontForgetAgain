import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindersCalendarComponent } from './reminders-calendar.component';

describe('RemindersCalendarComponent', () => {
  let component: RemindersCalendarComponent;
  let fixture: ComponentFixture<RemindersCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindersCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindersCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
