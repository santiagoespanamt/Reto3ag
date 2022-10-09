package com.mistic.x.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mistic.x.model.Reservation;
import com.mistic.x.repository.crud.CrudRepositoryReservation;

@Repository
public class ReservationRepository {

    @Autowired
    private CrudRepositoryReservation crudRepositoryReservation;

    public List<Reservation> getAll(){
        return (List<Reservation>) crudRepositoryReservation.findAll();
    }

    public Optional<Reservation> getReservation(int id){
        return crudRepositoryReservation.findById(id);
    }

    public Reservation save(Reservation res){
        return crudRepositoryReservation.save(res);
    }

    public void delete(Reservation res) {
        crudRepositoryReservation.delete(res);
    }
}
