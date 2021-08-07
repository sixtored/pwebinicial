function hamburguesa() {
	var btn = document.getElementById('botones') 
	if (btn.style.display == 'none') {
		btn.style.display = 'block'
	} 
		else {
			btn.style.display = 'none'
		}
	
}

function mostrar() {
    var texto = document.getElementById('lista_servicios')
 //   texto.style.display = 'block'
    texto.style.border = 'solid 1px #ffffff'

}

function ocultar() {
    var texto = document.getElementById('lista_servicios')
 //   texto.style.display = 'none'
  texto.style.border = 'none'

}