import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isCollapsed = false;
  model: any = {};

  constructor(
    private authService: AuthService,
    private alertifyService: AlertifyService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model)
    .subscribe((response: any) => {
      console.log('Logged');
    }, error => {
      const messages = error.error.errors;
      messages.map(message => this.alertifyService.error(message.text));
    }, () => {
      this.router.navigate(['/reminders']);
    });
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
