import { Directive, ElementRef, Input, OnInit, AfterViewInit } from '@angular/core';
@Directive({
  selector: '[appGoBoard]'
})
export class GoBoardDirective implements OnInit, AfterViewInit {
  loadAPI: Promise<any>;
  @Input("appGoBoard") sgfData: string;
  elem: ElementRef;
  constructor(el: ElementRef) {
    this.elem = el;
  }

  ngAfterViewInit() {
    // let board = WGo.Board(
    //   this.elem.nativeElement, {
    //     width: 200
    //   }
    // )
  }

  ngOnInit() {
  }
}
