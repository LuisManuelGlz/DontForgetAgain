import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders()
  .set('x-access-token', 'Bearer ' + localStorage.getItem('token'));

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  baseUrl: string = 'http://localhost:4000/api/reminders/';

  constructor(private http: HttpClient) { }

  getReminders() {
    
    return this.http.get(this.baseUrl, { headers });
  }

  addReminder(model: any) {
    return this.http.post(this.baseUrl + 'add', model, { headers });
  }
}
