import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { User } from '../../../models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './auth/login.component.html',
  styleUrls: ['./auth/login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class AuthLoginComponent {

  user = new User({
    email: '',
    password: ''
  });

  error: string;

  constructor(
    private router: Router
  ) { }

  login() {
    this.error = null;
    this.auth.login(this.user)      //error!!!!! (no se perque)
      .subscribe(
        () => this.router.navigate(['/auth/me']),
        (err) => this.error = err
      );
  }
}
