package com.pknu.portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

// import java.util.List;

@Controller
public class MyController {
    @GetMapping("/")
    public String mainPage(Model model){
        return "portfolio";
    }
}
