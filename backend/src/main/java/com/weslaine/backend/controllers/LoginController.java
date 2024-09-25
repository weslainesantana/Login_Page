package com.weslaine.backend.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.weslaine.backend.dtos.LoginDTO;
import com.weslaine.backend.dtos.MessageResponseDTO;
import com.weslaine.backend.services.LoginService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
// Endpoint onde a gente vai comentar
@RequestMapping("/login") // http://localhost:/8080/login POST >> criar GET >> pegar PUT >> atualizar
                          // DELETE >> deletar

public class LoginController {
    // pra gente trabalhar com as coisas que tem dentro da classe loginService
    private final LoginService loginService;

    @PostMapping
    public MessageResponseDTO login(@RequestBody LoginDTO loginDTO) {
        return loginService.login(loginDTO);
    }

}