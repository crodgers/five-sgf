import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class UserService {
  constructor(
    public af: AngularFire) { }

  loginUser(login_config) {
    this.af.auth.login(login_config);
  }
}
