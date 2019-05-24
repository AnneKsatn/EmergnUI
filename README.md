
# UI
Реализован с помощью AngularJS
"http://localhost:4200/login"

# RestAPI

Реализован с помощью Spring Boot.
https://github.com/AnneKsatn/EmergnRestAPI
Слушает запросы от "http://localhost:4200"
Посмотреть результат запроса к БД можно на "http://localhost:8080/users"

# БД 

PostgreSQL. Необходимо:

1. Установить PostgreSQL
2. Создать бд "emergn" 
3. Создать таблицу "users"

CREATE TABLE users
(
    Id SERIAL PRIMARY KEY,
    Email CHARACTER VARYING(30),
    Login CHARACTER VARYING(30),
    Password CHARACTER VARYING(30),
	Name CHARACTER VARYING(30)
);
