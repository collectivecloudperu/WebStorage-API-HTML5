function start () {
	var button = document.getElementById("save");
	button.addEventListener("click", NewItem, false);
}

function NewItem(){
	var email = document.getElementById("email").value;
	var datos = document.getElementById("datos").value;
	sessionStorage.setItem(email, datos);
	read_data(email);
	document.getElementById("email").value = "";
	document.getElementById("datos").value = "";

}

function read_data(email){
	var show = document.getElementById("showdata");
	show.innerHTML='<div><center><button onclick="deleteall()">Delete All</button></center></div>';
	for(i=0;i<sessionStorage.length;i++){
		var email = sessionStorage.key(i);
		var newvalue = sessionStorage.getItem(email);
		show.innerHTML+='<div>Email: '+ email + '<br>' + 'Datos: '+ datos + '<br><br><center><button onclick="deleteitem(\''+ email + '\')"> Delete</button></center></div';
	}
}

function deleteall(){
	if (confirm("Estas seguro que deseas eliminar todos los items")) {
		sessionStorage.clear();
		read_data();
	};
}

function deleteitem(clave){
	if (confirm("Estas seguro que deseas eliminar este item")) {
		sessionStorage.removeItem(clave);
		read_data();
	};
}
window.addEventListener("load", start, false);