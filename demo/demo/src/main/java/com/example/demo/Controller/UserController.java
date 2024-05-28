package com.example.demo.Controller;

import com.example.demo.Entity.Role;
import com.example.demo.Entity.User;
import com.example.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/createUser")
    public User createUser() {
        User user = User.userBuilder()
                .username("Admin@gmail.com")
                .password("Admin2024")
                .name("WAHMANE Saida")
                .createTime(LocalDateTime.now())
                .role(Role.ADMIN) // Assurez-vous que le rôle est défini
                .phone("1234567890")
                .adresse("123 Test St")
                .build();

        return userService.saveUser(user);
    }
}
