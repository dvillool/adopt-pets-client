import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  feedbackEnabled = false;
  processing = false;
  error: string;
  user = null;

  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.authService.getUser();
  }

  editProfile(theForm) {
    this.feedbackEnabled = true;
    this.error = null;
    if (theForm.valid) {
      this.processing = true;
      this.profileService.updateProfile(this.user)
        .then((result) => {
          this.authService.setUser(result);
          this.router.navigate(['/profile']);
        });
      }
  }
}
