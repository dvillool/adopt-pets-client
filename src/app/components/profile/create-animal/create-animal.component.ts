
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { AnimalService } from '../../../services/animal.service';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-create-animal',
  templateUrl: './create-animal.component.html',
  styleUrls: ['./create-animal.component.css']
})

export class CreateAnimalComponent implements OnInit {

    feedbackEnabled = false;
    processing = false;

    animal = {
      name: null,
      type: null,
      description: null,
      urgent: null,
      adopt: null,
      donate: null
    };

    error: string;

      constructor(
        private authService: AuthService,
        private animalService: AnimalService,
        private profileService: ProfileService,
        private router: Router
      ) { }

      ngOnInit() {
      }

      create(theForm) {
        this.feedbackEnabled = true;
        this.error = null;
        if (theForm.valid) {
          this.processing = true;
          this.profileService.createAnimal(this.animal)
            .subscribe(
              () => {
                this.router.navigate(['/animals']);
              },
              (err) => {
                this.processing = false;
                this.error = err.json().error;
              }
            );
        }
      }
    }
