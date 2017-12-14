import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-profile-animal-info-page',
  templateUrl: './profile-animal-info-page.component.html',
  styleUrls: ['./profile-animal-info-page.component.css']
})
export class ProfileAnimalInfoPageComponent implements OnInit {

  animal;

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
}
