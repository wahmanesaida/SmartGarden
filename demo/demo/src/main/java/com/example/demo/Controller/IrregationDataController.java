package com.example.demo.Controller;

import com.example.demo.Entity.IrregationData;
import com.example.demo.Service.IrregationDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class IrregationDataController {

    @Autowired
    private IrregationDataService irregationDataService;

    @GetMapping("/irregationData")
    public ResponseEntity<?> getAllIrregationData() {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(irregationDataService.getAllIrregationData());

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");

        }

    }

}
