import { tap } from 'rxjs/operators';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private pokemonsUrl = 'https://dokipok.herokuapp.com/api/pokemons';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private _refresh$ = new Subject<void>();

  constructor( private http: HttpClient ) { }

  get refresh$(){
    return this._refresh$;
  }

  getSavedPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl);
  }

  save(pokemon: Pokemon): Observable<Pokemon>  {
    return this.http.post<Pokemon>(this.pokemonsUrl, pokemon, this.httpOptions).pipe(
      tap( () => {
        this._refresh$.next();
      })
    )
  }

  remove(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.delete<Pokemon>(this.pokemonsUrl+"/"+pokemon.id, this.httpOptions);
  }
}
