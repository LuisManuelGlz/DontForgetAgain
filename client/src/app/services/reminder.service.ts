import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  baseUrl: string = 'http://localhost:4000/api/reminders/';

  constructor(private http: HttpClient) { }

  getReminders() {
    const token = 'Bearer ' + localStorage.getItem('token');

    const headers = new HttpHeaders()
      .set('x-access-token', token);
    
    return this.http.get(this.baseUrl, { headers });
  }
}
