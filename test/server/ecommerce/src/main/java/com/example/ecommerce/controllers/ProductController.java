package com.example.ecommerce.controllers;
import com.example.ecommerce.models.dtos.MessageDTO;
import com.example.ecommerce.models.entities.Category;
import com.example.ecommerce.models.entities.Product;
import com.example.ecommerce.services.CategoryServices;
import com.example.ecommerce.services.ProductServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin("*")
@RequestMapping("/products")
public class ProductController {
    private final ProductServices productServices;
    private final CategoryServices categoryServices;

    @Autowired
    public ProductController(ProductServices productServices, CategoryServices categoryServices) {
        this.productServices = productServices;
        this.categoryServices = categoryServices;
    }

    @GetMapping("")
    public ResponseEntity<?> getProducts() {
        List<Product> products = productServices.findAll();

        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<?> getProductsByCategory(@PathVariable int categoryId) {
        Category category = categoryServices.findById(categoryId);

        if (category == null) {
            return new ResponseEntity<>(new MessageDTO("the category does not exist"), HttpStatus.NOT_FOUND);
        }

        List<Product> products = productServices.findByCategory(category);

        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<?> getProductById(@PathVariable UUID productId) {
        Product product = productServices.findById(productId);

        if (product == null) {
            return new ResponseEntity<>(new MessageDTO("the product does not exist"), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(product, HttpStatus.OK);
    }
}
