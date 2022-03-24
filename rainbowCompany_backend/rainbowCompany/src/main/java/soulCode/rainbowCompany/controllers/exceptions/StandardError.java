package soulCode.rainbowCompany.controllers.exceptions;

public class StandardError {

	// criando os atributos dessa classe, correlacionando os tipos de erro
	private String timestamp;
	private Integer status;
	private String error;

	// criando o construtor
	public StandardError(String timestamp, Integer status, String error) {
		super();
		this.timestamp = timestamp; // horario o erro
		this.status = status; // status 400, 500
		this.error = error; // mensagem do erro
	}

	// criando os getters and setters
	public String getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}
}
