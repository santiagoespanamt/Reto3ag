package com.mistic.x.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mistic.x.model.Admin;
import com.mistic.x.repository.AdminRepository;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public List<Admin> getAll() {
        return adminRepository.getAll();
    }

    public Optional<Admin> getAdmin(int id) {
        return adminRepository.getAdmin(id);
    }

    public Admin save(Admin admin) {
        if (admin.getIdAdmin() == null) {
            return adminRepository.save(admin);
        } else {
            Optional<Admin> admin1 = adminRepository.getAdmin(admin.getIdAdmin());
            if (admin1.isEmpty()) {
                return adminRepository.save(admin);
            } else {
                return admin;
            }
        }
    }

    public Admin update (Admin admin){
        if(admin.getIdAdmin()!=null){
            Optional<Admin> q = adminRepository.getAdmin(admin.getIdAdmin());
            if(q.isPresent()){
                if(admin.getEmail()!=null){
                    q.get().setEmail(admin.getEmail());
                }
                if(admin.getPassword()!=null){
                    q.get().setPassword(admin.getPassword());
                }
                if(admin.getName()!=null){
                    q.get().setName(admin.getName());
                }
                adminRepository.save(q.get());
                return q.get();
            }else{
                return admin;
            }
        }else{
            return admin;
        }
    }

    public boolean delete (int id){
        boolean flag=false;
        Optional<Admin> pr=adminRepository.getAdmin(id);
        if(pr.isPresent()){
            adminRepository.delete(pr.get());
            flag =true;
        }

        return flag;
    }
    
}
