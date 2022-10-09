package com.mistic.x.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mistic.x.model.Score;
import com.mistic.x.repository.crud.CrudRepositoryScore;

@Repository
public class ScoreRepository {

    @Autowired
    private CrudRepositoryScore crudRepositoryScore;

    public List<Score> getAll(){
        return (List<Score>) crudRepositoryScore.findAll();
    }

    public Optional<Score> getScore(int id){
        return crudRepositoryScore.findById(id);
    }

    public Score save(Score s){
        return crudRepositoryScore.save(s);
    }

    public void delete(Score s) {
        crudRepositoryScore.delete(s);
    }
    
}
