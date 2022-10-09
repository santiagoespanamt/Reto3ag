package com.mistic.x.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mistic.x.model.Message;
import com.mistic.x.repository.MessageRepository;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getAll() {
        return messageRepository.getAll();
    }

    public Optional<Message> getMessage(int id) {
        return messageRepository.getMessage(id);
    }

    public Message save(Message message) {
        if (message.getIdMessage() == null) {
            return messageRepository.save(message);
        } else {
            Optional<Message> message1 = messageRepository.getMessage(message.getIdMessage());
            if (message1.isEmpty()) {
                return messageRepository.save(message);
            } else {
                return message;
            }
        }
    }

    public Message update (Message message){
        if(message.getIdMessage()!=null){
            Optional<Message> q = messageRepository.getMessage(message.getIdMessage());
            if(q.isPresent()){
                if(message.getMessageText()!=null){
                    q.get().setMessageText(message.getMessageText());
                }
                messageRepository.save(q.get());
                return q.get();
            }else{
                return message;
            }
        }else{
            return message;
        }
    }

    public boolean delete (int id){
        boolean flag=false;
        Optional<Message> pr=messageRepository.getMessage(id);
        if(pr.isPresent()){
            messageRepository.delete(pr.get());
            flag =true;
        }

        return flag;
    }
    
}
