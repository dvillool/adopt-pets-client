import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-mini-animal-profile',
  templateUrl: './mini-animal-profile.component.html',
  styleUrls: ['./mini-animal-profile.component.css']
})
export class MiniAnimalProfileComponent implements OnInit {

  @Input() animal;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleClick() {
    this.router.navigate(['/animals', this.animal._id]);
  }
}
