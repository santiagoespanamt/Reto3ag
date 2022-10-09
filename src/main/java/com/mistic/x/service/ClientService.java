package com.mistic.x.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mistic.x.model.Client;
import com.mistic.x.repository.ClientRepository;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getAll() {
        return clientRepository.getAll();
    }

    public Optional<Client> getClient(int id) {
        return clientRepository.getClient(id);
    }

    public Client save(Client client) {
        if (client.getIdClient() == null) {
            return clientRepository.save(client);
        } else {
            Optional<Client> client1 = clientRepository.getClient(client.getIdClient());
            if (client1.isEmpty()) {
                return clientRepository.save(client);
            } else {
                return client;
            }
        }
    }

    public Client update (Client client){
        if(client.getIdClient()!=null){
            Optional<Client> q = clientRepository.getClient(client.getIdClient());
            if(q.isPresent()){
                if(client.getEmail()!=null){
                    q.get().setEmail(client.getEmail());
                }
                if(client.getPassword()!=null){
                    q.get().setPassword(client.getPassword());
                }
                if(client.getName()!=null){
                    q.get().setName(client.getName());
                }
                if(client.getAge()!=null){
                    q.get().setAge(client.getAge());
                }
                clientRepository.save(q.get());
                return q.get();
            }else{
                return client;
            }
        }else{
            return client;
        }
    }

    public boolean delete (int id){
        boolean flag=false;
        Optional<Client> pr=clientRepository.getClient(id);
        if(pr.isPresent()){
            clientRepository.delete(pr.get());
            flag =true;
        }

        return flag;
    }
    
}
