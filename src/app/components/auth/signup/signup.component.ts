import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './auth/signup.component.html',
  styleUrls: ['./auth/signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class AuthSignupComponent {

  user = new User({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: ''
  });

  error: string;

  constructor(
    private router: Router
  ) { }

  signup() {
    this.error = null;
    this.auth.signup(this.user).subscribe(            //error!!!!! (no se perque)
      () => this.router.navigate(['/me']),
      (err) => this.error = err
    );
  }
}
