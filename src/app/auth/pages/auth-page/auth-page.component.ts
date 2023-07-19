import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AppLoginService } from '../../services/app-login.service';
import { AuthValidators } from './auth.validators';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  constructor(public loginService: AppLoginService) {}

  form: FormGroup | undefined;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, AuthValidators.passwordStrength]),
    });
  }

  show: boolean = false;

  submit() {
    if (this.form?.valid) {
      this.loginService.login();
    }
  }
}
