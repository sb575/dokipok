import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTabsComponent } from './menu-tabs/menu-tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { AboutComponent } from './about/about.component';
import { PokemonCardDetailComponent } from './pokemon-card-detail/pokemon-card-detail.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list'
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { CustomHttpInterceptor } from './hhtp-interceptor';
import { FavoritePokemonComponent } from './favorite-pokemon/favorite-pokemon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FlipModule } from 'ngx-flip';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuTabsComponent,
    SearchBarComponent,
    PokemonCardComponent,
    PokemonListComponent,
    AboutComponent,
    PokemonCardDetailComponent,
    SpinnerComponent,
    FavoritePokemonComponent,
    NavbarComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgSelectModule,
    NgMultiSelectDropDownModule,
    MatChipsModule,
    MatCheckboxModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    FlipModule


  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
