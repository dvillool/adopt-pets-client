import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { IntroComponent } from './components/auth/intro/intro.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { UsermailComponent } from './components/profile/usermail/usermail.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileEditPageComponent } from './pages/profile-edit-page/profile-edit-page.component';
import { ProfileAnimalPageComponent } from './pages/profile-animal-page/profile-animal-page.component';
import { ProfileAnimalCreatePageComponent } from './pages/profile-animal-create-page/profile-animal-create-page.component';
import { ProfileAnimalInfoPageComponent } from './pages/profile-animal-info-page/profile-animal-info-page.component';
import { ProfileAnimalInfoEditPageComponent } from './pages/profile-animal-info-edit-page/profile-animal-info-edit-page.component';

import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';
import { AnimalService } from './services/animal.service';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full'},
  { path: 'intro', component: IntroPageComponent },
  { path: 'auth/login', component: LoginPageComponent },
  { path: 'auth/signup', component: SignupPageComponent },
  { path: 'profile', component: ProfilePageComponent},
  { path: 'profiles/edit', component: ProfileEditPageComponent, pathMatch: 'full' },
  { path: 'profile/animal', component: ProfileAnimalPageComponent },
  { path: 'profile/animal/create', component: ProfileAnimalCreatePageComponent },
  { path: 'profile/animal/animalId', component: ProfileAnimalInfoPageComponent },
  { path: 'profile/animal/animalId/edit', component: ProfileAnimalInfoEditPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SignupComponent,
    LoginComponent,
    IntroPageComponent,
    SignupPageComponent,
    LoginPageComponent,
    UsermailComponent,
    ProfilePageComponent,
    ProfileEditPageComponent,
    ProfileAnimalCreatePageComponent,
    ProfileAnimalPageComponent,
    ProfileAnimalInfoPageComponent,
    ProfileAnimalInfoEditPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, ProfileService, AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
