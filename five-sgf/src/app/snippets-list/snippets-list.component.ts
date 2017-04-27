import { Component, OnInit, Input } from '@angular/core';
import { SgfService } from '../sgf.service';
import { UserService } from "../user.service";

@Component({
  selector: 'app-snippets-list',
  templateUrl: './snippets-list.component.html',
  styleUrls: ['./snippets-list.component.css']
})
export class SnippetsListComponent implements OnInit {
  user: {};
  // sgfs: ;
  constructor(
    private sgfService: SgfService,
    private userService: UserService) {
    }

  ngOnInit() {
    this.userService.af.auth.subscribe(user => {
      if (user) {
        this.user = user;
        // this.sgfs = this.sgfService.getSgf
      } else {
        this.user = user;
      }
    });
  }

  userExists() {
      return (this.user && "uid" in this.user);
    }

}
