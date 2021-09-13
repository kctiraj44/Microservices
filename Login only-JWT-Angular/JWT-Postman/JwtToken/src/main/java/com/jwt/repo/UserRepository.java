package com.jwt.repo;

import com.jwt.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<User,Long> {

//username and it will return the user of that all the information from the database

    public User findByUsername(String username);


}