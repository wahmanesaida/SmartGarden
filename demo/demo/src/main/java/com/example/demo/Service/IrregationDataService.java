package com.example.demo.Service;

import com.example.demo.Entity.IrregationData;
import com.example.demo.Repository.IrregationDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IrregationDataService {

    @Autowired
    private IrregationDataRepository irregationDataRepository;

    public List<IrregationData> getAllIrregationData() {
        return irregationDataRepository.findAll();
    }
}
