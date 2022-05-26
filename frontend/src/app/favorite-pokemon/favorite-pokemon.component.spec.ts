import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePokemonComponent } from './favorite-pokemon.component';

describe('FavoritePokemonComponent', () => {
  let component: FavoritePokemonComponent;
  let fixture: ComponentFixture<FavoritePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
