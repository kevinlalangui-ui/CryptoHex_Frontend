import { Component,output } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../../../core/services/usuarios/auth.service';
import {AuthCookieService} from '../../../../core/services/cookies/auth-cookie.service';
import {SessionStorageService} from '../../../../core/services/sessions/session-storage.service';

type DatosDeEnvio = {email: string ,password: string};
@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    // NgClass
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  standalone: true//porque ponemos esto
})
export class Login {
  fnToggleLoginHeader= output();
  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private authCookieService: AuthCookieService,
    private sessionStorageService: SessionStorageService,
  ) {
    this.formLogin = this.formBuilder.group({
      "email": ['', [Validators.email, Validators.required,Validators.minLength(5)]],
      "password":['',[Validators.required,Validators.minLength(5)]],
    })
  }
  iniciarSesion() {
    if(this.formLogin.invalid){
      alert("Formulario no válido");
      return;
    }

    if(this.formLogin.value.email===""){
      alert("El campo de email no puede estar vacío")
      return;
    }
    const datosParaEnviar: DatosDeEnvio = { //al servidor??
      email:this.formLogin.value.email,
      password:this.formLogin.value.password,
    }
    this.authService.login(datosParaEnviar).subscribe({
      next: (response) => {
        console.log(response);
        this.authCookieService.set("cryptoHex_online_token", response.data.token)
        this.authCookieService.set("cryptoHex_refresh_token", response.data.refreshToken)
        const datos: any = {
          email: response.data.email,
          nombre: response.data.nombre,
          rol: response.data.role,
        }
        this.sessionStorageService.set("cryptoHex_datos", datos);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }


}
