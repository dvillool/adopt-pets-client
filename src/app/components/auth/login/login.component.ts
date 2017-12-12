import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  feedbackEnabled = false;
  processing = false;

  user = new User({
    Email: null,
    password: null
  });

  error: string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(theForm) {
    this.feedbackEnabled = true;
    this.error = null;
    if (theForm.valid) {
      this.processing = true;
      this.auth.login(this.user)
      .subscribe(
        () => this.router.navigate(['/profile']),
        (err) => this.error = err
      );
    }
  }
}
