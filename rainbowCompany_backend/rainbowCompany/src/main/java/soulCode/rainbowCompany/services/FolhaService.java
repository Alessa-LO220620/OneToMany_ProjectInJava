package soulCode.rainbowCompany.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soulCode.rainbowCompany.models.Folha;
import soulCode.rainbowCompany.models.Funcionario;
import soulCode.rainbowCompany.models.StatusPagamento;
import soulCode.rainbowCompany.repositories.FolhaRepository;

@Service
public class FolhaService {
	
	@Autowired
	private FolhaRepository folhaRepository; 
	
	@Autowired
	private FuncionarioService funcionarioService; 
	
	
	//metodos de servico
	public List<Folha> buscarTodasFolhas(){
		return folhaRepository.findAll();
	}
	
	public Folha buscarUmaFolha(Integer codigoFolha){
		Optional<Folha> folha = folhaRepository.findById(codigoFolha);
		return folha.orElseThrow();
	}
	
	public List<Folha> buscarFolhaDoFuncionario(Integer id_func){
		List<Folha> folha = folhaRepository.buscarFolhaDoFuncionario(id_func);
		return folha;
	}
	
	public Folha cadastrarFolha(Folha folha, Integer id_func){
		folha.setCodigoFolha(null);
		Funcionario funcionario = funcionarioService.mostrarUmFunc(id_func);
		folha.setFuncionario(funcionario);
		return folhaRepository.save(folha);
	}
	
	public void deletarFolha(Integer codigoFolha) {
		folhaRepository.deleteById(codigoFolha);
	}
	
	public Folha editarFolha(Folha folha, Integer id_func) {
		buscarUmaFolha(folha.getCodigoFolha());
		Funcionario funcionario = funcionarioService.mostrarUmFunc(id_func);
		folha.setFuncionario(funcionario);
		return folhaRepository.save(folha);
	}
	
	public Folha enviadoParaFinanceiro(Integer codigoFolha) {
		Folha folha = buscarUmaFolha(codigoFolha);
		StatusPagamento st1 = StatusPagamento.ENVIADOAOFINANCEIRO;
		folha.setStatus(st1);
		return folhaRepository.save(folha);
	}
	
	
	
	
	
	
	
	
	
}
