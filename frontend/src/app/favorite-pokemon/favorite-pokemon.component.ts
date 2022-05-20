import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDokipokService } from '../api-dokipok.service';
import { BackendService } from '../backend.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-favorite-pokemon',
  templateUrl: './favorite-pokemon.component.html',
  styleUrls: ['./favorite-pokemon.component.scss']
})
export class FavoritePokemonComponent implements OnInit {

  id: number | undefined;
  pokemons: any[] = [];
  pokemones?: Pokemon[];
  pokemon?: Pokemon;

  location?: String;
  add: Boolean = true;

  constructor(private data: ApiDokipokService, private route: ActivatedRoute, private backend: BackendService) { }

  ngOnInit(): void {
    this.route.url.subscribe( (object: any) => {
      if (object[0].path === "favorites") {
        this.add = false;
        this.getSavedPokemons();
      }
    })
  }

  getSavedPokemons(): void {

    this.backend.getSavedPokemons().subscribe( pokemones => {
      var ids: any;
      for (let pokemon of pokemones) {
        ids = pokemon.id;
      }
      this.data.getPokemon(ids!).subscribe((json:any) => {
        this.pokemones = json.pokemones;
      });
    })
  }

}
