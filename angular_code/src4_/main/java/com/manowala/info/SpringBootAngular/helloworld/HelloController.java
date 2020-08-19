package com.manowala.info.SpringBootAngular.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloController {

	@RequestMapping(method = RequestMethod.GET, path = "/helloworld")
	public String getHelloWorld() {
		return "Hello world";
	}
	// or

	@GetMapping("/helloworlds")
	public String getHelloWorlds() {
		return "Hello worlds";
	}

	@GetMapping("/helloworldbean")
	public HelloWorldBean getHelloWorldBean() {
		return new HelloWorldBean("Hello worlds");
	}
	@GetMapping("/helloworldbeans")
	public HelloWorldBean getHelloWorldBeans() {
		return new HelloWorldBean(String.format("Hello worlds"));
	}

	// path veriables

	@GetMapping("/helloworldbean/path-variables/{name}")
	public HelloWorldBean getHelloWorldBean(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello worlds , %s", name));
	}

	// some error occurs
	@GetMapping("/helloworldbean/path-variable/{name}")
	public HelloWorldBean getHelloWorldBeanMesage(@PathVariable String name) {
		if (name.equals("Anupam")) {
			return new HelloWorldBean(String.format("Hello worlds , %s", name));
		} else {
			throw new RuntimeException("Some error has hapend Contact Support at ****@***");
		}

	}
}
