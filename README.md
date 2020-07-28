# CRUD2

Um sistema simples de gestao de alunos, feito em PHP e JavaScript, onde se adiciona, deleta e pesquisa no banco de dados MySQL  
Para rodar o sistema, abra o mysql workbench ou abra o mysql no terminal, execute os comandos:  
1. CREATE DATABASE alunos;  
2. CREATE TABLE alunos(  
	id int auto_increment primary key,  
	nome varchar(255),  
	email varchar(255),  
	telefone varchar(100),  
	endereco varchar(255)  
);  
3. CREATE USER gerente@localhost IDENTIFIED BY '123456789';  
4. GRANT ALL ON alunos.* TO 'gerente'@'localhost' IDENTIFIED BY '123456789';  
5. FLUSH PRIVILEGES;  
