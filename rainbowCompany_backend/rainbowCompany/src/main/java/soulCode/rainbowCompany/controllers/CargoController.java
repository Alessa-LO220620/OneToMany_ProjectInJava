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
import soulCode.rainbowCompany.services.CargoService;

@CrossOrigin
@RestController
@RequestMapping("rainbowCompany")
public class CargoController {

	@Autowired
	private CargoService cargoService;

	@GetMapping("/cargo")
	public List<Cargo> mostrarTodosCargos() {
		List<Cargo> cargo = cargoService.mostrarTodosCargos();
		return cargo;
	}

	@GetMapping("/cargo/{id_cargo}")
	public ResponseEntity<Cargo> mostrarUmCargo(@PathVariable Integer id_cargo) {
		Cargo cargo = cargoService.mostrarUmCargo(id_cargo);
		return ResponseEntity.ok().body(cargo);

	}
	
	@GetMapping("/cargoSemSupervisor")
	public List<Cargo> cargoSemSupervisor(){
		List<Cargo> cargo = cargoService.cargoSemSupervisor();
		return cargo;
	}
	
	@GetMapping("/cargo/cargo-supervisor/{id_super}")
	public Cargo cargoDoSupervisor(@PathVariable Integer id_super) {
		return cargoService.cargoDoSupervisor(id_super);
	}
	
	@GetMapping("/cargo/cargo-supervisor")
	public List <List> cargoJuntoSupervisor(){
		List <List> cargoSupervisor = cargoService.cargoJuntoSupervisor();
		return cargoSupervisor; 
	}

	@PostMapping("/cargo")
	public ResponseEntity<Cargo> cadastrarCargo(@RequestParam(value="supervisor", required = false) Integer id_super, @RequestBody Cargo cargo) {
		cargo = cargoService.cadastrarCargo(id_super, cargo);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(cargo.getId_cargo())
				.toUri();
		return ResponseEntity.created(uri).build();
	}

	@PutMapping("/cargo/{id_cargo}")
	public ResponseEntity<Cargo> editarCargo(@PathVariable Integer id_cargo, @RequestBody Cargo cargo) {
		cargo.setId_cargo(id_cargo);
		cargo = cargoService.editarCargo(cargo);
		return ResponseEntity.noContent().build();
	}

	@DeleteMapping("/cargo/{id_cargo}")
	public ResponseEntity<Cargo> deletarUmCargo(@PathVariable Integer id_cargo) {
		cargoService.deletarUmCargo(id_cargo);
		return ResponseEntity.noContent().build();

	}
	
	@PutMapping("/cargo/definirSupervisor/{id_cargo}/{id_super}")
	public ResponseEntity<Supervisor> atribuirSupervisor(@PathVariable Integer id_cargo, @PathVariable Integer id_super){
		cargoService.atribuirSupervisor(id_cargo, id_super);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/cargo/tirarSupervisor/{id_cargo}/{id_super}")
	public ResponseEntity<Supervisor> deixarCargoSemSupervisor(@PathVariable Integer id_cargo, @PathVariable Integer id_super){
		cargoService.deixarCargoSemSupervisor(id_cargo, id_super);
		return ResponseEntity.noContent().build();
	}

}
