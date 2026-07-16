
package com.evoting.online_voting_system.config;

import com.evoting.online_voting_system.security.JwtAuthenticationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .csrf(csrf -> csrf.disable())
                .cors(cors -> {})
                .sessionManagement(session ->
                        session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(auth -> auth

                        .requestMatchers("/api/auth/**").permitAll()

                        .requestMatchers(
                                "/v3/api-docs/**",
                                "/swagger-ui/**",
                                "/swagger-ui.html"
                        ).permitAll()

                        .requestMatchers("/uploads/**").permitAll()

                        .requestMatchers("/api/upload/**")
                        .permitAll()

                        .requestMatchers(HttpMethod.POST, "/api/candidates")
                        .permitAll()

                        .requestMatchers(HttpMethod.PUT, "/api/candidates/**")
                        .hasRole("ADMIN")

                        .requestMatchers(HttpMethod.DELETE, "/api/candidates/**")
                        .hasRole("ADMIN")

                        .requestMatchers(HttpMethod.GET, "/api/candidates/**")
                        .hasAnyRole("ADMIN", "VOTER")

                        .requestMatchers(HttpMethod.GET, "/api/results/**")
                        .permitAll()

                        .requestMatchers(HttpMethod.GET, "/api/elections/**")
                        .permitAll()

                        .requestMatchers(HttpMethod.POST, "/api/elections")
                        .hasRole("ADMIN")

                        .requestMatchers(HttpMethod.PUT, "/api/elections/**")
                        .hasRole("ADMIN")

                        .requestMatchers(HttpMethod.DELETE, "/api/elections/**")
                        .hasRole("ADMIN")

                        .requestMatchers(HttpMethod.GET, "/api/users/me")
                        .hasAnyRole("ADMIN", "VOTER")

                        .requestMatchers(HttpMethod.PUT, "/api/users/me")
                        .hasAnyRole("ADMIN", "VOTER")

                        .requestMatchers(HttpMethod.POST, "/api/votes")
                        .hasRole("VOTER")

                        .requestMatchers(HttpMethod.GET, "/api/dashboard/stats")
                        .permitAll()

                        .requestMatchers(HttpMethod.GET, "/api/notifications")
                        .hasAnyRole("ADMIN","VOTER")

                        .requestMatchers(HttpMethod.PUT, "/api/notifications/read")
                        .hasAnyRole("ADMIN","VOTER")

                        .anyRequest().authenticated()
                )
                .addFilterBefore(jwtAuthenticationFilter,
                        UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {

        CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowedOrigins(List.of("http://localhost:5173"));

        configuration.setAllowedMethods(List.of(
                "GET",
                "POST",
                "PUT",
                "DELETE",
                "OPTIONS"
        ));

        configuration.setAllowedHeaders(List.of("*"));

        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source =
                new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration("/**", configuration);

        return source;
    }
}


