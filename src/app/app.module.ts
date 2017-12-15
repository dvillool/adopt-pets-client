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
import { ProfileEditComponent } from './components/profile/profile-edit/profile-edit.component';
import { MiniAnimalProfileComponent } from './components/profile/mini-animal-profile/mini-animal-profile.component';
import { CreateAnimalComponent } from './components/profile/create-animal/create-animal.component';


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

import { InitAuthGuard } from './guards/init-auth.guard';
import { RequireAuthGuard } from './guards/require-auth.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';
import { AnimalEditComponent } from './components/profile/animal-edit/animal-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full'},
  { path: 'intro', canActivate: [InitAuthGuard], component: IntroPageComponent },
  { path: 'auth/login', canActivate: [RequireAnonGuard], component: LoginPageComponent },
  { path: 'auth/signup', canActivate: [RequireAnonGuard], component: SignupPageComponent },
  { path: 'profile', canActivate: [RequireAuthGuard], component: ProfilePageComponent},
  { path: 'profiles/edit', canActivate: [RequireAuthGuard], component: ProfileEditPageComponent, pathMatch: 'full' },
  { path: 'animals', canActivate: [RequireAuthGuard], component: ProfileAnimalPageComponent, pathMatch: 'full' },
  { path: 'animals/create', canActivate: [RequireAuthGuard], component: ProfileAnimalCreatePageComponent, pathMatch: 'full' },
  { path: 'animals/:animalId', canActivate: [RequireAuthGuard], component: ProfileAnimalInfoPageComponent, pathMatch: 'full' },
  { path: 'animals/:animalId/edit', canActivate: [RequireAuthGuard], component: ProfileAnimalInfoEditPageComponent, pathMatch: 'full' },
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
    NavbarComponent,
    ProfileEditComponent,
    MiniAnimalProfileComponent,
    CreateAnimalComponent,
    AnimalEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    ProfileService,
    InitAuthGuard,
    RequireAuthGuard,
    RequireAnonGuard,
    AnimalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
