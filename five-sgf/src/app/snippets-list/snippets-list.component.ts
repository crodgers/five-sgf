import { Component, OnInit } from '@angular/core';
import { SgfService } from '../sgf.service';

@Component({
  selector: 'app-snippets-list',
  templateUrl: './snippets-list.component.html',
  styleUrls: ['./snippets-list.component.css']
})
export class SnippetsListComponent implements OnInit {

  constructor(private sgfService: SgfService) {}
  
  sgfs = this.sgfService.getSgf();

  ngOnInit() {
  }

}
