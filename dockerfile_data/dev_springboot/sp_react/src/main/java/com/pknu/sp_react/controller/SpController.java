package com.pknu.sp_react.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SpController {
    @GetMapping("/api")
    @ResponseBody
    public Map<String, String> Api() {
        Map<String, String> data = new HashMap<>();
        data.put("who", "data를 담아서 날립니다");
        System.out.println("요청으로 인해 데이터를 전송함");
        return data;
    }

    @GetMapping("/list")
    @ResponseBody
    public Map<String, String> Lists() {
        Map<String, String> data = new HashMap<>();
        data.put("list", "list를 담아서 날립니다");
        System.out.println("요청으로 인해 리스트트를 전송합니다");
        return data;
    }

    @PostMapping("/data")
    @ResponseBody
    public Map<String, String> ReceiveData(@RequestBody Map<String, String> payload){
        String username = payload.get("username");
        String password = payload.get("password");
        System.out.println("아이디: " + username + "/ 비번: " + password);
        Map<String, String> result = new HashMap<>();
        result.put("whour", username + "짱짱");
        result.put("whomi", username + "비밀");
        return result;
    }
}
