var conexion;

function inicializar(){
    conexion = openDatabase(
        'restaurante','1.0','ChefMaster',2*1024*1024
    );
    crearTablas();
    consultar();
    consultar2();
    genera();
    consultarRes();
}

/*Eliminar tabla reservacion
function eliReser(){
  conexion.transaction(
function(bd){
  bd.executeSql(
    "drop table reservacion"
  )
}

  )
}*/


//metodo para insertar datos estaticos en la tabla mesa
/*function insertarDatos(){
  conexion.transaction(
      function(bd){
          bd.executeSql(
          "insert into reservacion values (120771,'Primera clase','1992-12-20','12:13 p.m.',5,'Dubai',2)"

);
})}*/


/*
function genera(){
  var a=0;
  var b=0;
  var c=0;
  var z= document.getElementById("ncliente");
  var y = Math.round(Math.random()*100);
  alert("El folio es:"+a+b+c+y);
  z.innerHTML=x+y;
}*/



function eliprueba(){

  conexion.transaction(
      function(bd){
          bd.executeSql(
          "drop table reservacion"

);
})}



/*function pedirReservacion(){
document.getElementById("disponible1").innerHTML = "<a href=\"regReservacion.html\"></a>";
}*/


function crearTablas(){
    conexion.transaction(
        function(bd){
            bd.executeSql(
            "create table if not exists cliente("+
                "ncliente number primary key,"+
                "nombre text,"+
                "email text,"+
                "sexo text,"+
            "telefono telephone)"
            );

          bd.executeSql(
            "create table if not exists reservacion("+
                "folio number primary key,"+
                "tipo text,"+
                "fecha date,"+
                "hora time,"+
                "integrantes number,"+
                "sucursal text,"+
                "ncliente number,"+
                "foreign key (ncliente) references cliente(ncliente))"
           );

        }
    );
}


function inserCliente(){
    conexion.transaction(
        function(bd){
            var caja1 = document.getElementById("ncliente");
            var caja2 = document.getElementById("nombre");
            var caja3 = document.getElementById("email");
              var caja4 = document.getElementById("sexo");
                var caja5 = document.getElementById("telefono");
            bd.executeSql("insert into cliente values(?,?,?,?,?)",[caja1.value,caja2.value,caja3.value,caja4.value,caja5.value],ok,error);
            nombre.value="";
            email.value="";
            sexo.value="";
            telefono.value="";
            caja1.focus();

        }
    );
}


function genera(){
    conexion.transaction(
      function(bd) {
        var i=0;
        var r=1;

        bd.executeSql("select * from cliente order by  ncliente desc limit 1",[],function(bd,res){
            var tam = res.rows.length;
                if(tam>0){
                  //alert("progreso");
                    var row = res.rows.item(i);
                    var fer = row.ncliente+r;
                  var rola= document.getElementById("ncliente").value= fer;

                     /*var cajaNom = document.getElementById("nombre");
                         var cajaEmail = document.getElementById("email");
                            cajaNom.value = res.rows.item(0).nombre;
                                cajaEmail.value = res.rows.item(0).email;*/
                 }else
                   var rola= document.getElementById("ncliente").value= r;

            }
          )
      }
    );
}


function inserReservacion(){
    conexion.transaction(
        function(bd){

            bd.executeSql("select ncliente from cliente",[],function(bd,res){
                var tam = res.rows.length;
                if(tam>0){
                  var caja1 = document.getElementById("folio");
                  var caja2 = document.getElementById("tipo");
                  var caja3 = document.getElementById("fecha");
                    var caja4 = document.getElementById("hora");
                      var caja5 = document.getElementById("integrantes");
                      var caja6 = document.getElementById("sucursal");
                      var caja7 = document.getElementById("ncliente");
                  bd.executeSql("insert into reservacion values(?,?,?,?,?,?,?)",[caja1.value,caja2.value,caja3.value,caja4.value,caja5.value,caja6.value,caja7.value],ok,error);
                  caja1.focus();
                  folio.value="";
                  tipo.value="";
                  fecha.value="";
                    hora.value="";
                    integrantes.value="";
                    sucursal.value="";
                }else{
                  alert("Porfavor registrate como cliente, para hacer una reservación")

                }


        }
);
}
  );
}


function ok(){
    alert("La operacion se ha realizado correctamente");
}

function error(){
    alert("Ha ocurrido un error en la operacion");
}

function consultar(){
    conexion.transaction(
        function(bd){
            bd.executeSql(
                "Select * from cliente",[],function(bd,res){
                    var tam = res.rows.length;
                    var html="";

                    for(var i=0; i<tam;i++){
                        html+="<tr><td>"+res.rows.item(i).ncliente+
                            "</td><td>"+res.rows.item(i).nombre+
                            "</td><td>"+res.rows.item(i).email+
                            "</td><td>"+res.rows.item(i).sexo+
                            "</td><td>"+res.rows.item(i).telefono+
                            "</td><td>"+"<a class='btn widget uib_w_9 d-margins btn-info' type='button'  href='Consultar.html' >Actualizar</a>"+"<button class='btn btn-danger'onclick='elim("+res.rows.item(i).ncliente+")'>Eliminar</button>"+"<button class='btn btn-primary'onclick='mod("+res.rows.item(i).ncliente+")'>Modificar</button></td>"+
                            "</tr>";

                    }
                    var con = document.getElementById("tcontenido");
                    if(con!=null)
                    con.innerHTML=html;
                }
            );
        }
    );
}

function consultar2(){
    conexion.transaction(
        function(bd){
            bd.executeSql(
                "Select * from reservacion",[],function(bd,res){
                    var tam = res.rows.length;
                    var html="";

                    for(var i=0; i<tam;i++){
                        html+="<tr><td>"+res.rows.item(i).folio+
                            "</td><td>"+res.rows.item(i).tipo+
                            "</td><td>"+res.rows.item(i).fecha+
                            "</td><td>"+res.rows.item(i).hora+
                            "</td><td>"+res.rows.item(i).integrantes+
                            "</td><td>"+res.rows.item(i).sucursal+
                            "</td><td>"+res.rows.item(i).ncliente+
                            "</td>"+"</tr>";

                    }
                    var con = document.getElementById("tcontenido2");
                    if(con!=null)
                    con.innerHTML=html;
                }
            );
        }
    );
}

function consultarRes(){
    conexion.transaction(
      function(bd) {
        var i=0;
        var r=1;

        bd.executeSql("select ncliente from cliente",[],function(bd,res){
            var tam = res.rows.length;
            var selector = document.getElementById('ncliente');


                if(tam>0){
                for(var i =0;i<tam; i++){
                  var row = res.rows.item(i)
                  var fer = row.ncliente;
                  selector.options[i] = new Option(fer);
                }

}
            }
          )
      }
    );
}

function limpiar(){
//  ncliente.value="";
//limpia el registro de cliente si se cancela
  nombre.value="";
  email.value="";
  sexo.value="";
  telefono.value="";
}
function limpiar2(){
//  ncliente.value="";
//limpia el registro de reservacion si se cancela
folio.value="";
tipo.value="";
fecha.value="";
  hora.value="";
  integrantes.value="";
  sucursal.value="";
}

var idGlobal="";

function buscar(){
 conexion.transaction(
     function(bd){
        var valorID = document.getElementById("id").value;
            bd.executeSql("select * from cliente where ncliente = ?",[valorID],function(bd,res){
                var tam = res.rows.length;
                    if(tam>0){
                         var cajaNom = document.getElementById("mnombre");
                             var cajaEmail = document.getElementById("memail");
                             var cajaSexo = document.getElementById("msexo");
                                 var cajaTelefono = document.getElementById("mtelefono");
                                cajaNom.value = res.rows.item(0).nombre;
                                    cajaEmail.value = res.rows.item(0).email;
                                    cajaSexo.value = res.rows.item(0).sexo;
                                        cajaTelefono.value = res.rows.item(0).telefono;
                        idGlobal=valorID;
                     }else
                         alert("Contacto no encontrado");
                }

                );
        }

    );
}


/*
function eliminar(){
    conexion.transaction(
    function(bd){
        if(confirm("¿Esta seguro de eliminar el cliente?"))
        bd.executeSql("delete from cliente where ncliente = ?",[idGlobal],ok,error);

        var cajaNom = document.getElementById("nombre");
        var cajaEmail = document.getElementById("email");
        var cajaSexo = document.getElementById("sexo");
        var cajaTelefono = document.getElementById("telefono");
        cajaNom.value="";
        cajaEmail.value="";
        cajaSexo.value="";
        cajaTelefono.value="";
        var cajaID = document.getElementById("ncliente");
        cajaID.value="";
        cajaID.focus();
    }
    );
}*/

function modificar(){
    conexion.transaction(
    function(bd){
        var cajaNom = document.getElementById("mnombre");
        var cajaEmail = document.getElementById("memail");
        var cajaSexo = document.getElementById("msexo");
        var cajaTelefono = document.getElementById("mtelefono");
        if(confirm('¿esta seguro de guardar los cambios?'))
        bd.executeSql(
        "update cliente set nombre = ?, email = ?, sexo = ?, telefono = ? where ncliente = ?",
            [cajaNom.value,cajaEmail.value,cajaSexo.value, cajaTelefono.value, idGlobal],ok,error
        );
        cajaNom.value="";
        cajaEmail.value="";
        cajaSexo.value="";
        cajaTelefono.value="";
        var cajaID = document.getElementById("id");
        cajaID.value="";
        cajaID.focus();
    }
    );
}


function elim(ncliente){
    conexion.transaction(
    function(bd){
                var cadena = new String(ncliente);
        if(confirm("¿Esta seguro de eliminar el cliente "+ncliente+"?"))
        bd.executeSql("delete from cliente where ncliente = ?",[cadena],ok,error);
       // window.location="Consultar.html";
        bd.executeSql("delete from reservacion where ncliente = ?",[cadena]);


    }
    );
}

function mod(ncliente){
    window.location = "Modificar.html?";
}
