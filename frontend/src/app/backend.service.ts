import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private pokemonsUrl = 'http://localhost:8081/api/pokemons';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })


  };

  constructor( private http: HttpClient ) { }

  getSavedPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl);
  }

  save(pokemon: Pokemon): Observable<Pokemon>  {
    return this.http.post<Pokemon>(this.pokemonsUrl, pokemon, this.httpOptions);
  }

  remove(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.delete<Pokemon>(this.pokemonsUrl+"/"+pokemon.id, this.httpOptions);
  }
}
