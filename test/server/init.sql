create database ecommercedb;

create table categories (
  id SERIAL primary key,
  name VARCHAR(50) not null
);

create table products (
  id uuid not null default gen_random_uuid(),
  name VARCHAR(50) not null,
  description VARCHAR(200) not null,
  price NUMERIC(6, 2) not null,
  img VARCHAR(200) NOT null,
  state VARCHAR(3) not null,
  category_id INT not null,
  FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE RESTRICT ON UPDATE CASCADE
);

insert into categories (name) values
('Samsung'),
('Apple'),
('Other');

INSERT INTO products (name, description, price, img, state, category_id)
VALUES
  ('S9', 'Stylish and affordable smartphone with a brilliant display.', 190.99, 'https://m.media-amazon.com/images/I/71rKPhtNR3L._AC_SX522_.jpg', '1', 1),
  ('S8', 'Feature-packed phone for enhanced performance and functionality.', 290.99, 'https://m.media-amazon.com/images/I/81NCJilmjzL._AC_SL1500_.jpg', '1', 1),
  ('Iphone X', 'Iconic Apple design meets cutting-edge technology.', 140.99, 'https://m.media-amazon.com/images/I/61gVPTl5N3L._AC_SL1288_.jpg', '1', 2),
  ('S20', 'High-end Samsung flagship with advanced camera capabilities.', 490.99, 'https://m.media-amazon.com/images/I/61XsDK3-1hL._AC_SL1000_.jpg', '1', 1),
  ('Pixel 3', 'Googles compact powerhouse with exceptional camera AI.', 90.99, 'https://m.media-amazon.com/images/I/71-s0qpYaZL._AC_SL1500_.jpg', '1', 3),
  ('Iphone 12', 'Apples latest iPhone offering, blending power and style.', 390.99, 'https://m.media-amazon.com/images/I/513NI5xpYjL._AC_SL1000_.jpg', '1', 2),
  ('Mi 11', 'Xiaomis budget-friendly device with impressive specs.', 240.99, 'https://m.media-amazon.com/images/I/71AzWveAoaL._AC_SL1421_.jpg', '1', 3),
  ('Iphone 13', 'Next-gen iPhone with improved features and performance.', 340.99, 'https://m.media-amazon.com/images/I/71EvexPYtWL._AC_SL1500_.jpg', '1', 2),
  ('S21', 'Samsungs flagship device, setting new standards in innovation.', 590.99, 'https://m.media-amazon.com/images/I/61jYjeuNUnL._AC_SL1000_.jpg', '1', 1),
  ('Iphone 8', 'Classic iPhone experience with a focus on reliability.', 190.99, 'https://m.media-amazon.com/images/I/41sy-46mHKL._AC_.jpg', '1', 2);
