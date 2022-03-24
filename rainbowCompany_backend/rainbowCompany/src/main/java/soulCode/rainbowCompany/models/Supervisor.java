package soulCode.rainbowCompany.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Supervisor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_super;

	@Column(nullable = false, length = 60)
	private String super_nome;

	@Column(nullable = false, length = 60)
	private String super_formacao;

	@Column(nullable = true)
	private String super_foto;

	@OneToOne
	@JoinColumn(name = "id_cargo", unique = true)
	@JsonIgnore
	private Cargo cargo;

	// getters and setters

	public Integer getId_super() {
		return id_super;
	}

	public void setId_super(Integer id_super) {
		this.id_super = id_super;
	}

	public String getSuper_nome() {
		return super_nome;
	}

	public void setSuper_nome(String super_nome) {
		this.super_nome = super_nome;
	}

	public String getSuper_formacao() {
		return super_formacao;
	}

	public void setSuper_formacao(String super_formacao) {
		this.super_formacao = super_formacao;
	}

	public String getSuper_foto() {
		return super_foto;
	}

	public void setSuper_foto(String super_foto) {
		this.super_foto = super_foto;
	}

	public Cargo getCargo() {
		return cargo;
	}

	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}

}
