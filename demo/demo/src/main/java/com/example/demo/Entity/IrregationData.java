package com.example.demo.Entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "IrregationDataSet")
public class IrregationData {

    @Id
    private String id;
    private String date;
    private float temperature;
    private float humidity;
    private float waterLevel;
    private float N;
    private float P;
    private float K;
    private boolean fanActuatorOff;
    private boolean fanActuatorOn;
    private boolean wateringPlantPumpOff;
    private boolean wateringPlantPumpOn;
    private boolean waterPumpActuatorOff;
    private boolean waterPumpActuatorOn;
    private float mq2;
    private float mq9;
    private float mq135;
    private float mq137;
    private float mq138;
    private float mg811;
    private String result;
}
