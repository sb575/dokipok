import { FavoritePokemonComponent } from './favorite-pokemon/favorite-pokemon.component';
import { PokemonCardDetailComponent } from './pokemon-card-detail/pokemon-card-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemons' },
  { path: 'topPokemons', component: AboutComponent },
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemons/:id', component: PokemonCardDetailComponent},
  { path: 'favorites', component: FavoritePokemonComponent},
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
