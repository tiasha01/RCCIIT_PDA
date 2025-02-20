package com.rcciitpda.pda_backend.Controller;

import com.rcciitpda.pda_backend.Service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RequestMapping("/api/v1/file")
@RestController
@CrossOrigin
public class FileController{

    FileService fileService;
    @Autowired
    public FileController(FileService fileService){
        this.fileService = fileService;
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file,
                                      @RequestParam("token") String token){
        return fileService.uploadFileService(file, token);
    }

    @GetMapping("/get_analysis")
    public ResponseEntity<?> getAnalysis(@RequestParam("token") String token){
        return fileService.getAnalysisService(token);
    }
}
