Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Cargando...</div>';

if(Ext.DataView){
  Ext.DataView.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
  Ext.grid.GridPanel.prototype.ddText = "{0} fila(s) seleccionada(s)";
}

if(Ext.LoadMask){
  Ext.LoadMask.prototype.msg = "Cargando...";
}
 
Date.monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

Date.getShortMonthName = function(month) {
  return Date.monthNames[month].substring(0, 3);
};

Date.monthNumbers = {
  Ene : 0,
  Feb : 1,
  Mar : 2,
  Abr : 3,
  May : 4,
  Jun : 5,
  Jul : 6,
  Ago : 7,
  Sep : 8,
  Oct : 9,
  Nov : 10,
  Dic : 11
};

Date.getMonthNumber = function(name) {
  return Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
};

Date.dayNames = [
  "Domingo",
  "Lunes",
  "Martes",
  "Mi&#233;rcoles",
  "Jueves",
  "Viernes",
  "S&#225;bado"
];

Date.getShortDayName = function(day) {
  if (day==3) return "Mié";
  if (day==6) return "Sáb";
  return Date.dayNames[day].substring(0, 3);
};

Date.parseCodes.S.s = "(?:st|nd|rd|th)";

if(Ext.MessageBox){
  Ext.MessageBox.buttonText = {
	ok     : "Aceptar",
	cancel : "Cancelar",
	yes    : "S&#237;",
	no     : "No"
  };
}

if(Ext.util.Format){
  Ext.util.Format.date = function(v, format){
	if(!v) return "";
	if(!(v instanceof Date)) v = new Date(Date.parse(v));
	return v.dateFormat(format || "d/m/Y");
  };
}

if(Ext.DatePicker){
  Ext.apply(Ext.DatePicker.prototype, {
	todayText         : "Hoy",
	minText           : "Esta fecha es anterior a la fecha m&#237;nima",
	maxText           : "Esta fecha es posterior a la fecha m&#225;xima",
	disabledDaysText  : "",
	disabledDatesText : "",
	monthNames        : Date.monthNames,
	dayNames          : Date.dayNames,
	nextText          : 'Mes Siguiente (Control+Right)',
	prevText          : 'Mes Anterior (Control+Left)',
	monthYearText     : 'Seleccione un mes (Control+Up/Down para desplazar el a&#241;o)',
	todayTip          : "{0} (Barra espaciadora)",
	format            : "d/m/Y",
	okText            : "&#160;Ok&#160;",
	cancelText        : "Cancelar",
	startDay          : 1
  });
}

if(Ext.PagingToolbar){
  Ext.apply(Ext.PagingToolbar.prototype, {
	beforePageText : "P&#225;gina",
	afterPageText  : "de {0}",
	firstText      : "Primera p&#225;gina",
	prevText       : "P&#225;gina anterior",
	nextText       : "P&#225;gina siguiente",
	lastText       : "Última p&#225;gina",
	refreshText    : "Actualizar",
	displayMsg     : "Mostrando {0} - {1} de {2}",
	emptyMsg       : 'Sin datos para mostrar'
  });
}

if(Ext.form.Field){
  Ext.form.Field.prototype.invalidText = "El valor en este campo es inv&#225;lido";
}

if(Ext.form.TextField){
  Ext.apply(Ext.form.TextField.prototype, {
	minLengthText : "El tama&#241;o m&#237;nimo para este campo es de {0}",
	maxLengthText : "El tama&#241;o m&#225;ximo para este campo es de {0}",
	blankText     : "Este campo es obligatorio",
	regexText     : "",
	emptyText     : null
  });
}

if(Ext.form.NumberField){
  Ext.apply(Ext.form.NumberField.prototype, {
	decimalSeparator : ".",
	decimalPrecision : 2,
	minText : "El valor m&#237;nimo para este campo es de {0}",
	maxText : "El valor m&#225;ximo para este campo es de {0}",
	nanText : "{0} no es un n&#250;mero v&#225;lido"
  });
}

if(Ext.form.DateField){
  Ext.apply(Ext.form.DateField.prototype, {
	disabledDaysText  : "Deshabilitado",
	disabledDatesText : "Deshabilitado",
	minText           : "La fecha para este campo debe ser posterior a {0}",
	maxText           : "La fecha para este campo debe ser anterior a {0}",
	invalidText       : "{0} no es una fecha v&#225;lida - debe tener el formato {1}",
	format            : "d/m/Y",
	altFormats        : "d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
  });
}

if(Ext.form.ComboBox){
  Ext.apply(Ext.form.ComboBox.prototype, {
	loadingText       : "Cargando...",
	valueNotFoundText : undefined
  });
}

if(Ext.form.VTypes){
  Ext.apply(Ext.form.VTypes, {
	emailText    : 'Este campo debe ser una direcci&#243;n de correo electr&#243;nico con el formato "usuario@dominio.com"',
	urlText      : 'Este campo debe ser una URL con el formato "http:/'+'/www.dominio.com"',
	alphaText    : 'Este campo s&#243;lo debe contener letras y _',
	alphanumText : 'Este campo s&#243;lo debe contener letras, n&#250;meros y _'
  });
}

if(Ext.grid.GridView){
  Ext.apply(Ext.grid.GridView.prototype, {
	sortAscText  : "Ordenar en forma ascendente",
	sortDescText : "Ordenar en forma descendente",
	columnsText  : "Columnas"
  });
}

if(Ext.grid.GroupingView){
  Ext.apply(Ext.grid.GroupingView.prototype, {
	emptyGroupText : '(Ninguno)',
	groupByText    : 'Agrupar por este campo',
	showGroupsText : 'Mostrar en grupos'
  });
}

if(Ext.grid.PropertyColumnModel){
  Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
	nameText   : "Nombre",
	valueText  : "Valor",
	dateFormat : "j/m/Y"
  });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
  Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
	splitTip            : "Arrastre para redimensionar.",
	collapsibleSplitTip : "Arrastre para redimensionar. Doble clic para ocultar."
  });
}
