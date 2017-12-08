import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { IntroComponent } from './components/auth/intro/intro.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthService } from './services/auth.service';


const routes: Routes = [
  { path: 'intro', component: IntroPageComponent },
  { path: 'auth/login', component: LoginPageComponent },
  { path: 'auth/signup', component: SignupPageComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SignupComponent,
    LoginComponent,
    IntroPageComponent,
    SignupPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
