package com.example.ecommerce.services.implementations;

import com.example.ecommerce.models.entities.Category;
import com.example.ecommerce.repositories.CategoryRepository;
import com.example.ecommerce.services.CategoryServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServicesImpl implements CategoryServices {
    private final CategoryRepository repository;

    @Autowired
    public CategoryServicesImpl(CategoryRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Category> findAll() {
        return repository.findAll();
    }

    @Override
    public Category findById(int categoryId) {return repository.findById(categoryId);}
}
