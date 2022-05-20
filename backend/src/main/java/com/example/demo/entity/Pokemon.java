package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
//import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "pokemon")
public class Pokemon {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
  
    /*@NotBlank(message = "Name is mandatory")
    private String name;*/

    public Pokemon() {}


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

   /* public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
*/

    @Override
    public String toString() {
        return "Pokemon: [id=" + id + "]";
    }

}
