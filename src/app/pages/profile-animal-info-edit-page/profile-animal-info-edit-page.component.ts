import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-profile-animal-info-edit-page',
  templateUrl: './profile-animal-info-edit-page.component.html',
  styleUrls: ['./profile-animal-info-edit-page.component.css']
})
export class ProfileAnimalInfoEditPageComponent implements OnInit {

  animal;
  feedbackEnabled = false;
  processing = false;
  error;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const animalId = params['animalId'];
      this.animalService.getAnimal(animalId).then(data => {
        this.animal = data;
      });
    });
  }

  create(form) {}

  handleClick() {
    this.animalService.updateAnimal(this.animal).then((result) => console.log('saved'),
    (err) => console.log(err));
  }
}
