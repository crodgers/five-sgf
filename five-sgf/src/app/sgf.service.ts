import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SgfService {
  sgfs: any[] = [
  {
    name: 'test sgf 1',
    owner: 'some guy',
    comments: [
        'comment 1',
        'comment 2',
        'comment 3'
      ]
  },
  {
    name: 'test sgf 2',
    owner: 'some other guy',
    comments: [
        'comment 1',
        'comment 2',
        'comment 3'
      ]
  },
  {
    name: 'test sgf 3',
    owner: 'some third guy',
    comments: [
        'comment 1',
        'comment 2',
        'comment 3'
      ]
  },
  {
    name: 'test sgf 4',
    owner: 'some last guy',
    comments: [
        'comment 1',
        'comment 2',
        'comment 3'
      ]
  }
]
  constructor() { }
    getSgf(): any[] {
        return this.sgfs;
    }
}
