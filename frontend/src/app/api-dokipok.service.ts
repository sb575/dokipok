import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiDokipokService {

  private dokipokUrl = 'https://pokeapi.co/api/v2/pokemon/';
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      })
    }
  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=85`);
  }

  getMoreData(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

 /* getPokemon(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  }*/

  getPokemon(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.dokipokUrl + id, this.httpOptions);
  }

  /*savePokemon(id: number){
    return this.http.post(`https://pokeapi.co/api/v2/pokemon/${id}`, );
  }*/

  getEvolution(id: number){
    return this.http.get(`https://pokeapi.co/api/v2/evolution-chain/${id}/`);
  }

  getSpecies(id: number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);

  }

}
