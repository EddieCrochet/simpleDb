-- never gets run here... simply for notes...

-- YOUSIF'S user table
-- create table appUsers (
--     id int not null autoincrement,
--     username varchar(50) not null unique,
--     fullname varchar(100),
--     email varchar(100) not null unique,
--     password varchar(100),
--     primary key id
-- ) ENGINE=InnoDB;

-- created my table for the users in sql
create table appUsers(
    id serial primary key,
    username varchar(50) not null unique,
    fullname varchar(100),
    email varchar(100) not null unique,
    password varchar(100)
)