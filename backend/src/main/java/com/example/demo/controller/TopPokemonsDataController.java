package com.example.demo.controller;

import java.util.List;

import com.example.demo.dto.TopPokemonsDataDto;
import com.example.demo.services.TopPokemonsDataService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
@RequestMapping("/topPokemons")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TopPokemonsDataController {
    
    @Autowired
    private TopPokemonsDataService topPokemonsDataService;

    @GetMapping("data")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<List<TopPokemonsDataDto>> getTopPokemonsData() {
        return new ResponseEntity<List<TopPokemonsDataDto>>(topPokemonsDataService.retrieveTopPokemonsData(), HttpStatus.OK);
    }
}