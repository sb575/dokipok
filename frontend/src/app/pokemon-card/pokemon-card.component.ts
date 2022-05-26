import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiDokipokService } from '../api-dokipok.service';
import { BackendService } from '../backend.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Output() refresh: EventEmitter<String> = new EventEmitter();


  @Input() id?:number;
  pokemons: any[] = []
  name: string | undefined
  pokemon?: any;
  pokemones?: Pokemon;


  constructor(private data: ApiDokipokService, private route: ActivatedRoute, private backend: BackendService) { }


  ngOnInit(): void {

     this.data.getPokemon(this.id!).subscribe( (pokemon) => {
      this.pokemon=pokemon;
    });
  }


  remove(): void {
    if (this.pokemon) {
      this.backend.remove(this.pokemon).subscribe( () => this.refresh.emit());
    }
  }


}
