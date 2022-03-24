package soulCode.rainbowCompany.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soulCode.rainbowCompany.models.Cargo;
import soulCode.rainbowCompany.models.Funcionario;
import soulCode.rainbowCompany.repositories.FuncionarioRepository;

@Service
public class FuncionarioService {
	
	//injecoes de dependencia
	@Autowired
	private FuncionarioRepository funcionarioRepository;
	
	@Autowired
	private CargoService cargoService;
	
	//GET primeiro serviço é a listar/ver todos os funcionarios
	public List<Funcionario> mostrarTodosFunc(){
		return funcionarioRepository.findAll();
	}
	
	//GET para mostrar funcionarios com cargos cadastrados
	public List<List> funcionarioComCargo(){
		return funcionarioRepository.funcionarioComCargo();
	}
	
	//GET segundo serviço para listar/ver apenas UM funcionario
	public Funcionario mostrarUmFunc(Integer id_func){
		Optional<Funcionario> fun = funcionarioRepository.findById(id_func);
		return fun.orElseThrow();
	}
	
	//servico para buscar apenas um funcinario por cargo
	public List<Funcionario> buscarFuncionarioPorCargo(Integer id_cargo){
		List<Funcionario> func = funcionarioRepository.buscarFuncionarioPorCargo(id_cargo);
		return func;
	}
	
	//cadastrar um funconario no cargo
	public Funcionario cadastrarFuncionarioNoCargo(Integer id_func, Cargo cargo) {
		Funcionario funcionario = mostrarUmFunc(id_func);
		funcionario.setCargo(cargo);
		return funcionarioRepository.save(funcionario);
	}
	
	//deixar funcionario sem cargo
	public Funcionario deixarFuncionarioSemCargo(Integer id_func) {
		Funcionario funcionario = mostrarUmFunc(id_func);
		funcionario.setCargo(null);
		return funcionarioRepository.save(funcionario);
	}
	
	//POST terceiro servico para cadastrar/inserir
	public Funcionario cadastrarFunc(Funcionario funcionario) {
		funcionario.setId_func(null);
		return funcionarioRepository.save(funcionario);
	}
	
	//DELETE quarto servico para deletar
	public void deletarFuncionario(Integer id_func){
		funcionarioRepository.deleteById(id_func);
	}
	
	//PUT quinto serviço para editar
	public Funcionario editarFunc(Funcionario fun){
		mostrarUmFunc(fun.getId_func());
		return funcionarioRepository.save(fun);
	}



}
