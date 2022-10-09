package com.mistic.x.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mistic.x.model.Admin;
import com.mistic.x.repository.crud.CrudRepositoryAdmin;

@Repository
public class AdminRepository {

    @Autowired
    private CrudRepositoryAdmin crudRepositoryAdmin;

    public List<Admin> getAll(){
        return (List<Admin>) crudRepositoryAdmin.findAll();
    }

    public Optional<Admin> getAdmin(int id){
        return crudRepositoryAdmin.findById(id);
    }

    public Admin save(Admin admin){
        return crudRepositoryAdmin.save(admin);
    }

    public void delete(Admin admin) {
        crudRepositoryAdmin.delete(admin);
    }


    
}
