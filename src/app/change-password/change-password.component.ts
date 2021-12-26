import { CheckOldPassword } from './oldpassword.validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent  {
form;

  constructor(fb: FormBuilder) {
    this.form= fb.group({
      oldPassword: ['', Validators.required, CheckOldPassword.checkedOldPassword],
      newPassword:['', Validators.required],
      confirmedPassword:['',Validators.required]
    }, {validators: CheckOldPassword.checkedNewandConfirmedPassword});
   }

   get oldPassword(){
     return this.form.get('oldPassword');
   }
   get newPassword(){
    return this.form.get('newPassword');
  }
  get confirmedPassword(){
    return this.form.get('confirmedPassword');
  }
}
