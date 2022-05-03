package com.example.demo.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.Length;


@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotBlank(message = "Name is mandatory")
    @Length(max = 30)
    private String name;

    @Email
    @NotBlank(message = "Email is mandatory")
    @Length(max = 30)
    private String email;

    @NotBlank(message = "Password is mandatory")
    @Length(max = 30)
    private String password;
    

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Pokemon> pokemons;

    public User() {}

    public User(String name, String email, String password, String token, List<Pokemon> pokemons) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.pokemons = pokemons;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public List<Pokemon> getPokemons() {
        return pokemons;
    }

    public void setPokemons(List<Pokemon> pokemons) {
        this.pokemons = pokemons;
    }

    @Override
    public String toString() {
        return "User: " + id + "\nName: " + name + "\nEmail: " + email + 
            "\nPassword: " + password;
    }

}