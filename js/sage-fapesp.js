
/* 
Autoria: Beatriz Castro
Function acessar() para verificar login do usuário
*/
function acessar() {

	var usuario = document.getElementsByName('username').value;
	var senha = document.getElementsByName('password').value;

		if (usuario != "admin" && senha != 123) {
			window.location.href = "pagina-inicial.html";

			
			// return true;
		} else {
			//window.location = "teste.html";
			alert("Dados inválidos!");
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Your work has been saved',
				showConfirmButton: false,
				timer: 1500
			});
		}
} 


