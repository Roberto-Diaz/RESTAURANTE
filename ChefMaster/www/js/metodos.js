function iniciar(){
	var LatLong = new google.maps.LatLng(18.360278,-100.668056);

	var opciones = {
		center: LatLong,
		zoom:18,
		mapTypeId: google.maps.MapTypeId.SATELLITE


	};
	var map = new google.maps.Map(document.getElementById("mapa1"),opciones);

	var marco = new google.maps.Marker({
		map:map,
		position:LatLong,
		draggable:true
	});

}



function Mexico(){
	var LatLong = new google.maps.LatLng(19.4284700,-99.1276600);

	var opciones = {
		center: LatLong,
		zoom:18,
		mapTypeId: google.maps.MapTypeId.SATELLITE


	};
	var map = new google.maps.Map(document.getElementById("mapa1"),opciones);

	var marco = new google.maps.Marker({
		map:map,
		position:LatLong,
		draggable:true
	});
}

function SAntionio(){
	var LatLong = new google.maps.LatLng(29.4238889,-98.4933333);

	var opciones = {
		center: LatLong,
		zoom:18,
		mapTypeId: google.maps.MapTypeId.SATELLITE


	};
	var map = new google.maps.Map(document.getElementById("mapa1"),opciones);

	var marco = new google.maps.Marker({
		map:map,
		position:LatLong,
		draggable:true
	});
}



function AngelesCA(){
	var LatLong = new google.maps.LatLng(34.0522300,-118.2436800);

	var opciones = {
		center: LatLong,
		zoom:18,
		mapTypeId: google.maps.MapTypeId.SATELLITE


	};
	var map = new google.maps.Map(document.getElementById("mapa1"),opciones);

	var marco = new google.maps.Marker({
		map:map,
		position:LatLong,
		draggable:true
	});
}


function Paris(){
	var LatLong = new google.maps.LatLng(48.8534100,2.3488000);

	var opciones = {
		center: LatLong,
		zoom:18,
		mapTypeId: google.maps.MapTypeId.SATELLITE


	};
	var map = new google.maps.Map(document.getElementById("mapa1"),opciones);

	var marco = new google.maps.Marker({
		map:map,
		position:LatLong,
		draggable:true
	});
}

function Dubai(){
	var LatLong = new google.maps.LatLng(25.2581700	,55.3047200);

	var opciones = {
		center: LatLong,
		zoom:18,
		mapTypeId: google.maps.MapTypeId.SATELLITE


	};
	var map = new google.maps.Map(document.getElementById("mapa1"),opciones);

	var marco = new google.maps.Marker({
		map:map,
		position:LatLong,
		draggable:true
	});
}







function seleccionar(){
	var z= document.getElementById("seleccion").value;

	if (z =="A") {
		Mexico();
	}
     if(z == "B"){
      SAntionio();
     }
      if(z == "C"){
       AngelesCA();
      }
       if(z == "D"){
        Paris();
       }
        if(z == "E"){
         Dubai();
        }

}
