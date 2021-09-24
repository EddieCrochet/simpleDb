-- never gets run here... simply for notes...

-- user table
create table appUsers {
    id int not null autoincrement,
    username not null unique,
    fullnam varchar(100),
    email varchar(100) not null unique,
    password varcchar(100),
    primary key id
} ENGINE=InnoDB;