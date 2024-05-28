package com.example.demo.JWTAuthentication.Service;

import java.util.Optional;

import com.example.demo.Entity.User;

public interface UserService {
    User SaveUser(User user);
    Optional<User> findByUsername(String username);
   // void MakeAdmin(String username);
    
}
