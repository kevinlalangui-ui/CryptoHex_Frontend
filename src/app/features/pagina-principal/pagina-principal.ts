import {Component, OnInit, signal} from '@angular/core';
import {DatePipe, NgClass} from '@angular/common';
import {TweetsService} from '../../core/services/tweets/tweets.service';

interface TweetInterface {//AQUI EL ERROR
  id: number;
  contenido: string;
  token: string;
  fecha_creacion: string;
  tag1: string|null;
  tag2: string|null;
  tag3: string|null;
}
@Component({
  selector: 'app-pagina-principal',
  imports: [NgClass, DatePipe],
  templateUrl: './pagina-principal.html',
  styleUrl: './pagina-principal.scss',
})
export class PaginaPrincipal implements OnInit {
  tweets= signal<TweetInterface[]>([]);
  constructor(private tweetsService: TweetsService) {

  }
  ngOnInit() {
    this.tweetsService.getTweets().subscribe({
      next: response => {
        this.tweets.set(response);
      },
      error: (err) => console.error('Error caragarndo los tweets:',err),
    })
  }
  getEstilo(tag:string| null):string{
    if(!tag) return '';
    if (tag.toLowerCase() === 'bullish') return 'verde';
    if(tag.toLowerCase() ==='bearish') return 'rojo';
    return 'blanco';

  }
}
