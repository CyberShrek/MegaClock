package com.example.clock.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class PlaygroundController {

    @GetMapping
    fun getPlaygroundPage(): String{
        return "html/playground.html"
    }
}