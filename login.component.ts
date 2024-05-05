import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  lstOfLoginData: any =[]
  backEndUrl: string = "http://localhost:8081"

  LoginForm: FormGroup = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    terms : new FormControl("",Validators.requiredTrue)
  })

  get methodOfUsername(): any {
    return this.LoginForm.get('username');
  }

  get methodOfpassword(): any {
    return this.LoginForm.get('password');
  }


  constructor(private http: HttpClient) { }


  handleLogin() 
  {
        if(this.LoginForm.invalid){
          alert('Please Fill out all the Fields properly')
          return;
        }

    this.http.get(this.backEndUrl + "/register/login")
      .subscribe(
        data => {
            alert("Login Success.")
        }, error => {
          alert("Login Failed.")
          console.log(error)
        }
      )
  }
}
