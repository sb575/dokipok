import { ApiDokipokService } from './../api-dokipok.service';
import { TopPokemons } from './../topPokemons';
import { Component, OnInit } from '@angular/core';
import { SrapingService } from '../sraping.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  topPokemons?: TopPokemons[];

  constructor(  private data: ApiDokipokService,
    private scraping: SrapingService) { }

  ngOnInit(): void {
    this.getTopPokemons();
  }
  getTopPokemons(): void {
    this.scraping.getTopPokemons().subscribe( topPokemons => this.topPokemons = topPokemons );
  }

}
