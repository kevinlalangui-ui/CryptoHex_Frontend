import {Component, output, signal} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Login} from '../login/login';

@Component({
  selector: 'app-menu',
  imports: [
    RouterLink,
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  fnToggleMenu= output();

  openLogin= signal<boolean>(false);

  toggleLogin(){
    this.openLogin.update(state=>!state);
  }

}
