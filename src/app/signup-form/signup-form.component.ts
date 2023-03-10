import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ], 
      UsernameValidators.shouldBeUnique),
      password : new FormControl('',Validators.required)
    }) 
  });
  constructor() { }

  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
  ngOnInit(): void {
  }

  login() {
    this.form.setErrors({
      invalidLogin: true
    });  
  }

  

  


}
