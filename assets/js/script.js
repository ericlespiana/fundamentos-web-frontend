/*
	Case Sensitive

	Por tag:     getElementByTagName()
	Por id:      getElementById()
	Por nome:    getElementsByName()
	Por classe:  getElementsByClassName()
	Por seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = window.document.querySelector("input#email");
let assunto = document.querySelector("textarea#assunto");
let mapa = document.querySelector("#map-iframe")
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;


function validaNome()
{
	let divNome = document.querySelector("#divNome");

	nomeOk = false;
	if (nome.value == ""){
		divNome.innerHTML = "";
		return;
	}

	if (nome.value.length <= 2){
		divNome.innerHTML = "Nome inválido!";
		divNome.style.color = "red";
	}else{
		divNome.innerHTML = "Nome válido";
		divNome.style.color = "green";
		nomeOk = true;
	}
}

function validaEmail()
{
	const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	let divEmail = document.querySelector("#divEmail");

	emailOk = false;
	if (email.value == ""){
		divEmail.innerHTML = "";
		return;
	}

	if (!regex.test(email.value)) {
        divEmail.innerHTML = "Email inválido!";
        divEmail.style.color = "red";
	}else{
		divEmail.innerHTML = "Email válido";
		divEmail.style.color = "green";
		emailOk = true;
	}
}

function validaAssunto()
{
	let divAssunto = document.querySelector("#divAssunto");

	assuntoOk = false;
	if (assunto.value == ""){
		divAssunto.innerHTML = "";
		return;
	}

	if (assunto.value.length >= 100){
		divAssunto.style.color = "red";
		divAssunto.innerHTML = "Texto muito grande! Insira até 100 carácteres";
	}else{
		divAssunto.innerHTML = "";
		assuntoOk = true;
	}
}

function enviar()
{
	if (nomeOk && emailOk && assuntoOk){
		alert("Formulário enviado com sucesso!");
	}else{
		alert("Preencha o formulário corretamente antes de enviar...")
	}
}

function mapaZoom(){
	mapa.style.height = "400px";
}

function mapaNormal(){
	mapa.style.width = "100%";
	mapa.style.height = "300px";
}