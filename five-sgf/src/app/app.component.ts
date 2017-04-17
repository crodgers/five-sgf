import { Component } from '@angular/core';
import { SnippetsListComponent } from './snippets-list/snippets-list.component';
import { SgfService } from './sgf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
  
  title = 'app works!';
}
