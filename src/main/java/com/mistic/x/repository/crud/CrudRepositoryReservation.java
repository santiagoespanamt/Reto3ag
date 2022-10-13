package com.mistic.x.repository.crud;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.mistic.x.model.Reservation;

public interface CrudRepositoryReservation extends CrudRepository<Reservation,Integer> {

    @Query ("SELECT c.partyroom, COUNT(c.partyroom) FROM Reservation AS c GROUP BY c.partyroom ORDER BY COUNT (c.partyroom) DESC")
    public List<Object[]> countTotalReservationByPartyroom();

    @Query ("SELECT c.client, COUNT(c.client) FROM Reservation AS c GROUP BY c.client ORDER BY COUNT (c.client) DESC")
    public List<Object[]> countTotalReservationByClients();

    
    //@Query("SELECT Reservation.reservation FROM Reservation WHERE starDate AFTER dateOne AND devolutionDate BEFORE dateTwo")
    public List<Reservation> findAllByStartDateAfterAndDevolutionDateBefore (Date dateOne, Date dateTwo);

    //@Query("SELECT * FROM Reservation WHERE status = 'completed'")
    public List<Reservation> findAllByStatus (String status);

    //("SELECT c.status, COUNT (c.status) FROM Reservation AS c WHERE status='completed' OR status='cancelled' GROUP´BY c.status ORDER BY COUNT (c.status)")
    //public List<Reservation> findAllByEstus();
    
}
