import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup | any;
  email: String | any;
  password: String | any;

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: new FormControl('', [Validators.required, 
        Validators.email, Validators.minLength(10)]),
      password: new FormControl('', [Validators.required])
    });
  }
  doSomething() {
    this.email = this.myForm.get('email');
    this.password = this.myForm.get('password');
    console.log(this.password);
  }


}
