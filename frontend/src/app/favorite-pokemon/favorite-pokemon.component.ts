import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiDokipokService } from '../api-dokipok.service';
import { BackendService } from '../backend.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-favorite-pokemon',
  templateUrl: './favorite-pokemon.component.html',
  styleUrls: ['./favorite-pokemon.component.scss']
})
export class FavoritePokemonComponent implements OnInit {


  pokemons: any[] = [];
  pokemones?: Pokemon[];
  pokemon?: Pokemon;

  add: Boolean = true;

  constructor(private data: ApiDokipokService, private route: ActivatedRoute, private backend: BackendService) { }

  ngOnInit(): void {
    this.route.url.subscribe( (object: any) => {
      if (object[0].path === "favorites") {
        this.add = false;
        this.getSavedPokemons();
      }
    });
  }

  getSavedPokemons(): void {

    this.backend.getSavedPokemons().subscribe( pokemones => {
      this.pokemons = [];
      for (let pokemon of pokemones) {
        console.log(pokemon.id)
        this.data.getPokemon(pokemon.id).subscribe((json:any) => {
          this.pokemons.push(json);
          console.log(this.pokemons);
        });
      }
    });
  }



}
