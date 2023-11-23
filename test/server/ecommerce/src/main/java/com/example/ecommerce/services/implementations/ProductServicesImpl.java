package com.example.ecommerce.services.implementations;

import com.example.ecommerce.models.dtos.ProductDTO;
import com.example.ecommerce.models.entities.Category;
import com.example.ecommerce.models.entities.Product;
import com.example.ecommerce.repositories.CategoryRepository;
import com.example.ecommerce.repositories.ProductRepository;
import com.example.ecommerce.services.ProductServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ProductServicesImpl implements ProductServices {
    private final ProductRepository repository;

    @Autowired
    public ProductServicesImpl(ProductRepository repository) {
        this.repository = repository;
    }
    @Override
    public List<Product> findAll() {
        return repository.findAll();
    }

    @Override
    public List<Product> findByCategory(Category category) {
        return repository.findByCategory(category);
    }

    @Override
    public Product findById(UUID id) {
        return repository.findById(id);
    }

}
