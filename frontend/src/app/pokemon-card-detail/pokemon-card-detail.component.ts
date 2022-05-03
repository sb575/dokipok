import { ApiDokipokService } from './../api-dokipok.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-pokemon-card-detail',
  templateUrl: './pokemon-card-detail.component.html',
  styleUrls: ['./pokemon-card-detail.component.scss']
})
export class PokemonCardDetailComponent implements OnInit {

  id: number | undefined;
  pokemons: any[] = []

  constructor(private data: ApiDokipokService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let param =  params.get('id')
      if(param)
       this.id = parseInt(param);
       this.getInfo();

     })
  }

  getInfo(){
    if(this.id) this.data.getPokemon(this.id)
      .subscribe(
        (data: any) => {
          this.pokemons.push(data);
          console.log(this.pokemons);

      })
  }



}
