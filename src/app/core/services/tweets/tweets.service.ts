import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TweetsService {
  private URL= environment.apiURL;

  constructor(private http:HttpClient) {
  }
  enviarTweet(datos:any):Observable<any>{
    return this.http.post<any>(`${this.URL}/custom-tweet/`, datos)
  }
  getTweets():Observable<any[]>{
    return this.http.get<any>(`${this.URL}/tweets/`)//get/api/tweets
  }
}
