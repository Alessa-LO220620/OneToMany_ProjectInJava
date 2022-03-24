package soulCode.rainbowCompany.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import soulCode.rainbowCompany.models.Cargo;
import soulCode.rainbowCompany.models.Supervisor;
import soulCode.rainbowCompany.repositories.CargoRepository;
import soulCode.rainbowCompany.repositories.SupervisorRepository;

@Service
public class SupervisorService {

	@Autowired
	private SupervisorRepository supervisorRepository;
	@Autowired
	private CargoService cargoService;
	@Autowired
	private CargoRepository cargoRepository;

	// servico get mostrar a lista geral de supervisor, apenas.
	public List<Supervisor> mostrarTodosSupervisores() {
		return supervisorRepository.findAll();
	}
	
	//servico get mostrar todos os supervisores + as informações de cargo
	public List<List> SupervisorComCargo(){
		return supervisorRepository.SupervisorComCargo();
	}

	// servico get
	public Supervisor mostrarUmSupervisor(Integer id_super) {
		Optional<Supervisor> supervisor = supervisorRepository.findById(id_super);
		return supervisor.orElseThrow();
	}

	// servico get **usei um @query criado no repository, um metodo proprio foi
	// criado.
	public Supervisor buscarSupervisorDoCargo(Integer id_cargo) {
		Supervisor supervisor = supervisorRepository.buscarSupervisorDoCargo(id_cargo);
		return supervisor;
	}

	// servico get **usei um @query criado no repository, um metodo proprio foi
	// criado.
	public List<Supervisor> supervisorSemCargo() {
		return supervisorRepository.supervisorSemCargo();
	}
	
	//servico get **usei um @query criado no repository, um metodo proprio foi
	// criado.
	public Supervisor buscarSupervisorNome(String super_nome) {
	Supervisor supervisor = supervisorRepository.buscarSupervisorNome(super_nome);
	return supervisor; 
	}

	// servico post
	public Supervisor cadastrarSupervisor(Integer id_cargo, Supervisor supervisor) {
		supervisor.setId_super(null);
		if (id_cargo != null) {
			Cargo cargo = cargoService.mostrarUmCargo(id_cargo);
			supervisor.setCargo(cargo);
		}
		return supervisorRepository.save(supervisor);
	}

	// servico put
	public Supervisor editarSupervisor(Supervisor supervisor){
		mostrarUmSupervisor(supervisor.getId_super());
		return supervisorRepository.save(supervisor);
	}

	// servico para postar a foto do supervisor
	public Supervisor salvarFoto(Integer id_super, String pathFoto) {
		Supervisor sup = mostrarUmSupervisor(id_super);
		sup.setSuper_foto(pathFoto);
		return supervisorRepository.save(sup);
	}
	
	//servico de deletar um supervisor
	public void deletarSupervisor(Integer id_super){
		supervisorRepository.deleteById(id_super);
	}

}
