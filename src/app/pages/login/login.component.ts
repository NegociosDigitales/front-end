import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=this.formBuilder.group({
    username:['',Validators.required],
    password:['',Validators.required],
    captcha:['',Validators.required]
  });
  public readonly siteKey = '6LcvoUgUAAAAAJJbhcXvLn3KgG-pyULLusaU4mL1'
  protected aFormGroup: FormGroup | undefined;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  handleSuccess(captchaResponse: string): void{
  }

  onSubmit(){
    var isInvalid=this.loginForm.invalid;
    if(isInvalid){
      alert("Formulario Incorrecto");
    }else{
      alert("Realizado con exito");
    }

  }

}
