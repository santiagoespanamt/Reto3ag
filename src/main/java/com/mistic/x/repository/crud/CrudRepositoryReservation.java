package com.mistic.x.repository.crud;

import org.springframework.data.repository.CrudRepository;

import com.mistic.x.model.Reservation;

public interface CrudRepositoryReservation extends CrudRepository<Reservation,Integer> {
    
}
