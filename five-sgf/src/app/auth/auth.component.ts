import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { MdDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { MdIconRegistry } from "@angular/material";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user: {};
  constructor(
    public af: AngularFire,
    private dialogRef: MdDialogRef<AuthComponent>,
    sanitizer: DomSanitizer,
    iconReg: MdIconRegistry) {
      this.af.auth.subscribe(user => {
        if (user) {
          this.dialogRef.close(user);
        }
        else {
          this.user = {}
        }
      });

      iconReg.addSvgIcon('googleAuth', sanitizer.bypassSecurityTrustResourceUrl('../../assets/google-circle.svg'))
        .addSvgIcon('facebookAuth', sanitizer.bypassSecurityTrustResourceUrl('../../assets/facebook_circle_black.svg'))
        .addSvgIcon('githubAuth', sanitizer.bypassSecurityTrustResourceUrl('../../assets/github.svg'))
        .addSvgIcon('twitterAuth', sanitizer.bypassSecurityTrustResourceUrl('../../assets/twitter_circle_black.svg'))
     }

  ngOnInit() {
  }

  login(loginConfig) {
    this.af.auth.login(loginConfig);
  }

  google_login() {
    this.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  };

  facebook_login() {
    this.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    });
  };

  twitter_login() {
    this.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup
    });
  };

  github_login() {
    this.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Popup
    });
  };

}
