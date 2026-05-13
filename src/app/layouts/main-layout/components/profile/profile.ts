import {Component, inject, signal,output} from '@angular/core';
//re
import {SessionStorageService} from '../../../../core/services/sessions/session-storage.service';
import {AuthCookieService} from '../../../../core/services/cookies/auth-cookie.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  fnToggleProfile= output();
  private sessionStorage= inject(SessionStorageService);
  private cookieService= inject(AuthCookieService);
  private router=inject(Router);

  nombreDeUsuario = signal<string |null>(null)
  emailDeUsuario = signal<string |null>(null)
  constructor() {
    const datos = this.sessionStorage.get('cryptoHex_datos');
    if(datos){
      this.nombreDeUsuario.set(datos.nombre)
      this.emailDeUsuario.set(datos.email)
    }
  }
  logout(){
    this.cookieService.removeAll();
    this.sessionStorage.removeAll();
    this.router.navigate(['/']);
  }
}
