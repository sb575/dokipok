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
            Element article = webPage.getElementById("post-1586").getElementsByTag("article").get(0);

            List<Element> divs = article.getElementsByClass("inside-article");

            for (Element div : divs) {
                String title = div.getElementsByTag("h3").get(0).getElementsByTag("strong").text();
                String image = div.getElementsByTag("img").get(1).attr("src");
                String description = div.getElementsByTag("p").get(3).text();
                
                topPokemonsData.add(new TopPokemonsDataDto(title, image, description));
            }
            return topPokemonsData;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}