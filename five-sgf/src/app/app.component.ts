import { Component, OnInit } from '@angular/core';
import { SnippetsListComponent } from './snippets-list/snippets-list.component';
import { ViewContainerRef } from "@angular/core";
import { AuthComponent } from "./auth/auth.component";
import { SgfService } from './sgf.service';
import { UserService } from './user.service';
import { MdDialog, MdDialogRef, MdDialogConfig } from "@angular/material";
import { AngularFireModule } from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dialogRef: MdDialogRef<AuthComponent>
  user: {};
  constructor(
    public dialog: MdDialog,
    public viewRef: ViewContainerRef,
    public af: AngularFireModule,
    public userService: UserService) {}
  
    ngOnInit() {
      this.userService.authState.subscribe(user => {
        if(user) {
          this.user = user;
        } else {
          this.user = {};
        }
      });
    }

    openAuthDialog() {
      let config = new MdDialogConfig();
      config.viewContainerRef = this.viewRef;
      this.dialogRef = this.dialog.open(AuthComponent, config);

      this.dialogRef.afterClosed().subscribe(user => {
        this.user = user;
        this.dialogRef=null;
      });
    }

    logout() {
      this.userService.signOut()
      this.user = {};
    }

    userExists() {
      return (this.user && "uid" in this.user);
    }
  
}
