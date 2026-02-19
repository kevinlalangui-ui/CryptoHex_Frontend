import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Login} from '../login/login';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    Login
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true
})
export class Header {
    openLogin= signal<boolean>(false);

    toggleLogin(){
      this.openLogin.update(state=>!state);
    }
}
