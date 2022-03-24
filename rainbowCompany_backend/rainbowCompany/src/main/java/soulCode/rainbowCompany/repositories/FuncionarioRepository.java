package soulCode.rainbowCompany.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import soulCode.rainbowCompany.models.Funcionario;

public interface FuncionarioRepository extends JpaRepository<Funcionario,Integer>{

	@Query(value = "SELECT * FROM funcionario WHERE id_cargo = :id_cargo", nativeQuery = true)
		List<Funcionario> buscarFuncionarioPorCargo(Integer id_cargo);
	
	//mostrar os funcionarios que estão com cargos cadastrados nele
	@Query(value = "SELECT id_func, fnc_nome, fnc_cidade, cargo_nome, cargo_descricao FROM cargo RIGHT JOIN funcionario ON funcionario.id_cargo = cargo.id_cargo order by cargo_nome, fnc_nome", nativeQuery = true)
	List<List> funcionarioComCargo();
}
