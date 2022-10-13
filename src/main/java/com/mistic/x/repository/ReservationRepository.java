package com.mistic.x.repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mistic.x.model.Client;
import com.mistic.x.model.Reservation;
import com.mistic.x.model.DTOs.CountClient;
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


    //Reto 5
    public List<CountClient> getTopClients(){
        List<CountClient> response = new ArrayList<>();
        List <Object[]> report = crudRepositoryReservation.countTotalReservationByClients();

        for (int i = 0; i<report.size(); i++){
            response.add(new CountClient((Long) report.get(i)[1], (Client)report.get(i)[0]));
        }
        return response;
    }
    
    public List<Reservation> getReservationPeriod(Date a, Date b){
        return crudRepositoryReservation.findAllByStartDateAfterAndDevolutionDateBefore(a, b);
    }
    

    public List<Reservation> getReservationsByStatus(String status){
        return crudRepositoryReservation.findAllByStatus(status);
    }

}
