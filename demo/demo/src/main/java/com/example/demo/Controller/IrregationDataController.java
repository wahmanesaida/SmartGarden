package com.example.demo.Controller;

import com.example.demo.Entity.IrregationData;
import com.example.demo.Service.IrregationDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/irregationData")
public class IrregationDataController {

    @Autowired
    private IrregationDataService irregationDataService;

    @GetMapping
    public List<IrregationData> getAllIrregationData() {
        return irregationDataService.getAllIrregationData();
    }
}
