var nombre="sin nombre";

function leer_Datos(){
	nombre=prompt("Nombre: ");
	if (nombre==null || nombre=="")
		alert("Debe escribir el nombre")
	else
		alert("El nombre es "+nombre)
}
function saludar(){
	alert("El nombre es "+nombre)
}