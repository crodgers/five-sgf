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


export const firebaseConfig = {
    apiKey: "AIzaSyDK6OjN1sMvAScDO0zPi7dddz8AZjQ0aEI",
    authDomain: "five-sgf.firebaseapp.com",
    databaseURL: "https://five-sgf.firebaseio.com",
    projectId: "five-sgf",
    storageBucket: "five-sgf.appspot.com",
    messagingSenderId: "84392188811"
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
    CommentSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    appRouting
  ],
  providers: [SgfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
