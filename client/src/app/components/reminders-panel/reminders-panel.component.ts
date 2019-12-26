import { Component, OnInit } from '@angular/core';
import { ReminderService } from 'src/app/services/reminder.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-reminders-panel',
  templateUrl: './reminders-panel.component.html',
  styleUrls: ['./reminders-panel.component.css']
})
export class RemindersPanelComponent implements OnInit {
  reminders: any = [];
  
  constructor(
    private reminderService: ReminderService,
    private alertifyService: AlertifyService
  ) { }

  ngOnInit() {
    this.getReminders();
  }

  getReminders(): void {
    this.reminderService.getReminders()
      .subscribe(response => {
        this.reminders = response;
      }, error => {
        const messages = error.error.errors;
        messages.map(message => this.alertifyService.error(message.text));
      });
  }
}
