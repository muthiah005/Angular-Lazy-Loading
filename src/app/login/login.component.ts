import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup;
  public isValid: boolean = true;
  public isUserExist: boolean = false;

  constructor(private formBuilder: FormBuilder) {
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
  }

  public cancel() {
    this.loginForm.reset();
  }

}