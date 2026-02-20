import { Component } from '@angular/core';
import { Header } from '../main-layout/components/header/header';
import { Footer } from '../main-layout/components/footer/footer';
import {RouterOutlet} from '@angular/router';
@Component({
  selector: 'app-airdrops-layout',
  imports: [
    Header,
    Footer,
    RouterOutlet
  ],
  templateUrl: './airdrops-layout.html',
  styleUrl: './airdrops-layout.scss',
  standalone: true,
})
export class AirdropsLayout {

}
