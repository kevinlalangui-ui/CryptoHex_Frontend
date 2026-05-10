import { Component } from '@angular/core';
import {Header} from "./components/header/header";//estamos importando las clases por eso va en mayúsculas
import {RouterOutlet} from '@angular/router';
import {Cinta} from './components/cinta/cinta';

@Component({
  selector: 'app-main-layout',
  imports: [
    Header,
    RouterOutlet,
    Cinta,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  standalone:true
})
export class MainLayout {

}
