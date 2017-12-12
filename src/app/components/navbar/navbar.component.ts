import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './fonts.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.main();
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
