package com.example.ecommerce.services;

import com.example.ecommerce.models.entities.Category;
import com.example.ecommerce.models.entities.Product;

import java.util.List;
import java.util.UUID;

public interface ProductServices {
    List<Product> findAll();
    List<Product> findByCategory(Category category);
    Product findById(UUID id);
}
