/*
 * Archivo principal de funcionalidad de JS
 */

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