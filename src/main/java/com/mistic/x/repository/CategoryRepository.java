package com.mistic.x.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mistic.x.model.Category;
import com.mistic.x.repository.crud.CrudRepositoryCategory;

@Repository
public class CategoryRepository {

    @Autowired
    private CrudRepositoryCategory crudRepositoryCategory;

    public List<Category> getAll(){
        return (List<Category>) crudRepositoryCategory.findAll();
    }

    public Optional<Category> getCategory(int id){
        return crudRepositoryCategory.findById(id);
    }
    
    public Category save(Category category){
        return crudRepositoryCategory.save(category);
    }

    public void delete (Category category){
        crudRepositoryCategory.delete(category);
    }
    
}
