import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';

var authRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
//   { path: '**', component: PageNotFoundComponent }
];

export const authRouting = RouterModule.forRoot(authRoutes);