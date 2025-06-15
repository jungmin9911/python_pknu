package com.pknu.pknu_test.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TtController {
    @GetMapping("/api")
    @ResponseBody
    public Map<String, Object> Api() {
        Map<String, Object> data = new HashMap<>();
        data.put("who", "이름");
        data.put("age", 20);
        data.put("memo", "메모");
        System.out.println("요청으로 인해 데이터를 전송함");
        return data;
    }

    @GetMapping("/list")
    @ResponseBody
    public List<String> getLists() {
        return List.of("사과", "딸기", "바나나");
    }

    @PostMapping("/data")
    @ResponseBody
    public Map<String, Object> handlePost(@RequestBody Map<String, Object> payload) {
        String name = payload.get("name").toString();
        int age = Integer.parseInt(payload.get("age").toString());
        String memo = payload.get("memo").toString();
        Map<String, Object> result = new HashMap<>();
        result.put("name", name + "님");
        result.put("age", age + 1);
        result.put("memo", memo + " 라고 잘받았습니다");
        return result;
    }

}
