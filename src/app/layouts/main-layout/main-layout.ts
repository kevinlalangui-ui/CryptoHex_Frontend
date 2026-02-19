import { Component } from '@angular/core';
import {Header} from "./components/header/header";//estamos importando las clases por eso va en mayúsculas
import {Footer} from './components/footer/footer';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [
    Header,
    Footer,
    RouterOutlet,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  standalone:true
})
export class MainLayout {

}
