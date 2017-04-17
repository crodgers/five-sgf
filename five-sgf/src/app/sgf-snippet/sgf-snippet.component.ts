import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/Observable';


@Component({
  selector: 'app-sgf-snippet',
  templateUrl: './sgf-snippet.component.html',
  styleUrls: ['./sgf-snippet.component.css']
})
export class SgfSnippetComponent implements OnInit {
  private id: number;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params.id;
  }

}
