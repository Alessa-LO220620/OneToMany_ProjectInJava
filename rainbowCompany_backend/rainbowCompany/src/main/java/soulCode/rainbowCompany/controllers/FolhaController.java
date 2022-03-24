package soulCode.rainbowCompany.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import soulCode.rainbowCompany.models.Folha;
import soulCode.rainbowCompany.services.FolhaService;

@CrossOrigin
@RestController
@RequestMapping("rainbowCompany")
public class FolhaController {

	@Autowired
	FolhaService folhaService;

	@GetMapping("/func/folha")
	public List<Folha> buscarTodasFolhas() {
		List<Folha> folha = folhaService.buscarTodasFolhas();
		return folha;
	}

	@GetMapping("/func/folha/{codigoFolha}")
	public ResponseEntity<Folha> buscarUmaFolha(@PathVariable Integer codigoFolha) {
		Folha folha = folhaService.buscarUmaFolha(codigoFolha);
		return ResponseEntity.ok().body(folha);
	}

	@GetMapping("/func/folhaFuncionario/{id_func}")
	public List<Folha> buscarFolhaDoFuncionario(@PathVariable Integer id_func) {
		List<Folha> folha = folhaService.buscarFolhaDoFuncionario(id_func);
		return folha;
	}

	@PostMapping("/func/folha/{id_func}")
	public ResponseEntity<Folha> cadastrarFolha(@RequestBody Folha folha, @PathVariable Integer id_func) {
		folha = folhaService.cadastrarFolha(folha, id_func);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(folha.getCodigoFolha())
				.toUri();
		return ResponseEntity.created(uri).build();
	}

	@DeleteMapping("/func/folha/{codigoFolha}")
	public ResponseEntity<Void> deletarFolha(@PathVariable Integer codigoFolha) {
		folhaService.deletarFolha(codigoFolha);
		return ResponseEntity.noContent().build();
	}

	@PutMapping("/func/folha/{codigoFolha}/{id_func}")
	public ResponseEntity<Folha> editarFolha(@PathVariable Integer codigoFolha, @PathVariable Integer id_func, @RequestBody Folha folha) {
		folha.setCodigoFolha(codigoFolha);
		folha = folhaService.editarFolha(folha, id_func);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/func/pagarFolha/{codigoFolha}")
	public ResponseEntity<Folha> enviadoParaFinanceiro(@PathVariable Integer codigoFolha){
		folhaService.enviadoParaFinanceiro(codigoFolha);
		return ResponseEntity.noContent().build();
	}

}
