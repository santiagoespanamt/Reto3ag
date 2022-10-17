package com.mistic.x.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mistic.x.model.Reservation;
import com.mistic.x.model.DTOs.CountClient;
import com.mistic.x.model.DTOs.CountStatus;
import com.mistic.x.repository.ReservationRepository;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getAll() {
        return reservationRepository.getAll();
    }

    public Optional<Reservation> getReservation(int id) {
        return reservationRepository.getReservation(id);
    }

    public Reservation save(Reservation reservation) {
        if (reservation.getIdReservation() == null) {
            return reservationRepository.save(reservation);
        } else {
            Optional<Reservation> reservation1 = reservationRepository.getReservation(reservation.getIdReservation());
            if (reservation1.isEmpty()) {
                return reservationRepository.save(reservation);
            } else {
                return reservation;
            }
        }
    }

    public Reservation update (Reservation reservation){
        if(reservation.getIdReservation()!=null){
            Optional<Reservation> q = reservationRepository.getReservation(reservation.getIdReservation());
            if(q.isPresent()){
                if(reservation.getStartDate()!=null){
                    q.get().setStartDate(reservation.getStartDate());
                }
                if(reservation.getDevolutionDate()!=null){
                    q.get().setDevolutionDate(reservation.getDevolutionDate());
                }
                if(reservation.getStatus()!=null){
                    q.get().setStatus((reservation.getStatus()));
                }
                //falta if para status
                reservationRepository.save(q.get());
                return q.get();
            }else{
                return reservation;
            }
        }else{
            return reservation;
        }
    }

    public boolean delete (int id){
        boolean flag=false;
        Optional<Reservation> pr=reservationRepository.getReservation(id);
        if(pr.isPresent()){
            reservationRepository.delete(pr.get());
            flag =true;
        }

        return flag;
    }
    
    //Reto 5

    public List<CountClient> getTopClients(){
        return reservationRepository.getTopClients();
    }
    

    public List<Reservation> getReservationsPeriod(String dateA, String dateB){
        SimpleDateFormat parser = new SimpleDateFormat("yyyy-MM-dd"); // 2022-01-21
        Date a = new Date();
        Date b = new Date();
        try{
            a = parser.parse(dateA);
            b = parser.parse(dateB);
        }catch(ParseException exception){
                exception.printStackTrace();
        }
        if(a.before(b)){
            return reservationRepository.getReservationPeriod(a, b);
        }else{
            return new ArrayList<>();
        }
    }
    

    public CountStatus getReservationsStatus(){
        List<Reservation> completed = reservationRepository.getReservationsByStatus("completed");

        List<Reservation> cancelled = reservationRepository.getReservationsByStatus("cancelled");

        return new CountStatus((long) completed.size(), (long) cancelled.size());
    }
    
}
