package soulCode.rainbowCompany.models;

public enum StatusPagamento {
	
	ENVIADOAOFINANCEIRO("Enviado ao Financeiro");

	
private String descricao;
	
	StatusPagamento(String descricao){
		this.descricao = descricao;
	}

	public String getDescricao() {
		return descricao;
	}

}
