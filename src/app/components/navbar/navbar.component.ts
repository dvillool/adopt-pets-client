import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './fonts.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  )  { }

  ngOnInit() {
    this.main();
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/intro']);
    });
  }

   main() {
    let closed = true;

    $('.menu').click(function(){
        if (closed) {
              $('nav').animate({
                  left: '0'
              });
              closed = false;
        } else {
              $('nav').animate({
                  left: '-100%'
              });
              closed = true;
        }
    });
  }
}
