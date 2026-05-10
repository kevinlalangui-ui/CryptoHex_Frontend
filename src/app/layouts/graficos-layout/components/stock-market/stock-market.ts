import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-stock-market',
  imports: [],
  templateUrl: './stock-market.html',
  styleUrl: './stock-market.scss',
})
export class StockMarket implements AfterViewInit {

  @ViewChild('stockMarketWidget') widgetContainer!: ElementRef;

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      exchange: 'US',
      colorTheme: 'dark',
      dateRange: '12M',
      showChart: true,
      locale: 'es',
      largeChartUrl: '',
      isTransparent: false,
      showSymbolLogo: false,
      showFloatingTooltip: false,
      plotLineColorGrowing: 'rgba(41, 98, 255, 1)',
      plotLineColorFalling: 'rgba(41, 98, 255, 1)',
      gridLineColor: 'rgba(240, 243, 250, 0)',
      scaleFontColor: '#DBDBDB',
      belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
      belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
      belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
      belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
      symbolActiveColor: 'rgba(41, 98, 255, 0.12)',
      width: '400',
      height: '550'
    });

    this.widgetContainer.nativeElement.appendChild(script);
  }
}
