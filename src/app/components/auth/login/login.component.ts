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

  user = new User({
    username: '',
    password: ''
  });

  error: string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.error = null;
    this.auth.login(this.user)
      .subscribe(
        () => this.router.navigate(['/tasks']),
        (err) => this.error = err
      );
  }

}
