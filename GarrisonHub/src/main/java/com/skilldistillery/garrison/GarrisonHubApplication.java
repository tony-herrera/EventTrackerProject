package com.skilldistillery.garrison;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class GarrisonHubApplication extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(GarrisonHubApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(GarrisonHubApplication.class, args);
	}

}
