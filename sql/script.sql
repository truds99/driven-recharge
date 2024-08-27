CREATE TABLE carriers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code INT NOT NULL
);

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  document CHAR(11) NOT NULL UNIQUE
);

CREATE TABLE phones (
  id SERIAL PRIMARY KEY,
  description text NOT NULL,
  number CHAR(11) NOT NULL UNIQUE,
  customer_document CHAR(11) NOT NULL REFERENCES customers(document),
  carrier_id INT NOT NULL REFERENCES carriers(id)
);

CREATE TABLE recharges (
    id SERIAL PRIMARY KEY,
    phone_id INT NOT NULL REFERENCES phones(id),
    value INT NOT NULL
)

INSERT INTO carriers (name, code) VALUES ('Vivo', 15);
INSERT INTO carriers (name, code) VALUES ('Tim', 41);
INSERT INTO carriers (name, code) VALUES ('Oi', 31);
INSERT INTO carriers (name, code) VALUES ('Claro', 21);