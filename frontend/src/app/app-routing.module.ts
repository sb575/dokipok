import { PokemonCardDetailComponent } from './pokemon-card-detail/pokemon-card-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'details/:id', component: PokemonCardDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
