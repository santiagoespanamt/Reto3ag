package com.mistic.x.repository.crud;

import org.springframework.data.repository.CrudRepository;

import com.mistic.x.model.Message;

public interface CrudRepositoryMessage extends CrudRepository<Message,Integer>{
    
}
