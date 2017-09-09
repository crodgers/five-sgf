import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class SgfService {
  sgfs: any[] = [
  {
    name: 'test sgf 1',
    sgfData: "this is a string in place of real data",
    dateCreated: 125468728,
    public: false,
    comments: [
        'comment 1',
        'comment 2',
        'comment 3'
      ]
  },
  {
    name: 'test sgf 2',
    sgfData: "this is a string in place of real data",
    dateCreated: 125468728,
    public: false,
    comments: [
        'comment 1',
        'comment 2',
        'comment 3'
      ]
  },
  {
    name: 'test sgf 3',
    sgfData: "this is a string in place of real data",
    dateCreated: 125468728,
    public: false,
    comments: [
        'comment 1',
        'comment 2',
        'comment 3'
      ]
  },
  {
    name: 'test sgf 4',
    sgfData: "this is a string in place of real data",
    dateCreated: 125468728,
    public: false,
    comments: [
        'comment 1',
        'comment 2',
        'comment 3'
      ]
  }
]
  constructor(public db: AngularFireDatabase) { }
    getSgf(uid): FirebaseListObservable<any> {
        return this.db.list(uid);
    }
}
