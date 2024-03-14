const mysql = require('mysql');
const md5 = require('md5');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'library'
});


connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the database!');
});


// Create users table
const createUsersTable = _ => {
    const sql = `CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        session CHAR(32) NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        role ENUM('admin', 'user', 'lib') NOT NULL DEFAULT 'user',
        password VARCHAR(32) NOT NULL
    )`;
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Users table created');
    });
};

// Create authors table
const createAuthorsTable = _ => {
    const sql = `CREATE TABLE IF NOT EXISTS authors (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        surname VARCHAR(100) NOT NULL,
        nickname VARCHAR(100) NULL,
        born DATE NOT NULL
    )`;
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Authors table created');
    });
};

// Create books table
const createBooksTable = _ => {
    const sql = `CREATE TABLE IF NOT EXISTS books (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        pages INT(5) NOT NULL,
        genre VARCHAR(100) NOT NULL,
        author_id INT NOT NULL,
        FOREIGN KEY (author_id) REFERENCES authors(id)
    )`;
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Books table created');
    });
};

// Create heroes table
const createHeroesTable = _ => {
    const sql = `CREATE TABLE IF NOT EXISTS heroes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        good BOOLEAN NOT NULL DEFAULT 1,
        image VARCHAR(200) NULL,
        book_id INT NOT NULL,
        FOREIGN KEY (book_id) REFERENCES books(id)
    )`;
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Heroes table created');
    });
};

// Drop users table
const dropUsersTable = _ => {
    const sql = 'DROP TABLE IF EXISTS users';
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Users table dropped');
    });
};

// Drop authors table
const dropAuthorsTable = _ => {
    const sql = 'DROP TABLE IF EXISTS authors';
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Authors table dropped');
    });
};

// Drop books table
const dropBooksTable = _ => {
    const sql = 'DROP TABLE IF EXISTS books';
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Books table dropped');
    });
};

// Drop heroes table
const dropHeroesTable = _ => {
    const sql = 'DROP TABLE IF EXISTS heroes';
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Heroes table dropped');
    });
};

// Drop all tables
const dropAllTables = _ => {
    dropUsersTable();
    dropHeroesTable();
    dropBooksTable();
    dropAuthorsTable();
};

// Create all tables
const createAllTables = _ => {
    createUsersTable();
    createAuthorsTable();
    createBooksTable();
    createHeroesTable();
    
};


dropAllTables();
createAllTables();


connection.end();