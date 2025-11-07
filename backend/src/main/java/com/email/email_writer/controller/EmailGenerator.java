package com.email.email_writer.controller;

import com.email.email_writer.service.EmailGeneratorService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class EmailGenerator {
    private final EmailGeneratorService emailGeneratorService;

    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest){
        String response=emailGeneratorService.generateEmailReply(emailRequest);
        return ResponseEntity.ok(response);
    }
}
