import { Component, OnInit, signal } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { NewsService, Noticias} from '../../core/services/news/news.service.';
//penre
@Component({
  selector: 'app-pagina-principal',
  imports: [NgClass, DatePipe],
  templateUrl: './pagina-principal.html',
  styleUrl: './pagina-principal.scss',
})
export class PaginaPrincipal implements OnInit {
  noticias = signal<Noticias[]>([]);
  cargando = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNoticias().subscribe({
      next: (response) => {
        this.noticias.set(response);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error cargando noticias:', err);
        this.error.set('No se pudieron cargar las noticias');
        this.cargando.set(false);
      },
    });
  }

  getSentimientoClass(sentimiento: boolean): string {
    return sentimiento ? 'verde' : 'rojo';
  }

  getSentimientoTexto(sentimiento: boolean): string {
    return sentimiento ? 'Bullish' : 'Bearish';
  }
}
