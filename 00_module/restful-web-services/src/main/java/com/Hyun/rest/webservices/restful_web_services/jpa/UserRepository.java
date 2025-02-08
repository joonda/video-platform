package com.Hyun.rest.webservices.restful_web_services.jpa;

import com.Hyun.rest.webservices.restful_web_services.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
