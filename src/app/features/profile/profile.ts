import {Component, inject, signal, output, OnInit} from '@angular/core';
//re
import {SessionStorageService} from '../../core/services/sessions/session-storage.service';
import {AuthCookieService} from '../../core/services/cookies/auth-cookie.service';
import {Router, RouterLink} from '@angular/router';
import {DatePipe, NgClass} from '@angular/common';
import {TweetsService} from '../../core/services/tweets/tweets.service';

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
  selector: 'app-profile',
  imports: [
    RouterLink,
    NgClass,
    DatePipe,
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnInit {
  fnToggleProfile= output();
  private sessionStorage= inject(SessionStorageService);
  private cookieService= inject(AuthCookieService);
  private router=inject(Router);
  private tweetsService= inject(TweetsService);

  nombreDeUsuario = signal<string |null>(null)
  emailDeUsuario = signal<string |null>(null)
  tweets = signal<TweetInterface[]>([])

  constructor() {
    const datos = this.sessionStorage.get('cryptoHex_datos');
    if(datos){
      this.nombreDeUsuario.set(datos.nombre)
      this.emailDeUsuario.set(datos.email)
    }
  }
  ngOnInit() {
    this.tweetsService.getUserTweets().subscribe({
      next:(response) => this.tweets.set(response),
      error: (err) =>console.error('Error al cargar tweets:',err)
      })
  }
  logout(){
    this.cookieService.removeAll();
    this.sessionStorage.removeAll();
    this.router.navigate(['/']);
  }
  getEstilo(tag:string|null):string{
    if(!tag) return '';
    if(tag.toLowerCase().includes('bullish')) return 'verde';
    if(tag.toLowerCase().includes('bearish')) return 'rojo';
    return 'blanco';
  }
  borrarTweet(id: number){
    this.tweetsService.borrarTweet(id).subscribe({
      next: () => this.tweets.update(lista => lista.filter(t => t.id !== id)),
    });
  }


}
