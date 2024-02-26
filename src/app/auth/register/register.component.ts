import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { RegisterUser } from 'src/app/user';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  constructor(private registerService:RegisterService,private toast:ToastrService){}
  public showSuccessMessage = false;
  
  ngOnInit(): void {
  }
  public data: RegisterUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  saveUser() {
    this.registerService.registerUser(this.data).subscribe(
      (response) => {
        this.toast.success('successfully Registered');
      },
      (error) => {
        console.log(error)
        this.toast.error("Failed in Registration")
            }
    );
  }
  }
  
