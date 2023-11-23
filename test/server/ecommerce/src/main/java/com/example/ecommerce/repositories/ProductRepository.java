package com.example.ecommerce.repositories;
import com.example.ecommerce.models.entities.Category;
import com.example.ecommerce.models.entities.Product;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;
import java.util.UUID;

public interface ProductRepository extends ListCrudRepository<Product, Integer> {
    List<Product> findByCategory(Category category);
    Product findById(UUID id);
}
