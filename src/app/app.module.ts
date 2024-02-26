import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
