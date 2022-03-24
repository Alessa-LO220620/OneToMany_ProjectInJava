package soulCode.rainbowCompany.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Cargo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_cargo;

	@Column(nullable = false, length = 60)
	private String cargo_nome;

	@Column(nullable = false, length = 80)
	private String cargo_descricao;

	@Column(nullable = false, length = 40)
	private String cargo_setor;

	@OneToMany(mappedBy = "cargo")
	private List<Funcionario> funcionario = new ArrayList<>();

	@OneToOne()
	@JoinColumn(name = "id_super", unique = true)
	private Supervisor supervisor;

	// get and set
	public Integer getId_cargo() {
		return id_cargo;
	}

	public void setId_cargo(Integer id_cargo) {
		this.id_cargo = id_cargo;
	}

	public String getCargo_nome() {
		return cargo_nome;
	}

	public void setCargo_nome(String cargo_nome) {
		this.cargo_nome = cargo_nome;
	}

	public String getCargo_setor() {
		return cargo_setor;
	}

	public void setCargo_setor(String cargo_setor) {
		this.cargo_setor = cargo_setor;
	}

	public String getCargo_descricao() {
		return cargo_descricao;
	}

	public void setCargo_descricao(String cargo_descricao) {
		this.cargo_descricao = cargo_descricao;
	}

	public List<Funcionario> getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(List<Funcionario> funcionario) {
		this.funcionario = funcionario;
	}

	public Supervisor getSupervisor() {
		return supervisor;
	}

	public void setSupervisor(Supervisor supervisor) {
		this.supervisor = supervisor;
	}

}
