import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule, 
  FIREBASE_PROVIDERS,
  AngularFire,
  AuthMethods,
  AuthProviders
} from 'angularfire2';

import { AppComponent } from './app.component';
import { SnippetsListComponent } from './snippets-list/snippets-list.component';
import { SgfSnippetComponent } from './sgf-snippet/sgf-snippet.component';
import { GobanComponent } from './goban/goban.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';

import { appRouting } from './app.routes';
import { SgfService } from './sgf.service';
import { UserService } from "./user.service";
import { AuthComponent } from './auth/auth.component'


export const firebaseConfig = {
    apiKey: "AIzaSyDyJQVTQI-a-eW2iM70RXAcVHKDb0NP1Ek",
    authDomain: "five-sgf-9804a.firebaseapp.com",
    databaseURL: "https://five-sgf-9804a.firebaseio.com",
    projectId: "five-sgf-9804a",
    storageBucket: "five-sgf-9804a.appspot.com",
    messagingSenderId: "1069340589649"
  };
  
export const firebaseAuthConfig = {
  provider: AuthProviders.Anonymous,
  method: AuthMethods.Anonymous
}

@NgModule({
  declarations: [
    AppComponent,
    SnippetsListComponent,
    SgfSnippetComponent,
    GobanComponent,
    CommentSectionComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    appRouting
  ],
  entryComponents: [
    AuthComponent
  ],
  providers: [SgfService, UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
