import { Pokemon } from './../pokemon';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDokipokService } from '../api-dokipok.service';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-favorite-pokemon',
  templateUrl: './favorite-pokemon.component.html',
  styleUrls: ['./favorite-pokemon.component.scss']
})
export class FavoritePokemonComponent implements OnInit {


  @Output() refresh: EventEmitter<String> = new EventEmitter();

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
        this.refresh.emit();
      }
    })
  }

  getSavedPokemons(): void {

    this.backend.getSavedPokemons().subscribe( pokemones => {
      this.pokemons = [];
      for (let pokemon of pokemones) {
        this.data.getPokemon(pokemon.id).subscribe((json:any) => {
          this.pokemons.push(json);
          console.log(this.pokemons)
        });
      }
    });
  }
}
