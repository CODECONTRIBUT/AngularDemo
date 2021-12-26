import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CheckOldPassword{
   static checkedOldPassword(control: AbstractControl) : Promise<ValidationErrors | null>{
            return new Promise((resolve)=>{
                if (control.value !== '1234') 
                    return resolve({invalidOldPassword: true});
                
                return resolve(null);
                }
            )
    }
    static checkedNewandConfirmedPassword(control: AbstractControl) : ValidationErrors | null {
        let newpassword = control.get('newPassword').value;
        let confirmpassword = control.get('confirmedPassword').value;
            if (newpassword !== confirmpassword)
                return {invalidConfirmedPassword: true};

            return null;
            }
    }