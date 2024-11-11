package com.geppetto.daedalus.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.Builder;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDto {

    @NotBlank(message = "id cannot be null or empty")
    private String id;
     
    @NotBlank(message = "name cannot be null or empty")  
    private String name;
   
    @NotBlank(message = "age cannot be null or empty")  
    private String age;
   
    @NotBlank(message = "email cannot be null or empty")  
    private String email;
   
    @NotBlank(message = "address cannot be null or empty")  
    private String address;
  
    }
