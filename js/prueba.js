/* En este archivo debe agregar las clases JS que considere necesarias para la realización de las pruebas de páginas Estáticas */

function validar() {

	var todo_correcto = true;

	if(document.getElementById('nombre').value.length < 2 ){
    todo_correcto = false;
	}

	var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	var email = document.form1.email.value;
	if (!expresion.test(email)){
    todo_correcto = false;
	}


	if(!todo_correcto){
		alert('Algunos campos no están correctos, vuelva a revisarlos');
	}

return todo_correcto;
	alert('Algunos campos no están correctos, vuelva a revisarlos');
}
