package com.pknu.tour.controller;

import com.pknu.tour.service.MapService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/kakao")
public class MapController {

    private final MapService mapService;

    public MapController(MapService mapService) {
        this.mapService = mapService;
    }

    @GetMapping("/restaurants")
    public ResponseEntity<String> getRestaurants(
        @RequestParam String keyword,
        @RequestParam double x,
        @RequestParam double y
    ) {
        String result = mapService.getRestaurants(keyword, x, y);
        return ResponseEntity.ok(result);
    }
}
