

$(document).ready(function(){
    bringPartyroom();
    setCategoryShowCard();
    setPartyroomShowCard();
    setClientShowCard();
    setMessageShowCard();
    setReservShowCard()
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
                                bringCategory();
                                setCategoryShowCard()
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

    $("#result").empty();
    
    let myTable='<div class="container"><div class="row">';
    for (i=0; i<items.length; i++){
        myTable+=`
        
        <div class= "card cardResultGen">
            <div class= "card body" style= "border-width:0px">
                <h4 class= "card-title"><strong>Category ${items[i].id}</strong></h4>
                <h6 class= "card-subtitle mb-2 text-muted">${items[i].name}</h6>
                <p class= "card-text">${items[i].description}</p>
                <button class="btn button3" onclick= "deletePartyroom(${items[i].id})">Delete Category</button>
                </div>
        </div> 
        `
    }
    myTable+= "</div></div>";
    $("#result").append(myTable);
}
function setCategoryShowCard(){
    $("#cardCategory").empty();
    let f1 = `<div class="container">
                <div class="card border-0" style="width: 14rem;">
                <h1 class="mainCardTitle">Categories</h1>
                <button class="btn buttonGenShow" onclick ="bringCategory()">Show Categories</button>
                <button class="btn buttonGenSetSave" onclick="setCategorySaveCard()">New Category</button>
            </div>`;

    $("#cardCategory").append(f1);

}

function setCategorySaveCard(){

    $("#cardCategory").empty();

    let formulario = `<div class="container">
                        <div class="card border-0" style="width: 14rem;">
                            <input type="text" id="categoryName" placeholder="category name" style="margin-bottom: 2px;">
                            <input type="text" id="categoryDescription" placeholder="category description" style="margin-top: 6px; margin-bottom: 20px;">
                            <button class ="btn btn-success" onclick="saveCategory()"> Save</button>
                            <button class ="btn btn-danger" onclick="cancelSaveCategory()"> Cancel</button>
                        </div>
                    </div>`;

    $("#cardCategory").append(formulario);
}

function cancelSaveCategory(){
    $("#cardCategory").empty();
    setCategoryShowCard();
}

function bringPartyroom(){
    $.ajax(
              {
                url:"http://129.80.206.229/api/Partyroom/all",
                type:"GET",
                datatype:"JSON",
                success:function(respuesta){
                    paintPartyroomCard(respuesta);                    
                },
                error       :   function(xhr,status){
                    alert('Operacion no satisfactoria,'+ xhr.status );
                }
            
                    
              }
               
          );
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
                            },
            complete    :   function(){
                                bringPartyroom();
                                setPartyroomShowCard();
                            }    

        }
    );
}

function paintPartyroomCard(items){

    $("#result").empty();
    let myTable= '<div class="container"><div class="row">';
    for (i=0; i<items.length; i++){
        myTable+=`
        <style>
        
        </style>
        <div class= "card cardResultGen">
            <div class= "card body border-0">
                <h4 class= "card-title">Partyroom ${items[i].id}</h4>
                <h5 class= "card-subtitle mb-2 text">${items[i].name}</h5>
                <h5 class= "card-subtitle mb-2 text-muted">Owned by: ${items[i].owner}</h5>
                <h6 class= "card-subtitle mb-2 text-muted">Capacity: ${items[i].capacity}</h6>
                <p class= "card-text">${items[i].description}</p>
                <h6 class= "card-subtitle mb-2 text">Category ID: ${items[i].category.id}</h6>
                <h5 class= "card-subtitle mb-2 text-muted">${items[i].category.name}</h5>
                <h5 class= "card-subtitle mb-2 text-muted">${items[i].category.description}</h5>
                <h5 class= "card-subtitle mb-2 text">${items[i].messages}</h5>
                <h5 class= "card-subtitle mb-2 text">${items[i].reservations}</h5>
                <button class="btn button3" onclick= "deletePartyroom(${items[i].id})">Delete Partyroom</button>
                </div>
            </div> 
        `
    }
    myTable+= "</div></div>";
    $("#result").append(myTable);
}

function setPartyroomShowCard(){
    $("#cardPartyroom").empty();
    let f1 = `<div class="container">
                <div class="card border-0" style="width: 14rem;">
                <h1 class="mainCardTitle">Partyrooms</h1>
                <button class="btn buttonGenShow" onclick ="bringPartyroom()">Show Partyrooms</button>
                <button class="btn buttonGenSetSave" onclick="setPartyroomSaveCard()">New Partyroom</button>
            </div>`;

    $("#cardPartyroom").append(f1);

}

function setPartyroomSaveCard(){

    $("#cardPartyroom").empty();

    let formulario = `<div class="container">
                        <div class="card border-0" style="width: 14rem;">
                            <input type="text" id="partyroomOwner" placeholder="Partyroom Owner" style="margin-bottom: 2px;">
                            <input type="text" id="partyroomCapacity" placeholder="Partyroom capacity" style="margin-top: 6px; margin-bottom: 2px;">
                            <input type="number" id="idCategory" placeholder="Category Id" style="margin-top: 6px; margin-bottom: 2px;">
                            <input type="text" id="partyroomName" placeholder="Partyroom Name" style="margin-top: 6px; margin-bottom: 2px;">
                            <input type="text" id="partyroomDesc" placeholder="Partyroom Description" style="margin-top: 6px; margin-bottom: 10px;">
                            <button class ="btn btn-success" onclick="savePartyroom()"> Save</button>
                            <button class ="btn btn-danger" onclick="cancelSavePartyroom()"> Cancel</button>
                        </div>
                    </div>`;

    $("#cardPartyroom").append(formulario);

}
function cancelSavePartyroom(){
    $("#cardPartyroom").empty();
    setPartyroomShowCard();
}


function deletePartyroom(idPartyroom) {

    $.ajax({
        url : 'http://129.80.206.229/api/Partyroom/' + idPartyroom,
        
        type        :   'DELETE',
        contentType :   'application/json',

        success     :   function(pepe) {
                        alert("Successfully deleted");
                        },
        /*error : function(xhr, status) {
        alert('ha sucedido un problema');
        },*/

        complete    :   function(){
                        bringPartyroom();
                        }
        
        });

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
                            },
            complete    :   function(whoo){
                            bringClient();
                            setClientShowCard();
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
                    paintClientCards(respuesta);                    
                },
                error       :   function(xhr,status){
                    alert('Operacion no satisfactoria,'+ xhr.status );
                }
            
                    
              }
               
          );
}

function deleteClient(idClientDel) {
    
    $.ajax({
        url         :   'http://129.80.206.229/api/Client/' + idClientDel,
        
        type        :   'DELETE',
        

        success     :   function(pepe) {
                        alert("Successfully deleted");
                        },
        /*error : function(xhr, status) {
        alert('ha sucedido un problema');
        },*/

        complete    :   function(){
                        bringClient();
                        }
        
        });

}

function paintClientCards(items){

    $("#result").empty();
    let myTable='<div class="container"><div class="row">';
    for (i=0; i<items.length; i++){
        myTable+=`
        <div class= "card cardResultGen">
            <div class= "card body border-0">
                <h4 class= "card-title cardTitle">Client ${items[i].idClient}</h4>
                <h5 class= "card-subtitle mb-2 text-muted">${items[i].email}</h5>
                <h5 class= "card-text">${items[i].password}</h5>
                <h5 class= "card-text">${items[i].name}</h5>
                <h5 class= "card-text">${items[i].age}</h5>
                <p class= "card-text">${items[i].messages}</p>
                <p class= "card-text">${items[i].reservations}</p>
                <button class="btn button3" onclick= "deleteClient(${items[i].idClient})">Delete Client</button>
                
                
                </div>
            </div> 
        `
    }
    myTable+= "</div></div>";
    $("#result").append(myTable);
}

function setClientShowCard(){
    $("#cardClient").empty();
    let f1 = `<div class="container">
                <div class="card border-0" style="width: 14rem;">
                <h1 class="mainCardTitle">Clients</h1>
                <button class="btn buttonGenShow" onclick ="bringClient()">Show Clients</button>
                <button class="btn buttonGenSetSave" onclick="setClientSaveCard()">Register Client</button>
            </div>`;

    $("#cardClient").append(f1);

}

function setClientSaveCard(){

    $("#cardClient").empty();

    let formulario = `<div class="container">
                        <div class="card border-0" style="width: 14rem;">
                            <input type="text" id="clientName" placeholder="Client Name" style="margin-bottom: 2px;">
                            <input type="text" id="clientEmail" placeholder="Client email" style="margin-top: 6px; margin-bottom: 2px;">
                            <input type="text" id="clientPassword" placeholder="Client Password" style="margin-top: 6px; margin-bottom: 2px;">
                            <input type="number" id="clientAge" placeholder= "Client Age" style="margin-top: 6px; margin-bottom: 10px;">
                            <button class ="btn btn-success" onclick="saveClient()"> Save</button>
                            <button class ="btn btn-danger" onclick="cancelSaveClient()"> Cancel</button>
                        </div>
                    </div>`;

    $("#cardClient").append(formulario);

}
function cancelSaveClient(){
    $("#cardClient").empty();
    setClientShowCard();
}

/*
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
*/

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
                            },
            complete   :   function(m){
                                bringMessage();
                                setMessageShowCard();
                            }

        }
    );
}

function deleteMessage(idMessDel) {

    let data={
        idMessage:idMessDel,
    };

    
    let dataToSend= JSON.stringify(data);

    $.ajax({
        url : 'http://129.80.206.229/api/Message/{idMessDel}',
        
        type        :   'DELETE',
        data        :   dataToSend,
        contentType :   'application/json',

        success     :   function(pepe) {
                        alert("Successfully deleted");
                        },
        /*error : function(xhr, status) {
        alert('ha sucedido un problema');
        },*/

        complete    :   function(){
                        bringMessage();
                        }
        
        });

}

function bringMessage(){
    $.ajax(
              {
                url:"http://129.80.206.229/api/Message/all",
                type:"GET",
                datatype:"JSON",
                success:function(respuesta){
                    paintRespuestaMessage(respuesta);                    
                },
                error       :   function(xhr,status){
                    alert('Operacion no satisfactoria,'+ xhr.status );
                }
            
                    
              }
               
          );
}


function paintRespuestaMessage(items){

    $("#result").empty();
    let myTable='<div class="container"><div class="row">';
    for (i=0; i<items.length; i++){
        myTable+=`
        <div class= "card cardResultGen">
            <div class= "card body border-0">
                <h2 class= "card-title cardTitle"> Message ${items[i].idMessage}</h2>
                <h4 class= "card-subtitle" style="margin-bottom: 20px;">${items[i].messageText}</h4>
                <h5 class= "card-subtitle">Left in</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Partyroom ${items[i].partyroom.id}/${items[i].partyroom.name}</li>
                    <li class="list-group-item">Owned by ${items[i].partyroom.owner}</li>
                    <li class="list-group-item">Category ${items[i].partyroom.category.id}/${items[i].partyroom.category.name}</li>
                </ul>
                <h5 class= "card-text">By</h5>
                <ul class="list-group list-group-flush" style="margin-bottom:20px;">
                    <li class="list-group-item">Made by Client ${items[i].client.idClient}/${items[i].client.name}</li>
                    <li class="list-group-item">${items[i].client.email}</li>
                </ul>
                <button class="btn button3" onclick= "deleteMessage(${items[i].idMessage})">Delete Message</button>
                
                
                </div>
            </div> 
        `
    }
    myTable+= "</div></div>";
    $("#result").append(myTable);
}

function setMessageShowCard(){
    $("#cardMessage").empty();
    let f1 = `<div class="container">
                <div class="card border-0" style="width: 14rem;">
                <h1 class="mainCardTitle">Messages</h1>
                <button class="btn buttonGenShow" onclick ="bringMessage()">Show Messages</button>
                <button class="btn buttonGenSetSave" onclick="setMessageSaveCard()">New Message</button>
            </div>`;

    $("#cardMessage").append(f1);

}

function setMessageSaveCard(){

    $("#cardMessage").empty();

    let formulario = `<div class="container">
                        <div class="card border-0" style="width: 14rem;">
                            <input type="text" id="messageText" placeholder="Message Text" style="margin-bottom: 2px;">
                            <input type="number" id="idClientM" placeholder="Client Id" style="margin-top: 6px; margin-bottom: 2px;">
                            <input type="number" id="idPartyroomM" placeholder="Partyroom Id" style="margin-top: 6px; margin-bottom: 20px;">
                            <button class ="btn btn-success" onclick="saveMessage()"> Save</button>
                            <button class ="btn btn-danger" onclick="cancelSaveMessage()"> Cancel</button>
                        </div>
                    </div>`;

    $("#cardMessage").append(formulario);

}
function cancelSaveMessage(){
    $("#cardMessage").empty();
    setMessageShowCard();
}

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
                            },
            complete    :   function(r){
                                bringReserv();
                                setReservShowCard();
                            }

        }
    );
}

function deleteReserv(idResDel) {

    let data={
        idReservation:idResDel,
    };

    
    let dataToSend= JSON.stringify(data);

    $.ajax({
        url : 'http://129.80.206.229/api/Message/{idResDel}',
        
        type        :   'DELETE',
        data        :   dataToSend,
        contentType :   'application/json',

        success     :   function(pepe) {
                        alert("Successfully deleted");
                        },
        /*error : function(xhr, status) {
        alert('ha sucedido un problema');
        },*/

        complete    :   function(){
                        bringReserv();
                        }
        
        });

}

function bringReserv(){
    $.ajax(
              {
                url:"http://129.80.206.229/api/Reservation/all",
                type:"GET",
                datatype:"JSON",
                success:function(respuesta){
                    paintRespuestaReservation(respuesta);                    
                },
                error       :   function(xhr,status){
                    alert('Operacion no satisfactoria,'+ xhr.status );
                }
            
                    
              }
               
          );
}

function paintRespuestaReservation(items){

    $("#result").empty();
    let myTable='<div class="container"><div class="row">';
    for (i=0; i<items.length; i++){
        myTable+=`
        <div class= "card cardResultGen">
            <div class= "card body border-0">
                <h4 class= "card-title cardTitle"> Reservation ${items[i].idReservation}</h4>
                <h5 class= "card-subtitle mb-2 text-muted">From ${items[i].startDate}</h5>
                <h5 class= "card-text">To ${items[i].devolutionDate}</h5>
                <h3 class= "card-text">Made in</h3>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Partyroom ${items[i].partyroom.id}/${items[i].partyroom.name}</li>
                    <li class="list-group-item">Owned by ${items[i].partyroom.owner}</li>
                    <li class="list-group-item">Category ${items[i].partyroom.category.id}/${items[i].partyroom.category.name}</li>
                </ul
                <h3 class= "card-text text-muted">Made by</h3>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${items[i].client.idClient}/${items[i].client.name}</li>
                    <li class="list-group-item">${items[i].client.email}</li>
                </ul>
                <h3 class= "card-text text-muted">Score ${items[i].score}</h3>
                <button class="btn button3" onclick= "deleteMessage(${items[i].idReservation})">Delete Reservation</button>
                </div>
            </div> 
        `
    }
    myTable+= "</div></div>";
    $("#result").append(myTable);
}

function setReservShowCard(){
    $("#cardReservation").empty();
    let f1 = `<div class="container">
                <div class="card border-0" style="width: 14rem;">
                <h1 class="mainCardTitle">Reservations</h1>
                <button class="btn buttonGenShow" onclick ="bringReserv()">Show Reservations</button>
                <button class="btn buttonGenSetSave" onclick="setReservSaveCard()">New Reservation</button>
            </div>`;

    $("#cardReservation").append(f1);

}

function setReservSaveCard(){

    $("#cardReservation").empty();

    let formulario = `<div class="container">
                        <div class="card border-0" style="width: 14rem;">
                            <input type="date" id="startDate" placeholder="Start Date" style="margin-bottom: 2px;">
                            <input type="date" id="devolutionDate" placeholder="Devolution Date" style="margin-top: 6px; margin-bottom: 2px;">
                            <input type="number" id="idClientR" placeholder="Id Client" style="margin-top: 6px; margin-bottom: 2px;">
                            <input type="number" id="idPartyroomR" placeholder="Id Partyroom" style="margin-top: 6px; margin-bottom: 10px;">
                            <button class ="btn btn-success" onclick="saveReserv()"> Save</button>
                            <button class ="btn btn-danger" onclick="cancelSaveReserv()"> Cancel</button>
                        </div>
                    </div>`;

    $("#cardReservation").append(formulario);

}
function cancelSaveReserv(){
    $("#cardReservation").empty();
    setReservShowCard();
}
