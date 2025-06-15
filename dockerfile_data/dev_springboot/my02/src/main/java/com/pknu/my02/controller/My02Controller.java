package com.pknu.my02.controller;

// import java.util.HashMap;
// import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class My02Controller {
    @GetMapping("/api")
    public String Api(Model model) {
        model.addAttribute("who", "friend");
        model.addAttribute("passkey", "ok-key");
        return "index";
    }

    // @PostMapping("/data")
    // @ResponseBody
    // public Map<String, String> Rdata(@RequestParam String username, @RequestParam String password) {
    //     System.out.println("이름: " + username + " / 비번: " + password);
    //     Map<String, String> result = new HashMap<>();
    //     result.put("username", username);
    //     result.put("password", password);
    //     return result;
    // }
}