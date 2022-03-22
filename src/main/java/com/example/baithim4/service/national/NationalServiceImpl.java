package com.example.baithim4.service.national;

import com.example.baithim4.model.National;
import com.example.baithim4.repository.INationalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class NationalServiceImpl implements INationalService {
    @Autowired
    private INationalRepository nationalRepository;

    @Override
    public Iterable<National> findAll() {
        return nationalRepository.findAll();
    }

    @Override
    public Optional<National> findById(Long id) {
        return nationalRepository.findById(id);
    }

    @Override
    public National save(National national) {
        return nationalRepository.save(national);
    }

    @Override
    public void remove(Long id) {
        nationalRepository.deleteById(id);
    }
}
