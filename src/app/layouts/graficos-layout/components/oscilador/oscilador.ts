import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-oscilador',
  imports: [],
  templateUrl: './oscilador.html',
  styleUrl: './oscilador.scss',
})
export class Oscilador implements AfterViewInit {

  @ViewChild('osciladorWidget') widgetContainer!: ElementRef;

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: 'dark',
      displayMode: 'single',
      isTransparent: false,
      locale: 'es',
      interval: '4h',
      disableInterval: false,
      width: '100%',
      height: '100%',
      symbol: 'CRYPTOCAP:TOTAL',
      showIntervalTabs: true
    });

    this.widgetContainer.nativeElement.appendChild(script);
  }
}
