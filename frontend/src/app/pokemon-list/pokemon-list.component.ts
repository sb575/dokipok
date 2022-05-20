import { Pokemon } from './../pokemon';
import { ApiDokipokService } from './../api-dokipok.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = []
  private AllPokemons:any = this.pokemons
  name: string | undefined
  pokemon?: Pokemon;


  constructor(private data: ApiDokipokService,  private backend: BackendService) { }

  ngOnInit(): void {
    this.data.getPokemons()
    .subscribe((response: any) => {
      response.results.forEach((result: { name: string}) => {
        if(result.name) this.data.getMoreData(result.name)
        .subscribe((uniqResponse: any) => {
          this.pokemons.push(uniqResponse);
          console.log(this.pokemons);
        });
      });
    });

  }


  getSearch(value: string){
    const filter = this.AllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.pokemons = filter
  }

  save(): void {
    if (this.pokemon) {
      this.backend.save(this.pokemon).subscribe();
    }
  }

  remove(): void {
    if (this.pokemon) {
      this.backend.remove(this.pokemon).subscribe( () => window.location.reload());
    }
  }

}
