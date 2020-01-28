import { Component } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
    selector:'register',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css']
})

export class RegisterComponent {

    public registerForm: FormGroup;
    public user:Object ={ isUserExist: false,registered:false }
     

    constructor(private formBuilder:FormBuilder,private authService:AuthService){
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
    const users = this.authService.getDeafultUserList();
    let found = users.filter((el)=>{
      return (el.email === this.registerForm.value.email)
    });

    if(found.length === 0){
      this.authService.addNewUser({id:users.length+1,"email":this.registerForm.value.email,"password":this.registerForm.value.password});
      this.user['registered'] = true;
    }else{
      console.debug("user already exist");
      this.user['isUserExist'] = true;
    }
    
  }

  public cancel() {
    this.registerForm.reset();
  }
}