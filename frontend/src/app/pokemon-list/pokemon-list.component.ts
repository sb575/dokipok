import { ApiDokipokService } from './../api-dokipok.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = []
  private AllPokemons:any = this.pokemons
  name: string | undefined


  constructor(private data: ApiDokipokService) { }

  ngOnInit(): void {
    this.data.getPokemons()
    .subscribe((response: any) => {
      response.results.forEach((result: { name: string; }) => {
        this.data.getMoreData(result.name)
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

}
