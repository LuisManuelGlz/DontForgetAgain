import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindersPanelComponent } from './reminders-panel.component';

describe('RemindersPanelComponent', () => {
  let component: RemindersPanelComponent;
  let fixture: ComponentFixture<RemindersPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindersPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
