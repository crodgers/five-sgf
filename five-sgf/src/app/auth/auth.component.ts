import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { MdIconRegistry } from "@angular/material";
import { UserService } from "../user.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user: {};
  constructor(
    private userService: UserService,
    private dialogRef: MdDialogRef<AuthComponent>,
    sanitizer: DomSanitizer,
    iconReg: MdIconRegistry) {
      iconReg.addSvgIcon('googleAuth', sanitizer.bypassSecurityTrustResourceUrl('../../assets/google-circle.svg'))
        .addSvgIcon('facebookAuth', sanitizer.bypassSecurityTrustResourceUrl('../../assets/facebook_circle_black.svg'))
        .addSvgIcon('githubAuth', sanitizer.bypassSecurityTrustResourceUrl('../../assets/github.svg'))
        .addSvgIcon('twitterAuth', sanitizer.bypassSecurityTrustResourceUrl('../../assets/twitter_circle_black.svg'))
     }

  ngOnInit() {
    this.userService.authState.subscribe(user => {
      if(user) {
        this.user = user;
      } else {
        this.user = {};
      }
    });
   }

}
