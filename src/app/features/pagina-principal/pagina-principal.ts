import { Component, OnInit, signal } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { NewsService, Noticias} from '../../core/services/news/news.service';
import {AuthCookieService} from '../../core/services/cookies/auth-cookie.service';
import {SessionStorageService} from '../../core/services/sessions/session-storage.service';
//penre
@Component({
  selector: 'app-pagina-principal',
  imports: [NgClass, DatePipe],
  templateUrl: './pagina-principal.html',
  styleUrl: './pagina-principal.scss',
})
export class PaginaPrincipal implements OnInit {
  isLoggedIn = signal<boolean>(false);
  nombreDeUsuario = signal<string | null>(null);

  noticias = signal<Noticias[]>([]);
  cargando = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(private newsService: NewsService,
              private cookieService: AuthCookieService ,
              private sessionService :SessionStorageService) {
    this.ponerDatos(cookieService, sessionService);

  }

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
  private ponerDatos(cookieService: AuthCookieService, sessionService: SessionStorageService) {
    if (cookieService.get('cryptoHex_online_token')) {
      this.isLoggedIn.set(true);
      let datos = sessionService.get('cryptoHex_datos');
      if (datos) {
        this.nombreDeUsuario.set(datos.nombre);
      }

    }
  }
}


