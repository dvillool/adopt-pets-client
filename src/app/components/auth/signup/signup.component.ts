import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

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
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  Signup(theForm) {
    this.feedbackEnabled = true;
    if (theForm.valid) {
      this.processing = true;
      this.authService.signup(this.user)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['profile']);
        });
    }
  }
}
