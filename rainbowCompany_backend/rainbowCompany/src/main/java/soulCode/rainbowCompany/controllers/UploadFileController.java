package soulCode.rainbowCompany.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import soulCode.rainbowCompany.Utils.UploadFileUtil;
import soulCode.rainbowCompany.models.Supervisor;
import soulCode.rainbowCompany.services.SupervisorService;

@CrossOrigin
@RestController
@RequestMapping("rainbowCompany")
public class UploadFileController {

	@Autowired
	SupervisorService supervisorService;
	
	@PostMapping("/envio/{id_super}")
	public ResponseEntity<String> enviarDados(@PathVariable Integer id_super, MultipartFile foto, @RequestParam("nome") String nome){
		
		String fileName = nome;
		
		String uploadDir = "/Users/aless/Documents/SOULCODE_JAVA/projetoJAVA_Spring/rainbowFront/src/assets/myRepos";
		String nomeMaisCaminho = "assets/myRepos" + nome;
		
		Supervisor supervisor = supervisorService.salvarFoto(id_super, nomeMaisCaminho);
		
		try {
			UploadFileUtil.salvarArquivo(uploadDir, fileName, foto);
		}catch(Exception e) {
			System.out.println("O arquivo não foi enviado" + e);
		}
		
		System.out.println("Deu certo:" + nomeMaisCaminho);
		return ResponseEntity.ok("Arquivo enviado");
		
	}

	
}
