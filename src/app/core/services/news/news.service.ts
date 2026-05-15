import { Injectable } from '@angular/core';
import{environment} from '../../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Noticias {
  id: number;
  titulo: string;
  url: string;
  fuente:string;
  fecha:string;
  monedas:string[];
  sentimiento:boolean; //true = bullish, false = bearish/ o neutro
}
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private URL = environment.apiURL;
  constructor(private http: HttpClient) {

  }
  getNoticias(currencies?: string):  Observable<Noticias[]>{
    const params :any={};
    if(currencies)  params['currencies']= currencies;
    return this.http.get<Noticias[]>(`${this.URL}/news/` , {params});
  }
}
