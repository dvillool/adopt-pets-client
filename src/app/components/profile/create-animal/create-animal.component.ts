/*

import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/animal.model';

@Component({
  selector: 'app-create-animal',
  templateUrl: './create-animal.component.html',
  styleUrls: ['./create-animal.component.css']
})

export class CreateAnimalComponent implements OnInit {
    feedbackEnabled = false;
    processing = false;

    user = new Animal({
      name: null,
      type: null,
      shelter: null
    });

    error: string;

      constructor(
        private authService: AnimalService,
        private router: Router
      ) { }

      ngOnInit() {
      }

      Create(theForm) {
        this.feedbackEnabled = true;
        if (theForm.valid) {
          this.processing = true;
          this.AnimalService.create(this.animal)
            .subscribe((data) => {
              console.log(data);
              this.router.navigate(['profile', 'animal']);
            });
        }
      }

}

*/
