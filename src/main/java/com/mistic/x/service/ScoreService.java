package com.mistic.x.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mistic.x.model.Score;
import com.mistic.x.repository.ScoreRepository;

@Service
public class ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;

    public List<Score> getAll() {
        return scoreRepository.getAll();
    }

    public Optional<Score> getScore(int id) {
        return scoreRepository.getScore(id);
    }

    public Score save(Score score) {
        if (score.getIdScore() == null) {
            return scoreRepository.save(score);
        } else {
            Optional<Score> score1 = scoreRepository.getScore(score.getIdScore());
            if (score1.isEmpty()) {
                return scoreRepository.save(score);
            } else {
                return score;
            }
        }
    }

    public Score update (Score score){
        if(score.getIdScore()!=null){
            Optional<Score> q = scoreRepository.getScore(score.getIdScore());
            if(q.isPresent()){
                if(score.getMessageText()!=null){
                    q.get().setMessageText(score.getMessageText());
                }
                if(score.getStars()!=null){
                    q.get().setStars(score.getStars());
                }
                scoreRepository.save(q.get());
                return q.get();
            }else{
                return score;
            }
        }else{
            return score;
        }
    }

    public boolean delete (int id){
        boolean flag=false;
        Optional<Score> pr=scoreRepository.getScore(id);
        if(pr.isPresent()){
            scoreRepository.delete(pr.get());
            flag =true;
        }

        return flag;
    } 
    
}
