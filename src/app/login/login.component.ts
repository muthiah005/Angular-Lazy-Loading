import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup;
  public isValid: boolean = true;
  private user:Object = {email:'muthiah005@gmail.com' ,password:'12345678',name:'muthiah'}
  constructor(private formBuilder: FormBuilder,private router:Router,private authService:AuthService) {
    this.createLoginForm();
  }

  
  ngOnInit() {
    console.debug("--------", 'Login');
  }

  private createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  public login() {
    console.debug(this.loginForm.value);
    if(this.loginForm.value.email === 'muthiah005@gmail.com' && this.loginForm.value.password === '12345678'){
      this.authService.setLocalUserInfo({email:this.loginForm.value.email,password:this.loginForm.value.password,name:'muthiah'});
      this.router.navigate(['dashboard']);
      this.isValid = true;
    }else{
      this.isValid = false;
    }
  }

  public cancel() {
    this.loginForm.reset();
  }

}