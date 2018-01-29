/*
var paciente = document.querySelectorAll(".paciente");
paciente.forEach(function(pacientes){
	pacientes.addEventListener("dblclick" , function(){
		this.remove();

	});

});

*/
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick" , function(event){
	
	event.target.parentNode.classList.add("fadeOut");
	
	setTimeout(function(){

	event.target.parentNode.remove();	
	}, 500);

});

