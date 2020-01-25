import { Component } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector:'register',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css']
})

export class RegisterComponent {

    public registerForm: FormGroup;
    public isUserExist: boolean = false;

    constructor(private formBuilder:FormBuilder){
        this.createRegisterForm()
    }

    ngOnInit()  {
        console.debug("Register");
    }

    
  private createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      first_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      last_name: new FormControl('', [Validators.required, Validators.minLength(1)]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirm_password: new FormControl('', [Validators.required, Validators.minLength(8),this.passwordMatchValidator.bind(this)])
    });
  }

  private passwordMatchValidator(fc : FormControl){
    if(!this.registerForm){return;}
    if(this.registerForm.value.password == fc.value){
        return;
    }else{
        return {mismatch: true};
    }
}

  public register() {
    console.debug(this.registerForm.value);
  }

  public cancel() {
    this.registerForm.reset();
  }
}