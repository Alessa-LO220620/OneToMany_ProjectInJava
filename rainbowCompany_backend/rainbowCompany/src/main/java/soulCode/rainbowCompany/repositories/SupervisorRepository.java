package soulCode.rainbowCompany.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import soulCode.rainbowCompany.models.Supervisor;

public interface SupervisorRepository extends JpaRepository<Supervisor, Integer>{

	@Query(value = "SELECT * FROM supervisor WHERE id_cargo = :id_cargo", nativeQuery = true)
	Supervisor buscarSupervisorDoCargo(Integer id_cargo);
	
	@Query(value = "SELECT * FROM supervisor WHERE id_cargo is null", nativeQuery = true)
	List<Supervisor> supervisorSemCargo();
	
	@Query(value = "SELECT supervisor.id_super,supervisor.super_foto, supervisor.super_nome, supervisor.super_formacao,cargo.cargo_nome,cargo.cargo_setor FROM cargo right JOIN supervisor ON supervisor.id_cargo = cargo.id_cargo order by supervisor.super_nome",nativeQuery = true)
	List<List> SupervisorComCargo();
	
	@Query(value = "SELECT * FROM supervisor WHERE super_nome = :super_nome", nativeQuery = true)
	Supervisor buscarSupervisorNome(String super_nome);
}
