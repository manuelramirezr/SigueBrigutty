/**
 * @author ASINGTEC, C.A
 * Archivo de Configuracion
 */
//var dir = 'http://192.168.1.10:8585/listaesperagm/legm/';
var dir = 'http://localhost:8080/listaesperagm/legm/';
var aDuracion= new Array();
var cantVideo;
var tiempo;
//var noticia = '' ;
var ultimoLlamado = 0;
var wnd =false;
var nc = null;
var ns = null;
var vid = null; 
var videoTotalT = 0;
var audio ;
/*var dtsNoticias = new Ext.data.JsonStore({
		url: dir+"programas/noticias.php",
		autoLoad: false,	   
		baseParams: {
			metodo: 'consultarCintillo'
		},
		method: 'POST',
		id: 'dtsNoticias',
		root: 'data',
		fields: ['id_noticia', 'descripcion', 'estado_registro','fecha', 'codigo'],
		load: function(a){
			console.log(a);
		}
	});*/

var dtsAtendiendo = new Ext.data.JsonStore({
		url: dir+"programas/listaEspera.php",
		autoLoad: false,	   
		baseParams: {
			metodo: 'consultaListaMostrar'
		},
		method: 'POST',
		id: 'dtsAtendiendo',
		root: 'data',
		fields: ['id', 'id_cliente', 'id_usuario','id_requerimiento', 'nombre_apellido', 'requerimiento', 'cargo', 'hora_salida', 'retraso']
	});
var dtsLlamando = new Ext.data.JsonStore({
		url: dir+"programas/listaEspera.php",
		autoLoad: false,	   
		method: 'POST',
		id: 'dtsLlamando',
		root: 'data',
		fields: ['id', 'id_cliente', 'id_usuario','id_requerimiento', 'nombre_apellido', 'requerimiento', 'cargo', 'tiempo_atencion']
	});
function retraso(retraso, horaSalida){
	var retrasoMenos = retraso.toString().split('-');
	if(retrasoMenos.length>1){
		var menos = retraso.toString().split('-');
		var ret = '';
		for (var i = 0 ; i<menos.length;i++){
			ret = ret.toString() + menos[i].toString()  ;
		}
		return '<p style=\" \"><div style=\"font-size:18px;width:100px; height:50px; float:left; margin-left:-70px; padding-top:15px; padding-left:5px; margin-top:-60px; background-image: url(recursos/img/retrasado.png) !important; background-repeat: no-repeat; color:#FFFFFF; font-weight:bold;\">'+ret.substr(0,5)+'</div></p>'
		//return '<img style=\"margin-top:-40px; margin-left:-450px;\" src=\"recursos/img/retrasado.png\">'
		//return '<p style=\"text-align: left; width:100px; height:50px; margin-left:-450px; margin-top:-60px; background-image: url(recursos/img/retrasado.png)!important; background-repeat: no-repeat;\" >'+retraso+'</p>';
		
	}else {
		//return '<img style=\"margin-top:-40px; margin-left:-450px;\" src=\"recursos/img/atiempo.png\">'
		return '<p style=\" \"><div style=\"font-size:16px;width:100px; height:50px; float:left; margin-left:-70px; padding-top:15px; padding-left:5px; margin-top:-60px; background-image: url(recursos/img/atiempo.png) !important; background-repeat: no-repeat; color:#FFFFFF; font-weight:bold;\">'+retraso.substr(0,5)+'</div></p>'
	}	
}
var ct;
	ct = 0;
function listaEsperaAtendiendo(){
	dtsAtendiendo.load();
	if(dtsAtendiendo.getCount()>0){
		ct = 1;
		for(var i=0;i<dtsAtendiendo.getCount();i++){
			document.getElementById('llamado'+i+'').innerHTML = '<b>'+ dtsAtendiendo.getAt(i).get('nombre_apellido')+ '</b> <p>' + dtsAtendiendo.getAt(i).get('cargo') +'</p>' + retraso(dtsAtendiendo.getAt(i).get('retraso'),dtsAtendiendo.getAt(i).get('hora_salida'));
		}
		
	}else {
		if(ct>1)
		{
			for(var i=0;i<4;i++){
				document.getElementById('llamado'+i+'').innerHTML = '';
			}
		}else {
			ct = 2;
		}
	}
	llamar();
}
function cargar(){
  // alert("Tiempo "  + tiempo + " -> " + aDuracion[tiempo] )
   //ramdomVideoCarga();	
}	
function videoCarga(video){
	air.System.gc();
	if(nc!=null)
		nc.close();
	if(ns!=null)
		ns.close();
	try {
		if(vid!=null){
			air.System.gc();
			vid.clear();
			window.htmlLoader.stage.removeChild(vid);
			delete(vid);
		}
		if (video==0 || video==1){
			//window.htmlLoader.stage.removeChild(vid);
			air.System.gc();
			//System.gc();
			if(vid != null){
				//ns.stop();
				vid.clear();
				delete(vid);
				ns.close();
				nc.close();
				ns = null;
				nc =null;
				vid = null;
				
				//window.htmlLoader.stage.createChild(vid);
			}
			cantVideo=aDuracion.length;
			video = cantVideo;
		}else {
			air.System.gc();
			if(vid != null){
				//ns.stop();
				vid.clear();
				delete(vid);
				ns.close();
				nc.close();
				ns = null;
				nc =null;
				vid = null;
				
				//window.htmlLoader.stage.createChild(vid);
			}
			cantVideo--;	
			video = cantVideo;
		}
		tiempo = video - 1;
		task(tiempo);
		nc = new air.NetConnection()
		nc.connect(null);
		ns = new air.NetStream(nc);
		ns.addEventListener(air.AsyncErrorEvent.ASYNC_ERROR, asyncError);
		function asyncError()
		{
		//handle error here
		}
		ns.play("recursos/videos/video"+video.toString()+".flv");
		vid = new air.Video('videoGM');
		vid.attachNetStream(ns);
		vid.height = 382;
		vid.width = 703;
		vid.x = 70;
		vid.y = 155;
		//window.htmlLoader.stage.removeChild(vid);
		window.htmlLoader.stage.addChild(vid);
		//ns.close();
		//nc.close();
		//delete(vid);
	}catch(e){
						
	}
	

}	
function ramdomVideoCarga(){
		//videoCarga(cantVideo);
}	
/*function noticias(){
	var noticiaNueva='';
	dtsNoticias.load();
	/*console.log(dtsNoticias.data);
	for (var i = 0; i < dtsNoticias.getCount(); i++) {
		console.log(dtsNoticias.getAt(i).get('descripcion'));
		noticiaNueva = '<b>' + dtsNoticias.getAt(i).get('codigo') + ':</b> ' +  dtsNoticias.getAt(i).get('descripcion') + ' - ' +noticiaNueva;
	}
	if (noticia.toString().length!=noticiaNueva.toString().length){
   		noticia = noticiaNueva;
   		document.getElementById('noticia').innerHTML = noticia;
	}*/
//}
Ext.onReady(function(){
	/*Ext.Ajax.request({
		url : dir + 'programas/videos.php' , 
		success: function ( result, request ) { 
			var resultado = result.responseText.replace(/\"/g, '').split(',');
			for(var i=0; i<resultado.length; i++){
				aDuracion[i]=parseInt(resultado[i]);
				videoTotalT = videoTotalT + aDuracion[i]; 
				//alert(videoTotalT);
			}
			cantVideo = aDuracion.length
			tiempo = 1;
		   	videoCarga(cantVideo);
		   	air.System.gc();
		   	
		}
	 
		
	});*/
	//alert(videoTotalT);
	//alert(videoTotalT);
	
})
function llamar(){
	dtsLlamando.load({
		params : {
			metodo: 'consultaLlamando',
			ultimo_llamado : ultimoLlamado
		}
	});
	if(dtsLlamando.getCount()>0){
		if(!wnd){
			wnd =true;
			var w = new Ext.Window({
					frame : true,
					width : 400,
					height : 470,
					x : 615,
					y:105,
					id: 'w',
					progressText: 'Llamando...',					
					closable : false,
					closeAction : 'close',
					html : '<center><p style=\"font-size:45px; font-weight:none; background-color:#0e3ebc; color:#FFFFFF; \ "><img src=\"recursos/img/usuarioLlamando.png\">&nbsp;&nbsp;Llamando....</p></center><br>' +
					'<center><p style=\"font-size:33px; font-weight:none;\ ">Sr(a). <b><br>' +  dtsLlamando.getAt(0).get('nombre_apellido') + '</b><br>' + 'Por Favor con: <br><b>' + dtsLlamando.getAt(0).get('cargo') + '</b><br>Tiempo Estimado en Atenci&oacute;n: <br><b>'  + dtsLlamando.getAt(0).get('tiempo_atencion') + '</b></p></center>'        
				})
				w.show();
				audio.play();
				/*var s = new air.Sound(); 
				s.addEventListener(air.ProgressEvent.PROGRESS, 
				    onLoadProgress); 
				s.addEventListener(air.Event.COMPLETE,  
				    onLoadComplete); 
				s.addEventListener(air.IOErrorEvent.IO_ERROR,  
				    onIOError); 
				 
				var req = new air.URLRequest("recursos/sonido/tono2.mp3"); 
				
				s.load(req); */
				 
				/*function onLoadProgress(event) 
				{ 
				    var loadedPct = Math.round(100 * (event.bytesLoaded / event.bytesTotal)); 
				    air.trace("Completado " + loadedPct + "% loaded."); 
				} 
				 
				function onLoadComplete(event) 
				{ 
				    var localSound = event.target; 
				    localSound.play(); 
				} 
				function onIOError(event) 
				{ 
				    air.trace("El sonido no Pudo ser cargado: " + event.text);
				    msgGenerico("El sonido no Pudo ser cargado: ","error");
				    
				}*/
//				var req = new air.URLRequest(""); 
//				var s = new air.Sound(s);
				ultimoLlamado = dtsLlamando.getAt(0).get('id');
			       // this hideous block creates the bogus progress
			       var f = function(v){
			            return function(){
			                if(v == 12){
			                    w.close();
			                    wnd=false;
			                    delete(wnd);
			                    delete(w);
			                }			           
			              };
			       };
			       for(var i = 1; i < 13; i++){
			           setTimeout(f(i), i*500);
			       }

				
				
		}
		/*else {
			wnd=false;
			w.close();			
		}*/
	}
	
}
function llamados(){
    /*dtsNoticias.load();
	for (var i = 0; i < dtsNoticias.getCount(); i++) {
		noticiaNueva = '<b>' + dtsNoticias.getAt(i).get('codigo') + ':</b> ' +  dtsNoticias.getAt(i).get('descripcion') + ' - ' +noticiaNueva;
	}
	noticia = noticiaNueva;
	document.getElementById('noticia').innerHTML = noticia;*/
} 
 /*Ext.TaskMgr.start({
	     run: noticias,
	     interval: 30000,
	     scope: this
 	});*/
 Ext.TaskMgr.start({
	     run: listaEsperaAtendiendo,
	     interval: 5000,
	     scope: this
 	});
//setTimeout(noticias,1000);
setTimeout(listaEsperaAtendiendo,1000);
/*function task(tiempo){
	if(nc!=null)
		nc.close();
	if(ns!=null)
		ns.close();
	air.System.gc();
	if(vid!=null){
		vid.clear();
		window.htmlLoader.stage.removeChild(vid);
	}
	setTimeout(ramdomVideoCarga,parseInt(aDuracion[tiempo]));
//	if(air.System.privateMemory>=45000000){
//		NativeApplication.nativeApplication.restart();
//	}
		
	//alert(air.System.freeMemory + " " + air.System.privateMemory);
}*/
//var tiempo = aDuracion.length;

