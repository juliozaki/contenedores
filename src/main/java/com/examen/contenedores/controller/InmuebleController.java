package com.examen.contenedores.controller;

import com.examen.contenedores.model.Inmueble;
import com.examen.contenedores.repository.InmuebleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/inmueble")
public class InmuebleController {

    @Autowired
    private InmuebleRepository inmuebleRepository;

    @GetMapping
    public ResponseEntity<Object> getAllUsers() {
        try{

            List<Inmueble> inmueble = inmuebleRepository.findAll();

        if(inmueble.isEmpty()) {

            return new ResponseEntity<>("No hay inmuebles", HttpStatus.BAD_REQUEST);

        }else {

            return new ResponseEntity<>(inmueble, HttpStatus.OK);

        }
        }catch (Exception ex){
            return new ResponseEntity<>("No hay inmuebles", HttpStatus.BAD_REQUEST);
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getUserById(@PathVariable Long id) {
        try{

            Inmueble inmueble = inmuebleRepository.findById(id).orElseThrow();

            return new ResponseEntity<>(inmueble, HttpStatus.OK);

        }catch (Exception ex){
            return new ResponseEntity<>("No hay inmuebles", HttpStatus.BAD_REQUEST);
        }

    }

    @PostMapping
    public ResponseEntity<Object> createUser(@RequestBody Inmueble inmueble) {
        try {
            inmuebleRepository.save(inmueble);

            return new ResponseEntity<>(inmueble, HttpStatus.OK);

        }catch (Exception ex){
            return new ResponseEntity<>("Error: " + ex.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
