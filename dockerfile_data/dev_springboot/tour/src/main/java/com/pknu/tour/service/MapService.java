package com.pknu.tour.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class MapService {
    private final WebClient webClient;

    public MapService() {
        this.webClient = WebClient.builder()
                .baseUrl("https://dapi.kakao.com")
                .defaultHeader("Authorization", "KakaoAK REST_API키")
                .build();
    }

    public String getRestaurants(String keyword, double x, double y) {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/v2/local/search/keyword.json")
                        .queryParam("query", keyword)
                        .queryParam("x", x)
                        .queryParam("y", y)
                        .queryParam("radius", 2000)
                        .queryParam("category_group_code", "FD6") // 음식점
                        .build())
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
