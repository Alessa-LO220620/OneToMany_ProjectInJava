package soulCode.rainbowCompany.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import soulCode.rainbowCompany.models.Folha;

public interface FolhaRepository extends JpaRepository <Folha, Integer>{

	@Query(value = "SELECT * FROM folha where id_func= :id_func", nativeQuery = true)
	List<Folha> buscarFolhaDoFuncionario(Integer id_func);
}
