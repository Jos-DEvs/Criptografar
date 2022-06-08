
	var textoDigitado = document.querySelector("#textoDigitado");
	var textoExibido = document.querySelector("#textoExibido");	
		
	
	var codar = [];
	var fraseCripto = "";
	var fraseDescipto = "";
	
	//Criptogrfar
	var criptografa = document.querySelector(".criptografa");
	
	criptografa.addEventListener("click", function(event){
		event.preventDefault();		
		
		if(textoDigitado.value){
			
				if(textoDigitado.value && textoExibido.value){
					// caso a entrada de texto está vazia
						alert("Você precisa resetar para poder continuar");					
				} else {						
						var obTe = objetoTexto();			// 
						
						for(var x = 0; x < obTe.length; x++){
						  
						  const index = obTe[x].findIndex((element, index) => {
							  fraseCripto = fraseCripto + element.code;
							  })
						}
						
						textoExibido.textContent = fraseCripto;	//Operação de criptografar						
						
						var exibirTextSaido = document.querySelector(".exibirTextSaido");
							exibirTextSaido.textContent = "CRIPTOGRAFAR";
						
						var formDigit = document.querySelector("#form-digitado");
						formDigit.reset();	// Limpar o campo			
						
						textoDigitado.readOnly = true;	//Deixar o campo ineditável
						
						textoDigitado.placeholder = "Você só pode descriptografar agora";						
							
					}
		} else if (textoExibido.value){
				alert("Você precisa descriptografar seu texto ou você reseta o aplicativo");
		} else {	
			alert("Você ainda não digita nada");
		}
				
	});
	
	//Descriptografar
	var descriptografa = document.querySelector(".descriptografa");
	var x  = 0;
	
	descriptografa.addEventListener("click", function(event){
		event.preventDefault();		
		
		if(textoExibido.value){			
			
			if(!textoDigitado.value){	// Descriptografar se  o campo de entrada está vazio
				
				x = 1; 
				
					var obTe = objetoTexto();
				
				for(var x = 0; x < obTe.length; x++){
				  
				  const index = obTe[x].findIndex((element, index) => {
					  fraseDescipto = fraseDescipto + element.conteudo;
					  })
				}				
				textoDigitado.textContent = textoExibido.textContent;
				
				var exibirTextEntrado = document.querySelector(".exibirTextEntrado");
							exibirTextEntrado.textContent = "CRIPTOGRAFAR";
				
				textoExibido.textContent = fraseDescipto;//Operação de Descriptografar
				
				var exibirTextSaido = document.querySelector(".exibirTextSaido");
							exibirTextSaido.textContent = "DESCRIPTOGRAFAR";
				
			} else {
				alert("Você precisa resetar para poder continuar");		
			}		
			
		} else {
			alert("Não há nenhum texto para descriptografar");
		}
		
	});
	
	
	textoDigitado.addEventListener("input", atualizaCaracteres);
	
	var qdeCaracteres;
	var text;
	
	function atualizaCaracteres() {		
			text = textoDigitado.value;
			
			textoConteudo = textoDigitado.value;
		    qdeCaracteres = textoConteudo.length;
	}
	
	
	
	function objetoTexto(){
		var cod = randomCaracteres();
		
		for(var x = 0; x < qdeCaracteres; x++){
			
			var cod = randomCaracteres();
			
				if(text[x] != " "){
					codar[x] = [
						{
						conteudo : text[x], 
						code : cod
						}
					];
				} else{		// Se tem um espaço na frase.
					codar[x] = [
						{
						conteudo : text[x], 
						code : " "
						}
					];
				}
			  
		}
		
		return codar;
	}	
	 
	
	function randomCaracteres() {
	  var text = "";
	  var alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	  for (var i = 0; i < 2; i++)
		text += alfabet.charAt(Math.floor(Math.random() * alfabet.length));

	  return text;
	}

	
	var res = document.querySelector(".reset");
	res.addEventListener("click", function(event){
		event.preventDefault();	
		
		/*
		var formDigit = document.querySelector("#form-digitado");
				formDigit.reset();	// Limpar o campo
				//textoDigitado.reset();
		
		/*
		var formExibi = document.querySelector("#form-exibir");
				formExibi.reset();	// Limpar o campo
				//textoExibido.reset();*/
				location.reload();
	});
	
	
	
	
	
	
	
	
	
	
	
	
	