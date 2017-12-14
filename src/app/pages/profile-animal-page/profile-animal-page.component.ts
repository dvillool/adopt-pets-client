import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { AnimalService } from '../../services/animal.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-profile-animal-page',
  templateUrl: './profile-animal-page.component.html',
  styleUrls: ['./profile-animal-page.component.css']
})
export class ProfileAnimalPageComponent implements OnInit {

  animalList = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
     this.profileService.getAnimals()
     .subscribe((data) => this.animalList = data,
      (err) => console.log(err));
  }
}
