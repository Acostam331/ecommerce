package com.example.ecommerce.repositories;

import com.example.ecommerce.models.entities.Category;
import org.springframework.data.repository.ListCrudRepository;

public interface CategoryRepository extends ListCrudRepository<Category, Integer> {
    Category findById(int categoryId);
}
