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
import soulCode.rainbowCompany.models.Funcionario;
import soulCode.rainbowCompany.services.FuncionarioService;

//anotações importantes para erro de cors, para dizer que é um controller e para informar o endPoint
@CrossOrigin
@RestController
@RequestMapping("rainbowCompany")
public class FuncionarioController {

	//injecao do service e repository do funcionario
//	@Autowired
//	private FuncionarioRepository funcionarioRepository;
	@Autowired
	private FuncionarioService funcionarioService; 
	
	//metodo get do http para mapear ate a rota e mostrar todos os funcionarios
	@GetMapping("/funcionario")
	public List<Funcionario> mostrarTodosFunc(){
		List<Funcionario> func = funcionarioService.mostrarTodosFunc();
		return func;
	}
	
	//metodo get para mostrar os fucnionarios que tem cargos cadastrados nele
	@GetMapping("/funcionario-cargo")
	public List<List>mostrarFuncionarioComCargo(){
		List<List> funcionarioCargo = funcionarioService.funcionarioComCargo();
		return funcionarioCargo;
	}
	
	//anotação get onde conseguiremos acessar as infos do funcionario
	// o @pathVariable é para dizer que vai ser passado através do paramêtro da url
	@GetMapping("/funcionario/{id_func}")
	public ResponseEntity<Funcionario> mostrarUmFunc(@PathVariable Integer id_func){
		Funcionario fun = funcionarioService.mostrarUmFunc(id_func);
		return ResponseEntity.ok().body(fun);
	}
	
	//metodo para buscar um funcionario por cargo
	@GetMapping("/funcionario/busca-cargo/{id_cargo}")
	public List<Funcionario> buscarFuncionarioPorCargo(@PathVariable Integer id_cargo){
		List<Funcionario> fun = funcionarioService.buscarFuncionarioPorCargo(id_cargo);
		return fun;
	}
	
	@PutMapping("/funcionario/inserirCargo/{id_func}")
	public ResponseEntity<Funcionario> cadastrarFuncionarioNoCargo(@PathVariable Integer id_func, @RequestBody Cargo cargo){
		Funcionario funcionario = funcionarioService.cadastrarFuncionarioNoCargo(id_func, cargo);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/funcionario/deixarSemCargo/{id_func}")
	public ResponseEntity <Funcionario> deixarFuncionarioSemCargo(@PathVariable Integer id_func){
		Funcionario funcionario = funcionarioService.deixarFuncionarioSemCargo(id_func);
		return ResponseEntity.noContent().build();
	}
	
	//metodo para cadastro e fazer o mapeamento
	@PostMapping("/funcionario")
	public ResponseEntity<Funcionario> cadastrarFunc(@RequestBody Funcionario func){
		func = funcionarioService.cadastrarFunc(func);
		URI uri= ServletUriComponentsBuilder.fromCurrentRequest().path("/funcionario/{id}")
				.buildAndExpand(func.getId_func()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	//metodo para deletar e fazer mapeamento
	@DeleteMapping("/funcionario/{id_func}")
	public ResponseEntity<Void> deletarFuncionario(@PathVariable Integer id_func){
		funcionarioService.deletarFuncionario(id_func);
		return ResponseEntity.noContent().build();	
	}
	
	//metodo para editar usando o mapeamento
	@PutMapping("/funcionario/{id_func}")
	public ResponseEntity<Void> editarFunc(@PathVariable Integer id_func, @RequestBody Funcionario func){
		func.setId_func(id_func);
		func = funcionarioService.editarFunc(func);
		return ResponseEntity.noContent().build();
	}
	
	
























}
