package com.mistic.x.repository.crud;

import org.springframework.data.repository.CrudRepository;

import com.mistic.x.model.Category;

public interface CrudRepositoryCategory extends CrudRepository<Category,Integer> {
    
}
