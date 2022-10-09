package com.mistic.x.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mistic.x.model.Partyroom;
import com.mistic.x.repository.crud.CrudRepositoryPartyroom;

@Repository
public class PartyroomRepository {

    @Autowired
    private CrudRepositoryPartyroom crudRepositoryPartyroom;

    public List<Partyroom> getAll(){
        return (List<Partyroom>) crudRepositoryPartyroom.findAll();
    }

    public Optional<Partyroom> getPartyroom(int id){
        return crudRepositoryPartyroom.findById(id);
    }

    public Partyroom save(Partyroom pr){
        return crudRepositoryPartyroom.save(pr);
    }

    public void delete(Partyroom partyroom) {
        crudRepositoryPartyroom.delete(partyroom);
    }
    
    
}
