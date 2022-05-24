package com.example.demo.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.example.demo.dto.TopPokemonsDataDto;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Component;

@Component("topPokemonsDataService")
public class TopPokemonsDataService {
    public List<TopPokemonsDataDto> retrieveTopPokemonsData() {

        List<TopPokemonsDataDto> topPokemonsData = new ArrayList<>();

        try {
            Document webPage = Jsoup.connect("https://www.kawaiionline.top/blog/los-pokemon-mas-poderosos/").get();

            List<Element> divs = webPage.getElementsByClass("wp-block-image");

            for (Element div : divs) {
                String title = div.previousElementSibling().getElementsByTag("h3").get(0).getElementsByTag("strong").text();
                String image = div.getElementsByTag("img").get(0).attr("src");
                String description = div.nextElementSibling().getElementsByTag("p").get(0).text();
                
                topPokemonsData.add(new TopPokemonsDataDto(title, image, description));
            }
            return topPokemonsData;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}