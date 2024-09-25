package com.weslaine.backend.services;

import org.springframework.stereotype.Service;

import com.weslaine.backend.dtos.LoginDTO;
import com.weslaine.backend.dtos.MessageResponseDTO;

@Service
public class LoginService {

    public MessageResponseDTO login(LoginDTO loginDTO) {
        if ("weslaine@test".equals(loginDTO.email()) && "Senha1234".equals(loginDTO.senha())) {

            return new MessageResponseDTO("login feito com sucesso");

        }

        return new MessageResponseDTO("Senha incorreta");
    }
}