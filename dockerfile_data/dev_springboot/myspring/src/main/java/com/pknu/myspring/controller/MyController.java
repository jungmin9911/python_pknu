package com.pknu.myspring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotaion.GetMapping;

// import java.util.List;

@Controller
public class MyController {
    @GetMapping("/")
    public String mainPage(Model model){
        return "index";
    }
}
