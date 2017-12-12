import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  feedbackEnabled = false;
  processing = false;

  user = new User({
    name: null,
    surname: null,
    username: null,
    email: null,
    password: null
  });

  error: string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  Signup(theForm) {
    this.feedbackEnabled = true;
    if (theForm.valid) {
      this.processing = true;
      console.log('here we submit the form', theForm);
      // authService.login(this.username, this.password).
    }
  }
}
