CREATE TABLE clients (
    id serial PRIMARY KEY,
    name varchar(150) NOT NULL,
    email varchar(150) UNIQUE NOT NULL,
    cpf varchar(50) UNIQUE NOT NULL,
    contact varchar(20) NOT NULL
);

CREATE TABLE categories (
    id serial PRIMARY KEY,
    name varchar(150) NOT NULL
);

INSERT INTO categories (name) VALUES 
('Electronics'),
('Books'),
('Clothing'),
('Home Appliances'),
('Furniture'),
('Toys'),
('Sports'),
('Automotive'),
('Beauty'),
('Groceries');

CREATE TYPE voltage_enum AS ENUM ('110', '220');

CREATE TABLE products (
    id serial PRIMARY KEY,
    name varchar(150) NOT NULL,
    amount varchar(150) UNIQUE DEFAULT '0',
    color varchar(50),
    voltage voltage_enum,
    description TEXT,
    category_id integer NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE orders (
    id serial PRIMARY KEY,
    client_id integer NOT NULL,
    total decimal(10,2),
    address TEXT,
    observations TEXT,
    FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE order_items (
    id serial PRIMARY KEY,
    order_id integer NOT NULL,
    product_id integer NOT NULL,
    amount TEXT,
    price decimal(10,2),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);




