package soulCode.rainbowCompany.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import soulCode.rainbowCompany.models.Cargo;

public interface CargoRepository extends JpaRepository<Cargo, Integer> {

	@Query(value = "SELECT * FROM cargo WHERE id_super is null", nativeQuery = true)
	List<Cargo> cargoSemSupervisor();

	@Query(value = "SELECT * FROM cargo WHERE id_super = :id_super", nativeQuery = true)
	Cargo cargoDoSupervisor(Integer id_super);

	@Query(value = "SELECT cargo.id_cargo, cargo.cargo_nome, cargo.cargo_descricao, supervisor.id_super, supervisor.super_nome, supervisor.super_formacao FROM cargo LEFT JOIN supervisor ON supervisor.id_cargo = cargo.id_cargo order by cargo.cargo_nome", nativeQuery=true)
	List<List> cargoJuntoSupervisor();
}
