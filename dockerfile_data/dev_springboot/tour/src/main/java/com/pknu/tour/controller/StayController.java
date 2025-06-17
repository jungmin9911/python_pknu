package com.pknu.tour.controller;

import com.pknu.tour.dto.StayDTO;
import com.pknu.tour.service.StayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class StayController {

    @Autowired
    private StayService stayService;

    @GetMapping("/stay")
    public String getStayList(Model model) {
        List<StayDTO> list = stayService.getStayList();
        model.addAttribute("stayList", list);
        return "stayList"; // stayList.html
    }
}
