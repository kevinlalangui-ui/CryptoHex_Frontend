import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AddTweet} from './components/add-tweet/add-tweet';
import {DatePipe, NgClass} from '@angular/common';
import {SessionStorageService} from '../../core/services/sessions/session-storage.service';
import {AuthCookieService} from '../../core/services/cookies/auth-cookie.service';
import {TweetsService} from '../../core/services/tweets/tweets.service';
import{Menu} from './components/menu/menu';

interface TweetInterface {
  id:number,
  contenido:string,
  token:string,
  fecha_creacion:string,
  tag1:string|null;
  tag2:string |null;
  tag3:string |null;
}

@Component({
  selector: 'app-trending-insights',
  imports: [
    RouterLink,
    AddTweet,
    DatePipe,
    NgClass,
    Menu
  ],
  templateUrl: './trending-insights.html',
  styleUrl: './trending-insights.scss',
})
export class TrendingInsights implements OnInit {
  // private sessionStorage= inject(SessionStorageService);
  // private cookieService= inject(AuthCookieService);
  // private router=inject(Router);
  private tweetsService= inject(TweetsService);

  openTweet= signal<boolean>(false);
  tweets = signal<TweetInterface[]>([])
  openMenu= signal<boolean>(false);
  busqueda= signal<string>('');

//3tags + el contenido
  tweetsFiltrados = computed(() => {
    const texto = this.busqueda().toLowerCase().trim();
    if (!texto) return this.tweets();
    return this.tweets().filter(t => {
      const enContenido = t.contenido.toLowerCase().includes(texto);
      const enTag1 = t.tag1?.toLowerCase().includes(texto) ?? false;
      const enTag2 = t.tag2?.toLowerCase().includes(texto) ?? false;
      const enTag3 = t.tag3?.toLowerCase().includes(texto) ?? false;
      return enContenido || enTag1 || enTag2 || enTag3;
    });
  });
  toggleMenu(){
    this.openMenu.update(state=>!state);
  }

  toggleTweet(){
    this.openTweet.update(state=>!state);
  }
  onTweetAnadido() {
    this.toggleTweet();
    this.cargarTweets();
  }
  ngOnInit() {
    this.cargarTweets();
  }
  cargarTweets() {
    this.tweetsService.getTweets().subscribe({
      next:(response) => this.tweets.set(response),
      error: (err) =>console.error('Error al cargar tweets:',err)
    })
  }

  getEstilo(tag:string|null):string{
    if(!tag) return '';
    if(tag.toLowerCase().includes('bullish')) return 'verde';
    if(tag.toLowerCase().includes('bearish')) return 'rojo';
    return 'blanco';
  }
}
