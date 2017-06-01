/*
 * Archivo principal de funcionalidad de JS
 */

 //funcion que hizo la Blanca para las imaganes de la seccion services

 (function main(){
 	var boxes= Array.from(document.getElementsByClassName('box-services'));
 	var modal=document.getElementById("box-services-modal");
 	var bodyModal, close;

 	boxes.forEach(function(box){

 		
 		box.addEventListener("click", function(){
 			modal.innerHTML="";

 			bodyModal=document.createElement("div");

 			bodyModal.classList.add("modal-body");

 			bodyModal.innerHTML=box.innerHTML;

 			modal.appendChild(bodyModal);

 			modal.classList.remove("hide");

 			close=document.createElement("div");
 			close.classList.add("close");
 			img=document.createElement("img");
 			img.setAttribute("src", "http://static1.squarespace.com/static/55a420c9e4b01d62e11ae524/t/573bf9cc8259b5b384b219e8/1475714273597/");
 			close.appendChild(img);
 			modal.appendChild(close);

 			close.addEventListener("click", function(){
 				modal.classList.add("hide");

 			});
 		});

/*var close=document.querySelector("#box-services-modal .close");
close.addEventListener("click", function(){
	modal.classList.add("hide");
});*/
});
 })();

 //funcion para las ventanas emergentes de las nueve imagenes de la seccion work

 (function main-fotos(){
 	var cajas=Array.from(document.getElementsByClassName("col-4"));
 	var cajas-fotos=document.getElementById("box-services-container");
 	var containerModal, closeContainer;

 	cajas.forEach(function(cajabox){
 		cajabox.addEventListener("click", function(){
 			cajas-fotos.innerHTML="";
 			containerModal=document.createElement("div");
 			containerModal.classList.add("modal-container");
 			containerModal.innerHTML=cajabox.innerHTML;
 			cajas-fotos.appendChild(containerModal);
 			cajas-fotos.classList.remove("hide");
 			closeContainer=document.createElement("div");
 			closeContainer.classList.add("closeContainer");
 			imag=document.createElement("img");
 			imag.setAttribute("src", "http://static1.squarespace.com/static/55a420c9e4b01d62e11ae524/t/573bf9cc8259b5b384b219e8/1475714273597/");
 			closeContainer.appendChild(imag);
 			cajas-fotos.appendChild(closeContainer);
 			closeContainer.addEventListener("click", function(){
 				cajas-fotos.classList.add("hide");
 			});
 		});
 	});

 })();