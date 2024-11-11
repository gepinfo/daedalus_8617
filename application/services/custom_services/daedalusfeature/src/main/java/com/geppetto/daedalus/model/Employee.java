package com.geppetto.daedalus.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Employee {

@Id
private String id;

private String name;

private String age;

private String email;

private String address;

    
    
}

