import {Component} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../core/services/usuarios/auth.service';
import {EmailValidator} from '../../core/validators/email.validator';
import {checkPasswordValidator} from '../../core/validators/password.validator';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    NgClass,
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register  {
    registerForm: FormGroup;

    constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
    ) {
        this.registerForm = this.formBuilder.group({
          "nombre": ["", Validators.required],
          "email": ["", [Validators.required,EmailValidator]],
          "password1":["",[Validators.required, Validators.minLength(5),checkPasswordValidator]],
          "password2":["",[Validators.required, Validators.minLength(5),checkPasswordValidator]],
        })
    }
    registrarme(){
      if(this.registerForm.invalid){
        alert("Formulario no válido")
        return;
      }
      this.authService.registro(this.registerForm.value).subscribe({
        next: (data )=> {
          console.log(data);
        },
        error:(err) => {
          console.log(err)
        }
      })
    }

}
