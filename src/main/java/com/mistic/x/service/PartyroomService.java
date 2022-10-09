package com.mistic.x.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mistic.x.model.Partyroom;
import com.mistic.x.repository.PartyroomRepository;

@Service
public class PartyroomService {
    @Autowired
    private PartyroomRepository partyroomRepository;

    public List<Partyroom> getAll() {
        return partyroomRepository.getAll();
    }

    public Optional<Partyroom> getPartyroom(int id) {
        return partyroomRepository.getPartyroom(id);
    }

    public Partyroom save(Partyroom pr) {
        if (pr.getId() == null) {
            return partyroomRepository.save(pr);
        } else {
            Optional<Partyroom> pr1 = partyroomRepository.getPartyroom(pr.getId());
            if (pr1.isEmpty()) {
                return partyroomRepository.save(pr);
            } else {
                return pr;
            }
        }
    }

    public Partyroom update (Partyroom pr){
        if(pr.getId()!=null){
            Optional<Partyroom> q = partyroomRepository.getPartyroom(pr.getId());
            if(q.isPresent()){
                if(pr.getOwner()!=null){
                    q.get().setOwner(pr.getOwner());
                }
                if(pr.getCapacity()!=null){
                    q.get().setCapacity(pr.getCapacity());
                }
                if(pr.getCategory()!=null){
                    q.get().setCategory(pr.getCategory());
                }
                if(pr.getName()!=null){
                    q.get().setName(pr.getName());
                }
                if(pr.getDescription()!=null){
                    q.get().setDescription(pr.getDescription());
                }
                partyroomRepository.save(q.get());
                return q.get();
            }else{
                return pr;
            }
        }else{
            return pr;
        }
    }

    public boolean delete (int id){
        boolean flag=false;
        Optional<Partyroom> pr=partyroomRepository.getPartyroom(id);
        if(pr.isPresent()){
            partyroomRepository.delete(pr.get());
            flag =true;
        }

        return flag;
    }
    
}
