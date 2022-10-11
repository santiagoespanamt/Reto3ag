

$(document).ready(function(){
    bringPartyroom();
    });


function saveCategory(){

    $("#resultado").empty();

    let myData ={name:$("#categoryName").val(),description:$("#categoryDescription").val()}
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {

            url          : 'http://129.80.206.229/api/Category/save',
            type         : 'POST',
            data         :  dataToSend,
            datatype     :  "JSON",
            contentType  : 'application/json',
            success      :  function(respuesta){
                            $("#categoryName").val("");
                            $("#categoryDescription").val("");
                            alert("Inserción exitosa");
                            },
            error       :   function(xhr,status){
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            },
            complete    :   function(){
                                readClient();
                            }

        }
    );
}


function bringCategory(){
    $.ajax(
              {
                url:"http://129.80.206.229/api/Category/all",
                type:"GET",
                datatype:"JSON",
                success:function(respuesta){                
                    paintCategoryCards(respuesta);
                    
                },
                error       :   function(xhr,status){
                    alert('Operacion no satisfactoria,'+ xhr.status );
                }
            
                    
              }
               
          );
}


function paintCategoryCards(items){

    let myTable="";
    for (i=0; i<items.length; i++){
        myTable=`
        <div class= "card" style="width: 18rem;">
            <div class= "card body">
                <h5 class= "card-title">${items[i].id}</h5>
                <h6 class= "card-subtitle mb-2 text-muted">${items[i].name}</h6>
                <p class= "card-text">${items[i].description}</p>
                <a href="#" class= "card-link>Card Link</a>
                </div>
            </div> 
        `
    }
    myTable+= "</div></div>";
    $("#result").append(myTable);
}

function pintarRespuestaCategoria(items){

     $("#result").empty();

    //declarar variables js
    let myTable="<table>";
    myTable += "<tr><th>Id</th><th>Name</th></tr>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+ items[i].id+ "</td>";
        myTable+="<td>"+ items[i].name+"</td>";
        myTable+="<td>"+ items[i].description+"</td>";
        // myTable+="<td><button onclick='borrarCategoria("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable +="</table>";
    $("#result").append(myTable);
}




function bringPartyroom(){
    $.ajax(
              {
                url:"http://129.80.206.229/api/Partyroom/all",
                type:"GET",
                datatype:"JSON",
                success:function(respuesta){
                    pintarRespuestaPartyroom(respuesta);                    
                },
                error       :   function(xhr,status){
                    alert('Operacion no satisfactoria,'+ xhr.status );
                }
            
                    
              }
               
          );
}


function pintarRespuestaPartyroom(items){

     $("#result").empty();

    //declarar variables js
    let myTable="<table>";
    myTable += "<tr><th>Id</th><th>name</th> <th> Owner</th><th>Capacity</th><th>description</th><th>Category Id</th><th>Category Name</th><th>Category Description</th> <th>Messages</th><th>Reservation</th></tr>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].owner+"</td>";
        myTable+="<td>"+items[i].capacity+"</td>";
        myTable+="<td>"+items[i].description+"</td>";                
        myTable+="<td>"+items[i].category.id +"</td>";                
        myTable+="<td>"+items[i].category.name +"</td>";                
        myTable+="<td>"+items[i].category.description +"</td>";                
        myTable+="<td>"+items[i].messages +"</td>";                        
        myTable+="<td>"+items[i].reservations+"</td>";                
        // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable +="</table>";
    $("#result").append(myTable);
}


function savePartyroom(){

    $("#result").empty();

    let myData ={owner:$("#partyroomOwner").val(),capacity:$("#partyroomCapacity").val(),category:{id:$("#idCategory").val()},name:$("#partyroomName").val(),description:$("#partyroomDesc").val(),}
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {

            url          : 'http://129.80.206.229/api/Partyroom/save',
            type         : 'POST',
            data         :  dataToSend,
            datatype     :  "JSON",
            contentType  : 'application/json',
            success      :  function(respuesta){
                            $("#partyroomOwner").val("");
                            $("#partyroomCapacity").val("");
                            $("#idCategory").val("");
                            $("#partyroomName").val("");
                            $("#partyroomDesc").val("");
                            alert("Inserción exitosa");
                            },
            error       :   function(xhr,status){
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }

        }
    );
}



function saveClient(){

    $("#result").empty();

    let myData ={name:$("#clientName").val(),email:$("#clientEmail").val(),password:$("#clientPassword").val(),age:$("#clientAge").val()}
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {

            url          : 'http://129.80.206.229/api/Client/save',
            type         : 'POST',
            data         :  dataToSend,
            datatype     :  "JSON",
            contentType  : 'application/json',
            success      :  function(respuesta){
                            $("#clientName").val("");
                            $("#clientEmail").val("");
                            $("#clientPassword").val("");
                            $("#clientAge").val("");
                            alert("Inserción exitosa");
                            },
            error       :   function(xhr,status){
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }

        }
    );
}

function bringClient(){
    $.ajax(
              {
                url:"http://129.80.206.229/api/Client/all",
                type:"GET",
                datatype:"JSON",
                success:function(respuesta){
                    pintarRespuestaClient(respuesta);                    
                },
                error       :   function(xhr,status){
                    alert('Operacion no satisfactoria,'+ xhr.status );
                }
            
                    
              }
               
          );
}


function pintarRespuestaClient(items){

    $("#result").empty();

   //declarar variables js
   let myTable="<table>";
   myTable += "<tr><th>Id</th><th> Email</th><th>Password</th><th>Name</th><th>Age</th><th>Messages</th><th>Reservations</th></tr>";
   for(i=0;i<items.length;i++){
       myTable+="<tr>";
       myTable+="<td>"+items[i].idClient+"</td>";
       myTable+="<td>"+items[i].email+"</td>";
       myTable+="<td>"+items[i].password+"</td>";
       myTable+="<td>"+items[i].name+"</td>";
       myTable+="<td>"+items[i].age+"</td>";                
       myTable+="<td>"+items[i].messages +"</td>";                        
       myTable+="<td>"+items[i].reservations+"</td>";                
       // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
       myTable+="</tr>";
   }
   myTable +="</table>";
   $("#result").append(myTable);
}


function saveMessage(){

    $("#result").empty();

    let myData ={messageText:$("#messageText").val(),client:{idClient:$("#idClientM").val()},partyroom:{id:$("#idPartyroomM").val()}}
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {

            url          : 'http://129.80.206.229/api/Message/save',
            type         : 'POST',
            data         :  dataToSend,
            datatype     :  "JSON",
            contentType  : 'application/json',
            success      :  function(respuesta){
                            $("#messageText").val("");
                            $("#idClient").val("");
                            $("#idPartyroom").val("");
                            alert("Inserción exitosa");
                            },
            error       :   function(xhr,status){
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }

        }
    );
}

function bringMessage(){
    $.ajax(
              {
                url:"http://129.80.206.229/api/Message/all",
                type:"GET",
                datatype:"JSON",
                success:function(respuesta){
                    pintarRespuestaMessage(respuesta);                    
                },
                error       :   function(xhr,status){
                    alert('Operacion no satisfactoria,'+ xhr.status );
                }
            
                    
              }
               
          );
}


function pintarRespuestaMessage(items){

    $("#result").empty();

   //declarar variables js
   let myTable="<table>";
   myTable += "<tr><th>Codigo</th><th> Mensaje</th><th>codigo Bicicleta</th><th>Nombre Bicicleta</th><th>Codigo Cliente</th><th>Nombre Cliente</th></tr>";
   for(i=0;i<items.length;i++){
       myTable+="<tr>";
       myTable+="<td>"+items[i].idMessage+"</td>";
       myTable+="<td>"+items[i].messageText+"</td>";
       myTable+="<td>"+items[i].partyroom.id+"</td>";       
       myTable+="<td>"+items[i].partyroom.name+"</td>";
       myTable+="<td>"+items[i].partyroom.owner+"</td>";
       myTable+="<td>"+items[i].partyroom.capacity+"</td>";
       myTable+="<td>"+items[i].partyroom.description+"</td>";
       myTable+="<td>"+items[i].partyroom.category.id+"</td>";
       myTable+="<td>"+items[i].partyroom.category.name+"</td>";
       myTable+="<td>"+items[i].partyroom.category.description+"</td>";
       myTable+="<td>"+items[i].client.idClient+"</td>";
       myTable+="<td>"+items[i].client.email+"</td>";
       myTable+="<td>"+items[i].client.password+"</td>";
       myTable+="<td>"+items[i].client.name+"</td>";
       myTable+="<td>"+items[i].client.age+"</td>";
       
       // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
       myTable+="</tr>";
   }
   myTable +="</table>";
   $("#result").append(myTable);
}

// {"startDate":"2020-12-20","devolutionDate":"2020-12-20",
// "client":{"idClient":1},"bike":{"id":1}}
function saveReserv(){

    $("#result").empty();

    let myData ={startDate:$("#startDate").val(),devolutionDate:$("#devolutionDate").val(),client:{idClient:$("#idClientR").val()},partyroom:{id:$("#idPartyroomR").val()}}
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {

            url          : 'http://129.80.206.229/api/Reservation/save',
            type         : 'POST',
            data         :  dataToSend,
            datatype     :  "JSON",
            contentType  : 'application/json',
            success      :  function(respuesta){
                            $("#startDate").val("");
                            $("#devolutionDate").val("");
                            $("#idClientR").val("");
                            $("#idPartyroomR").val("");
                            alert("Inserción exitosa");
                            },
            error       :   function(xhr,status){
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }

        }
    );
}

function bringReserv(){
    $.ajax(
              {
                url:"http://129.80.206.229/api/Reservation/all",
                type:"GET",
                datatype:"JSON",
                success:function(respuesta){
                    pintarRespuestaReservation(respuesta);                    
                },
                error       :   function(xhr,status){
                    alert('Operacion no satisfactoria,'+ xhr.status );
                }
            
                    
              }
               
          );
}


function pintarRespuestaReservation(items){

    $("#result").empty();

   //declarar variables js
   let myTable="<table>";
   myTable += "<tr><th>Codigo Res</th><th> Fecha Inicio</th><th>Fecha fin</th><th>Status</th><th>Codigo bicicleta</th><th>Nombre bicicleta</th><th>Codigo Cliente</th><th>Nombre Cliente</th></tr>";
   for(i=0;i<items.length;i++){
       myTable+="<tr>";
       myTable+="<td>"+items[i].idReservation+"</td>";
       myTable+="<td>"+items[i].startDate+"</td>";
       myTable+="<td>"+items[i].devolutionDate+"</td>";
       myTable+="<td>"+items[i].status+"</td>";       
       myTable+="<td>"+items[i].partyroom.id+"</td>";
       myTable+="<td>"+items[i].partyroom.name+"</td>";
       myTable+="<td>"+items[i].partyroom.owner+"</td>";
       myTable+="<td>"+items[i].partyroom.capacity+"</td>";
       myTable+="<td>"+items[i].partyroom.description+"</td>";
       myTable+="<td>"+items[i].partyroom.category.id+"</td>";
       myTable+="<td>"+items[i].partyroom.category.name+"</td>";
       myTable+="<td>"+items[i].partyroom.category.description+"</td>";
       myTable+="<td>"+items[i].partyroom.messages.idMessage+"</td>";
       myTable+="<td>"+items[i].partyroom.messages.messageText+"</td>";
       myTable+="<td>"+items[i].client.idClient+"</td>";
       myTable+="<td>"+items[i].client.email+"</td>";
       myTable+="<td>"+items[i].client.password+"</td>";
       myTable+="<td>"+items[i].client.name+"</td>";
       myTable+="<td>"+items[i].client.age+"</td>";
       myTable+="<td>"+items[i].score+"</td>";
       
       // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
       myTable+="</tr>";
   }
   myTable +="</table>";
   $("#result").append(myTable);
}