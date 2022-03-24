package soulCode.rainbowCompany.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.NumberFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Folha {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer codigoFolha;

	@Column(nullable = false)
	private String folhaDescricao;

	@DateTimeFormat(pattern = "dd-MM-yyyy")
	@Column(columnDefinition = "date", nullable = false)
	@Temporal(TemporalType.DATE) // sem salvar a hora, só o dia
	private Date dataPagamento;

	@NumberFormat(pattern = "#,##0.00")
	@Column(nullable = false)
	private Double salario;

	@NumberFormat(pattern = "#,##0.00")
	@Column(nullable = false)
	private Double beneficio;

	@Column(nullable = false)
	private Integer num_falta;

	@Enumerated(EnumType.STRING)
	private StatusPagamento status;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "id_func")
	private Funcionario funcionario;
	
	//getters and setters

	public Integer getCodigoFolha() {
		return codigoFolha;
	}

	public void setCodigoFolha(Integer codigoFolha) {
		this.codigoFolha = codigoFolha;
	}

	public String getFolhaDescricao() {
		return folhaDescricao;
	}

	public void setFolhaDescricao(String folhaDescricao) {
		this.folhaDescricao = folhaDescricao;
	}

	public Date getDataPagamento() {
		return dataPagamento;
	}

	public void setDataPagamento(Date dataPagamento) {
		this.dataPagamento = dataPagamento;
	}

	public Double getBeneficio() {
		return beneficio;
	}

	public void setBeneficio(Double beneficio) {
		this.beneficio = beneficio;
	}

	public Integer getNum_falta() {
		return num_falta;
	}

	public void setNum_falta(Integer num_falta) {
		this.num_falta = num_falta;
	}

	public StatusPagamento getStatus() {
		return status;
	}

	public void setStatus(StatusPagamento status) {
		this.status = status;
	}

	public Funcionario getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(Funcionario funcionario) {
		this.funcionario = funcionario;
	}

	public Double getSalario() {
		return salario;
	}

}
