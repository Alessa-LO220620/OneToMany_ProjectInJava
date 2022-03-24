package soulCode.rainbowCompany.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Funcionario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_func;
	
	@Column(nullable = false, length = 80)
	private String fnc_nome;
	
	@Column(nullable = false, length = 30)
	private Integer fnc_salario;
	
	@Column(nullable = false, length = 60)
	private String fnc_cidade;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "id_cargo")
	private Cargo cargo;

	
	//get and set
	public Integer getId_func() {
		return id_func;
	}

	public void setId_func(Integer id_func) {
		this.id_func = id_func;
	}

	public String getFnc_nome() {
		return fnc_nome;
	}

	public void setFnc_nome(String fnc_nome) {
		this.fnc_nome = fnc_nome;
	}

	public Integer getFnc_salario() {
		return fnc_salario;
	}

	public void setFnc_salario(Integer fnc_salario) {
		this.fnc_salario = fnc_salario;
	}

	public String getFnc_cidade() {
		return fnc_cidade;
	}

	public void setFnc_cidade(String fnc_cidade) {
		this.fnc_cidade = fnc_cidade;
	}

	public Cargo getCargo() {
		return cargo;
	}

	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}


	
	
}
