import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css'
})
export class RegisterationComponent {

  lstOfRegisteration: any = []
  backEndUrl: string = "http://localhost:8081"

  RegisterationForm: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", Validators.required),
    phonenumber: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
    email: new FormControl("", Validators.required),
    password: new FormControl("", [Validators.required, Validators.pattern('[0-9,A-Z,a-z]*')]),
    Male: new FormControl(""),
    Female: new FormControl(""),
    Other: new FormControl(""),
    // date: new FormControl("",Validators.required),
    username: new FormControl("", Validators.required),
    terms : new FormControl("",Validators.requiredTrue)
  })

  get methodOfFirstName(): any {
    return this.RegisterationForm.get('firstName');
  }

  get methodOfLastName(): any {
    return this.RegisterationForm.get('lastName');
  }

  get methodOfPhoneNumber(): any {
    return this.RegisterationForm.get('phonenumber');
  }

  get methodOfEmail(): any {
    return this.RegisterationForm.get('email');
  }

  get methodOfPassword(): any {
    return this.RegisterationForm.get('password');
  }

  // get methodOfDOB():any
  // {
  // return this.RegisterationForm.get('date');
  // }

  get methodOfUserName(): any {
    return this.RegisterationForm.get('username')
  }

  constructor(private http: HttpClient,private router: Router) { }

  handleSubmit() 
  {
    
    if(this.RegisterationForm.invalid){
      alert("Please fill out all required fields before submitting.")
      return;
    }

    this.http.post(this.backEndUrl + "/register/add", this.RegisterationForm.value)
      .subscribe(
        success => {
          this.lstOfRegisteration = success;
          alert('Data Passed Successfully ! Hurray')
          this.RegisterationForm.reset();
          this.router.navigateByUrl("/Login")
        }, error => {
          alert('Data not passes Successfully ! Something is Wrong..')
          console.log(error)
        }
      )
  }
}
