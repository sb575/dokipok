import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiDokipokService {

  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=50`);
  }

  getMoreData(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getPokemon(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  }


}
