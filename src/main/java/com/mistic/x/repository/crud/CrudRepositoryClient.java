package com.mistic.x.repository.crud;

import org.springframework.data.repository.CrudRepository;

import com.mistic.x.model.Client;


public interface CrudRepositoryClient extends CrudRepository<Client,Integer> {
    
}
