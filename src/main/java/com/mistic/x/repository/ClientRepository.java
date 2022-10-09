package com.mistic.x.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mistic.x.model.Client;
import com.mistic.x.repository.crud.CrudRepositoryClient;

@Repository
public class ClientRepository {

    @Autowired
    private CrudRepositoryClient crudRepositoryClient;

    public List<Client> getAll(){
        return (List<Client>) crudRepositoryClient.findAll();
    }

    public Optional<Client> getClient(int id){
        return crudRepositoryClient.findById(id);
    }
    
    public Client save(Client client){
        return crudRepositoryClient.save(client);
    }

    public void delete(Client client) {
        crudRepositoryClient.delete(client);
    }

    
}
