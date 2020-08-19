package com.manowala.info.SpringBootAngular.springauth;

public class AuthicationBean {

	private String message;

	public AuthicationBean() {
	}

	public AuthicationBean(String message) {
		this.message = message;
	}
	
	

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {

		return String.format("AuthicationBean [message=%s]", message);
	}

}
