import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'nav',component:NavbarComponent
  },
  {
    path:'forgetPassword',component:ForgetPasswordComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
