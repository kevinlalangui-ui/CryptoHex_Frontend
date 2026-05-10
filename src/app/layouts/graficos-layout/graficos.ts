import { Component } from '@angular/core';
import{WidgetAppl} from './components/widget-appl/widget-appl';
import {RouterOutlet} from '@angular/router';
import {Heatmap} from './components/heatmap/heatmap';
import {Oscilador} from './components/oscilador/oscilador';
import{Overview} from './components/overview/overview';
import {StockMarket} from './components/stock-market/stock-market';

@Component({
  selector: 'app-graficos',
  imports: [
    Heatmap,
    Oscilador,
    Overview,
    StockMarket,
  ],
  templateUrl: './graficos.html',
  styleUrl: './graficos.scss',
  standalone: true
})
export class Graficos {

}

