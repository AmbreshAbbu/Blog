package com.springboot.blogapp;

import com.springboot.blogapp.entity.Role;
import com.springboot.blogapp.repository.RoleRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class BlogAppApplication {
//implements CommandLineRunner
	@Bean
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}

	public static void main(String[] args) {
		SpringApplication.run(BlogAppApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer(){
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry){
				registry.addMapping("/**")
						.allowedOrigins("http://localhost:4200")
						.allowedMethods("*")
						.maxAge(3600L)
						.allowedHeaders("*")
						.exposedHeaders("Authorization")
						.allowCredentials(true);
			}
		};
	}

//	@Autowired
//	private RoleRepository roleRepository;

//	@Override
//	public void run(String... args) throws Exception {
//		Role adminRole = new Role();
//		adminRole.setName("ROLE_ADMIN");
//		roleRepository.save(adminRole);
//
//		Role userRole = new Role();
//		userRole.setName("ROLE_USER");
//		roleRepository.save(userRole);
//	}
}

