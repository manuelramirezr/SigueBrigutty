var storeEstados;
function fncObtenerEstadoRegistro (estadoReg) {
	var estado;
	switch (estadoReg) {
		case 1:
			estado = "Activo";
		break;
		case 2:
			estado = "Bloqueado";
		break;
		case 3: 
			estado = "Eliminado";
		break;
		case 4: 
			estado = "Otro";
		break;
		case 5: 
			estado = "Pendiente";
		break;
		case 6: 
			estado = "Entregado";
		break;
		case 7: 
			estado = "Inactivo";
		break;
		case 8: 
			estado = "Vacaciones";
		break;
	}
	return estado;
};
function fncObtenerPrioridad(prioridad) {
	var descripcion;
	switch (prioridad) {
		case 1:
			descripcion = "Baja";
		break;
		case 2:
			descripcion = "Media";
		break;
		case 3: 
			descripcion = "Alta";
		break;
	}
	return descripcion;
};
function msgGenerico (mensaje, icono) {
	switch (icono){
		case "error" :
			return Ext.MessageBox.show({
	           title: getEtiqueta('mensaje-generico','esp'),
	           msg: mensaje,
	           buttons: Ext.MessageBox.OK,
	           animEl: 'noticia',
	           //fn: showResult,
	           icon: Ext.Msg.ERROR
       		});
		break;
		case "info" :
			return Ext.MessageBox.show({
	           title: getEtiqueta('mensaje-generico','esp'),
	           msg: mensaje,
	           buttons: Ext.MessageBox.OK,
	           animEl: 'noticia',
	           //fn: showResult,
	           icon: Ext.Msg.INFO
       		});
		break;
		case "cuidado" :
			return  Ext.MessageBox.show({
	           title: getEtiqueta('mensaje-generico','esp'),
	           msg: mensaje,
	           buttons: Ext.MessageBox.OK,
	           animEl: 'noticia',
	           //fn: showResult,
	           icon: Ext.Msg.WARNING
       		});
		break;
	}
	
  
}
function getEtiqueta(etiqueta,len){
	switch(len){
		case "esp":
			switch(etiqueta){
				case 'mensaje-generico':
					return "Mensaje del Sistema";
				break;
			}
		break;
		case "eng":
			switch(etiqueta){
				case 'mensaje-generico':
					return "System Message";
				break;
			}
		break;
	}
	
	
}