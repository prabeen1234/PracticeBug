import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { HomebodyComponent } from './homebody/homebody.component';

const routes: Routes = [
  {
    path:"", component: HomebodyComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
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
