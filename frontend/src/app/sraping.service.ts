import { TopPokemons } from './topPokemons';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SrapingService {

  private topPokemonsUrl = 'https://dokipok.herokuapp.com/api/topPokemons/data';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor( private http: HttpClient ) { }

  getTopPokemons(): Observable<TopPokemons[]> {
    return this.http.get<TopPokemons[]>(this.topPokemonsUrl);
  }
}
