CREATE TABLE carriers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code INT NOT NULL
);

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  document CHAR(11) NOT NULL UNIQUE,
  CHECK (document ~ '^[0-9]{11}$')
);

CREATE TYPE phone_description AS ENUM ('personal', 'work', 'home', 'other');

CREATE TABLE phones (
  id SERIAL PRIMARY KEY,
  description phone_description NOT NULL,
  number VARCHAR(11) NOT NULL UNIQUE,
  customer_document CHAR(11) NOT NULL REFERENCES customers(document),
  carrier_id INT NOT NULL REFERENCES carriers(id),
  CHECK (number ~ '^[0-9]{10,11}$')
);


CREATE TABLE recharges (
    id SERIAL PRIMARY KEY,
    phone_id INT NOT NULL REFERENCES phones(id),
    value INT NOT NULL,
    CHECK (value >= 1000 AND value <= 100000)
);

INSERT INTO carriers (name, code) VALUES ('Vivo', 15);
INSERT INTO carriers (name, code) VALUES ('Tim', 41);
INSERT INTO carriers (name, code) VALUES ('Oi', 31);
INSERT INTO carriers (name, code) VALUES ('Claro', 21);