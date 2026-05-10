import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {AddTweet} from './components/add-tweet/add-tweet';

@Component({
  selector: 'app-trending-insights',
  imports: [
    RouterLink,
    AddTweet,
  ],
  templateUrl: './trending-insights.html',
  styleUrl: './trending-insights.scss',
})
export class TrendingInsights {
  openTweet= signal<boolean>(false);

  toggleTweet(){
    this.openTweet.update(state=>!state);
  }
}
