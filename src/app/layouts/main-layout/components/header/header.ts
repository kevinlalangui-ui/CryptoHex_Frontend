import {Component, signal,inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {Login} from '../login/login';
import {Menu} from '../menu/menu';
import{AuthCookieService} from '../../../../core/services/cookies/auth-cookie.service';
import{SessionStorageService} from '../../../../core/services/sessions/session-storage.service';
import{Profile} from '../../../../features/profile/profile';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    Login,
    Menu,
    Profile,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true
})
export class Header {
  isLoggedIn = signal<boolean>(false);
  nombreDeUsuario = signal<string | null>(null);

  openLogin= signal<boolean>(true);
  openMenu= signal<boolean>(false);
  openProfile = signal<boolean>(false);
  constructor(private cookieService: AuthCookieService ,
              private sessionService :SessionStorageService) {
    this.ponerDatos(cookieService, sessionService);
  }

    toggleLogin(){
      this.openLogin.update(state=>!state);
      //recomprobamos
      this.ponerDatos(this.cookieService, this.sessionService);
    }


    toggleMenu(){
      this.openMenu.update(state=>!state);
    }
    toggleProfile(){
    this.openProfile.update(state=>!state);
    }
  private ponerDatos(cookieService: AuthCookieService, sessionService: SessionStorageService) {
    if (cookieService.get('cryptoHex_online_token')) {
      this.isLoggedIn.set(true);
      let datos = sessionService.get('cryptoHex_datos');
      if (datos) {
        this.nombreDeUsuario.set(datos.nombre);
      }

    }
  }
}
