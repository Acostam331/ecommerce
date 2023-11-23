package com.example.ecommerce.services;

import com.example.ecommerce.models.entities.Category;

import java.util.List;

public interface CategoryServices {
    List<Category> findAll();
    Category findById(int categoryId);
}
