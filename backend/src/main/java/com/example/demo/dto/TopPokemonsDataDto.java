package com.example.demo.dto;

public class TopPokemonsDataDto {
    public String image;
    public String title;
    public String description;

    public TopPokemonsDataDto() {
    }

    public TopPokemonsDataDto(String title, String image,  String description) {
        this.title = title;
        this.image = image;
        this.description = description;
    }
}