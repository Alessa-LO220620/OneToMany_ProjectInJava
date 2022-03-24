package soulCode.rainbowCompany.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import soulCode.rainbowCompany.models.Cargo;
import soulCode.rainbowCompany.models.Supervisor;
import soulCode.rainbowCompany.repositories.CargoRepository;
import soulCode.rainbowCompany.services.exceptions.ObjectNotFoundException;

@Service
public class CargoService {

	// injecao de dependencia
	@Autowired
	private CargoRepository cargoRepository;

	@Lazy
	@Autowired
	private SupervisorService supervisorService;

	// GET primeiro servico para listar/mostrar TODOS os cargos
	public List<Cargo> mostrarTodosCargos() {
		return cargoRepository.findAll();
	}

	// GET segundo servico para listar/mostrar UM cargo
	public Cargo mostrarUmCargo(Integer id_cargo) {
		Optional<Cargo> cargo = cargoRepository.findById(id_cargo);
		return cargo.orElseThrow(
				() -> new ObjectNotFoundException("Objeto não cadastrado! O ID procurado foi: " + id_cargo));
	}

	// GET **query nativa criada no repository do cargo para puxar serviços proprios
	// que não estariam no jpa
	public List<Cargo> cargoSemSupervisor() {
		return cargoRepository.cargoSemSupervisor();
	}

	// GET **query nativa criada no repository do cargo para puxar serviços proprios
	// que não estariam no jpa
	public Cargo cargoDoSupervisor(Integer id_super) {
		Cargo cargo = cargoRepository.cargoDoSupervisor(id_super);
		return cargo;
	}

	// GET **query nativa criada no repository do cargo para puxar serviços proprios
	// que não estariam no jpa
	public List<List> cargoJuntoSupervisor() {
		return cargoRepository.cargoJuntoSupervisor();
	}

	// POST terceiro servico para cadastrar um cargo
	public Cargo cadastrarCargo(Integer id_super, Cargo cargo) {
		cargo.setId_cargo(null);
		if (id_super != null) {
			Supervisor supervisor = supervisorService.mostrarUmSupervisor(id_super);
			cargo.setSupervisor(supervisor);
		}
		return cargoRepository.save(cargo);
	}

	// PUT quarto servico para editar
	public Cargo editarCargo(Cargo cargo) {
		mostrarUmCargo(cargo.getId_cargo());
		return cargoRepository.save(cargo);
	}

	// DELETE quinto servico para deletar
	public void deletarUmCargo(Integer id_cargo) {
		mostrarUmCargo(id_cargo);
		try {
			cargoRepository.deleteById(id_cargo);
		} catch (org.springframework.dao.DataIntegrityViolationException e) {
			throw new soulCode.rainbowCompany.services.exceptions.DataIntegrityViolationException(
					"O cargo não pode ser deletado. Possui funcionários cadastrados!");
		}
	}

	// servico para atribuir supervisor ao cargo
	public Cargo atribuirSupervisor(Integer id_cargo, Integer id_super) {
		Cargo cargo = mostrarUmCargo(id_cargo);
		Supervisor supervisorAnterior = supervisorService.buscarSupervisorDoCargo(id_cargo);
		Supervisor supervisor = supervisorService.mostrarUmSupervisor(id_super);
		if (cargo.getSupervisor() != null) {
			cargo.setSupervisor(null);
			supervisorAnterior.setCargo(null);
		} else
			cargo.setSupervisor(supervisor);
		supervisor.setCargo(cargo);
		return cargoRepository.save(cargo);
	}

	// servico para deixar um supervisor sem cargo
	public Cargo deixarCargoSemSupervisor(Integer id_cargo, Integer id_super) {
		Cargo cargo = mostrarUmCargo(id_cargo);
		cargo.setSupervisor(null);
		Supervisor supervisor = supervisorService.mostrarUmSupervisor(id_super);
		supervisor.setCargo(null);
		return cargoRepository.save(cargo);
	}

}
