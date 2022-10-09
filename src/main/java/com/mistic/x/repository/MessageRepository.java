package com.mistic.x.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mistic.x.model.Message;
import com.mistic.x.repository.crud.CrudRepositoryMessage;

@Repository
public class MessageRepository {

    @Autowired
    private CrudRepositoryMessage crudRepositoryMessage;

    public List<Message> getAll(){
        return  (List<Message>) crudRepositoryMessage.findAll();
    }

    public Optional<Message> getMessage(int id){
        return crudRepositoryMessage.findById(id);
    }

    public Message save(Message message){
        return crudRepositoryMessage.save(message);
    }

    public void delete(Message message) {
        crudRepositoryMessage.delete(message);
    }
    
}
