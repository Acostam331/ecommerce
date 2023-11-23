package com.example.ecommerce.models.dtos;

import lombok.Data;

@Data
public class MessageDTO {
    private String field;
    private String message;

    public MessageDTO(String message) {
        this.message = message;
    }

    public MessageDTO(String field, String message) {
        this.field = field;
        this.message = message;
    }
}
