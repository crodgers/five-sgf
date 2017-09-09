import { 
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { SgfService } from '../sgf.service';
import { UserService } from "../user.service";
import { FirebaseApp } from 'angularfire2';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-snippets-list',
  templateUrl: './snippets-list.component.html',
  styleUrls: [
    './snippets-list.component.css',
  ]
})
export class SnippetsListComponent
  implements OnInit, AfterViewInit {
  user: {};
  sgfs: FirebaseListObservable<any[]>;
  constructor(
    private sgfService: SgfService,
    private userService: UserService) {
      this.userService.authState.subscribe(user => {
        if (user) {
          this.user = user;
          this.sgfs = this.sgfService.getSgf('/sgfs')
        } else {
          this.user = {};
          this.sgfs = null;
        }
      });
    }

  ngOnInit() { }

   ngAfterViewInit() {
   }
}
