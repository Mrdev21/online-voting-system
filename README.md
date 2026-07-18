# 🗳️ Online Voting System

A secure and role-based Online Voting System built using **Spring Boot**, **Spring Security**, **JWT Authentication**, and **MySQL**. This project provides a secure platform where voters can cast their vote only once, while administrators can manage candidates and election data.

---

## 🚀 Features

### 🔐 Authentication & Authorization
- User Registration
- Secure Login using JWT
- BCrypt Password Encryption
- Role-Based Access Control (ADMIN & VOTER)

### 👨‍💼 Admin Features
- Add Candidate
- Update Candidate
- Delete Candidate
- View All Candidates
- View Election Results
- View Winner

### 🗳️ Voter Features
- Secure Login
- View Candidate List
- Cast Vote
- One User = One Vote Validation
- View Election Results

### 📊 Result Module
- View Candidate-wise Vote Count
- Display Election Winner

### 📖 API Documentation
- Swagger UI Integration

---

# 🛠️ Tech Stack

### Backend
- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT Authentication
- Maven

### Database
- MySQL

### API Documentation
- Swagger / OpenAPI

---

# 📂 Project Structure

```
src
├── controller
├── service
├── repository
├── entity
├── dto
├── config
├── security
├── exception
└── resources
```

---

# 🔒 Security Features

- JWT Authentication
- Stateless Session Management
- BCrypt Password Hashing
- Protected REST APIs
- Role-Based Authorization
- Password Hidden using `@JsonIgnore`

---

# 📌 REST APIs

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |

---

## Candidate

| Method | Endpoint |
|---------|----------|
| GET | /api/candidates |
| GET | /api/candidates/{id} |
| POST | /api/candidates |
| PUT | /api/candidates/{id} |
| DELETE | /api/candidates/{id} |

---

## Vote

| Method | Endpoint |
|---------|----------|
| POST | /api/votes |

---

## Results

| Method | Endpoint |
|---------|----------|
| GET | /api/results |
| GET | /api/results/winner |

---

# 📷 Swagger

After running the project:

```
http://localhost:8080/swagger-ui/index.html
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/online-voting-system.git
```

---

## Navigate

```bash
cd online-voting-system
```

---

## Configure Database

Update your `application.properties`

```properties
spring.datasource.url=YOUR_DATABASE_URL
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```

---

## Run Project

```bash
mvn spring-boot:run
```

---

# 📌 Future Enhancements

- React Frontend
- Election Start/End Scheduling
- Email Notifications
- Admin Dashboard Analytics
- Docker Support
- Cloud Deployment
- Audit Logs

---

# 👨‍💻 Author

**Himanshu Chaudhari**

B.Tech CSE (Artificial Intelligence)

GitHub: https://github.com/your-username

LinkedIn: https://linkedin.com/in/your-profile

---

# ⭐ If you like this project

Give this repository a ⭐ on GitHub.
