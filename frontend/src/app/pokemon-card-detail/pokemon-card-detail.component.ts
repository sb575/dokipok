import { Pokemon } from './../pokemon';
import { ApiDokipokService } from './../api-dokipok.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackendService } from '../backend.service';


@Component({
  selector: 'app-pokemon-card-detail',
  templateUrl: './pokemon-card-detail.component.html',
  styleUrls: ['./pokemon-card-detail.component.scss']
})
export class PokemonCardDetailComponent implements OnInit {

  @Output() refresh: EventEmitter<String> = new EventEmitter();

  @Input() id?:number;
  pokemons: any[] = [];
  species: any[] = [];
  evolutions: any[] = [];
  pokemones?: Pokemon[];
  pokemon?: Pokemon;
  @Input() add?: Boolean;


  constructor(private data: ApiDokipokService, private route: ActivatedRoute, private backend: BackendService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let param =  params.get('id')
      if(param)
       this.id = parseInt(param);
       this.getEvolutions();
       this.getSpecies();
       this.getInfo();
     });

     this.data.getPokemon(this.id!).subscribe( (pokemon) => {
      this.pokemon=pokemon;
    });
  }

  getEvolutions(){
    if(this.id){
    this.data.getEvolution(this.id)
    .subscribe( (data: any) => {
      this.evolutions.push(data);
      console.log(this.evolutions);
    })
  }
  }

  getSpecies(){
    if(this.id){
    this.data.getSpecies(this.id)
    .subscribe( (data: any) => {
      this.species.push(data);
      console.log(this.species);
    })
  }
  }

  getInfo(){
    if(this.id) this.data.getPokemon(this.id)
      .subscribe(
        (data: any) => {
          this.pokemons.push(data);
          console.log(this.pokemons);

      });
  }



  save(): void {
    if (this.pokemon) {
      this.backend.save(this.pokemon).subscribe(() => this.refresh.emit());
    }
  }



}
