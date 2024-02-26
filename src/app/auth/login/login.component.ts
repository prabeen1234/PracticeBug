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
  // You may define properties or methods as needed

  isRegisterActive: boolean = false;

  togglePanel() {
    this.isRegisterActive = !this.isRegisterActive;
  }
}

  


