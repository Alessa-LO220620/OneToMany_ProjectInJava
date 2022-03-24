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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import soulCode.rainbowCompany.models.Cargo;
import soulCode.rainbowCompany.models.Supervisor;
import soulCode.rainbowCompany.services.SupervisorService;

@CrossOrigin
@RestController
@RequestMapping("rainbowCompany")
public class SupervisorController {

	@Autowired
	private SupervisorService supervisorService;

	@GetMapping("/supervisor")
	public List<Supervisor> mostrarTodosSupervisores() {
		List<Supervisor> sup = supervisorService.mostrarTodosSupervisores();
		return sup;
	}
	
	@GetMapping("/supervisor/supervisor-cargo")
	public List<List> SupervisorComCargo(){
		List<List> supervisorCargo = supervisorService.SupervisorComCargo();
		return supervisorCargo;
	}

	@GetMapping("/supervisor/{id_super}")
	public ResponseEntity<Supervisor> mostrarUmSupervisor(@PathVariable Integer id_super) {
		Supervisor sup = supervisorService.mostrarUmSupervisor(id_super);
		return ResponseEntity.ok().body(sup);
	}

	@GetMapping("/supervisor-cargo/{id_cargo}")
	public ResponseEntity<Supervisor> buscarSupervisorDoCargo(@PathVariable Integer id_cargo) {
		Supervisor sup = supervisorService.buscarSupervisorDoCargo(id_cargo);
		return ResponseEntity.ok().body(sup);
	}

	@GetMapping("/supervisorSemCargo")
	public List<Supervisor> supervisorSemCargo() {
		List<Supervisor> sup = supervisorService.supervisorSemCargo();
		return sup;
	}

	@GetMapping("/supervisor-nome/{super_nome}")
	public ResponseEntity<Supervisor> buscarSupervisorNome(@PathVariable String super_nome) {
		Supervisor sup = supervisorService.buscarSupervisorNome(super_nome);
		return ResponseEntity.ok().body(sup);
	}

	@PostMapping("/supervisor")
	public ResponseEntity<Supervisor> cadastrarSupervisor(
			@RequestParam(value = "cargo", required = false) Integer id_cargo, @RequestBody Supervisor supervisor) {
		supervisor = supervisorService.cadastrarSupervisor(id_cargo, supervisor);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id_super}")
				.buildAndExpand(supervisor.getId_super()).toUri();
		return ResponseEntity.created(uri).build();
	}

	@PutMapping("/supervisor/{id_super}")
	public ResponseEntity<Supervisor> editarSupervisor(
			@RequestParam(value = "cargo", required = false) Cargo cargo, @PathVariable Integer id_super,
			@RequestBody Supervisor supervisor) {
		supervisor.setId_super(id_super);
		supervisor.setCargo(cargo);
		cargo.setSupervisor(supervisor);
		supervisor = supervisorService.editarSupervisor(supervisor);
		
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping("/supervisor/{id_super}")
	public ResponseEntity<Void> deletarSupervisor(@PathVariable Integer id_super){
		supervisorService.deletarSupervisor(id_super);
		return ResponseEntity.noContent().build();
	}
	

}
