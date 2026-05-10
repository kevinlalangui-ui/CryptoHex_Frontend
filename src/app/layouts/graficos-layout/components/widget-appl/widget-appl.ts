import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-widget-appl',
  templateUrl: './widget-appl.html',
  styleUrls: ['./widget-appl.scss']
})
export class WidgetAppl implements AfterViewInit {

  @ViewChild('tradingviewWidget') widgetContainer!: ElementRef;

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      allow_symbol_change: true,
      calendar: false,
      details: false,
      hide_side_toolbar: true,
      hide_top_toolbar: false,
      hide_legend: false,
      hide_volume: false,
      hotlist: false,
      interval: 'D',
      locale: 'en',
      save_image: true,
      style: '1',
      symbol: 'NASDAQ:AAPL',
      theme: 'light',
      timezone: 'Etc/UTC',
      backgroundColor: '#ffffff',
      gridColor: 'rgba(46, 46, 46, 0.06)',
      watchlist: [],
      withdateranges: false,
      compareSymbols: [],
      studies: [],
      autosize: true
    });

    this.widgetContainer.nativeElement.appendChild(script);
  }
}
