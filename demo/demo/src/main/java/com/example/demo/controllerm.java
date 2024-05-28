package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class controllerm {
    @GetMapping("/hi")
    public String show(Model model){
        return "hello";
    }
}
