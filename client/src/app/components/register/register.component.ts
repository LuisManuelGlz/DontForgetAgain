import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(
    private authService: AuthService,
    private alertifyService: AlertifyService
  ) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model)
    .subscribe((response: any) => {
      this.model = {};
      this.cancelRegister.emit(false);
      const message = response.success;
      this.alertifyService.success(message);
    }, error => {
      const messages = error.error.errors;
      messages.map(message => this.alertifyService.error(message.text));
    });
  }
  
  cancel() {
    this.cancelRegister.emit(false);
  }
}
