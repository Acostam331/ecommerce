package com.example.ecommerce.controllers;

import com.example.ecommerce.models.entities.Category;
import com.example.ecommerce.services.CategoryServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/categories")
public class CategoryController {
    private final CategoryServices CategoryService;

    @Autowired
    public CategoryController(CategoryServices categoryService){
        this.CategoryService = categoryService;
    }
    @GetMapping("")
    public ResponseEntity<?> getCategories() {
        List<Category> categories = CategoryService.findAll();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }
}
