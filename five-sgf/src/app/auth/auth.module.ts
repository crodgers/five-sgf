import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { authRouting } from './auth.routes'

@NgModule({
  imports: [
    CommonModule,
    authRouting
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class AuthModule { }
