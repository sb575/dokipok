package com.example.demo.controller;

import com.example.demo.entity.Pokemon;
import com.example.demo.repository.PokemonRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pokemons")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PokemonController {
    @Autowired
    PokemonRepository pokemonRepo;

    @RequestMapping("")
    public ResponseEntity<Object> findUsers() {
        return ResponseEntity.ok(pokemonRepo.findAll());
    }

    @PostMapping("")
    public Pokemon newPokemon(@RequestBody Pokemon pokemon) {
        return pokemonRepo.save(pokemon);
    }

    @GetMapping("/{id}")
    public Pokemon one(@PathVariable long id) throws Exception {
        return pokemonRepo.findById(id).orElseThrow(() -> new Exception("id not found - " + id));
    }

    @DeleteMapping("/{id}")
    void deletePokemon(@PathVariable long id) {
        pokemonRepo.deleteById(id);
    }
}
