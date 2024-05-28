package com.example.demo.Repository;

import com.example.demo.Entity.IrregationData;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IrregationDataRepository extends MongoRepository<IrregationData, String> {
}
