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

  user = new User({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: ''
  });

  error: string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signup() {
    this.error = null;
    this.auth.signup(this.user).subscribe(
      () => this.router.navigate(['/me']),
      (err) => this.error = err
    );
  }
}
