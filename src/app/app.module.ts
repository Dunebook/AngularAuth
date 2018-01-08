import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

import { AppRoutingModule } from './app-routing.module';
import { EmailComponent } from './email/email.component';

const firebaseConfig = {
  apiKey: 'AIzaSyAywNGLBVmlk98dkqahOjwaeqsFdm1hNMQ',
  authDomain: 'angularauth-50243.firebaseapp.com',
  databaseURL: 'https://angularauth-50243.firebaseio.com',
  projectId: 'angularauth-50243',
  storageBucket: 'angularauth-50243.appspot.com',
  messagingSenderId: '11240551544'
};


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
