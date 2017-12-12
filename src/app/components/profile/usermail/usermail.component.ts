import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../../services/auth.service'

@Component({
  selector: 'app-usermail',
  templateUrl: './usermail.component.html',
  styleUrls: ['./usermail.component.css']
})
export class UsermailComponent implements OnInit {

  user;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.me()
      .then((user) => this.user = user);
  }

}
