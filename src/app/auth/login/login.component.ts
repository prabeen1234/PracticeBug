import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { ToastrService } from 'ngx-toastr';
import { LoginUser } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {email:'',password:''}

loginForm:FormGroup;

  constructor(private fb:FormBuilder,private loginService:LoginService,private toast:ToastrService) { 
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  
  public loginFormControls(){
    return this.loginForm.controls;
  }
  public data: LoginUser = {
    email: '',
    password: '',
  };
  onSubmit() {
    this.loginService.loginUser(this.data).subscribe(
      (response) => {
        this.toast.success('successfully login');
        localStorage.setItem(
          'currentUser',
          JSON.stringify({ token: response, name: name })
        );
      },
      (error) => {
        console.error('Error Login contact:', error);
      }
    );
}}
