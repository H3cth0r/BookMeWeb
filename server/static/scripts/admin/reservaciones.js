console.log(tickets)
    for(let i = 0; i < tickets.length; i++){
        var ticket = tickets[i];
        var ticketID = ticket.ticketId;
        var username = ticket.username;
        var objetoID = ticket.objectId;
        var fecha_inicio = ticket.startDate;
        var fecha_fin = ticket.endDate;

        console.log(fecha_fin)

        let the = `<div class="single_row_user" id="`+ ticketID +`" >
                        <p id="ticketId"> `+ ticketID +`</p>
                        <input type="text" value="` + username + `" id="username">
                        <input type="text" value="` + objetoID + `" id="objeto">
                        <input type="date" value="` + fecha_inicio + `" id="fecha_inicio">
                        <input type="date" value="` + fecha_fin + `" id="fecha_fin">
                        
                        <div><button id="row_delete" onclick="delete_button('`+ ticketID +`');">Delete</button></div>
                        <div><button id="row_save" onclick="save_button('`+ticketID+`');">Save</button></div>
                    </div>
                    <br>`;
        $('.div_list_users').append(the);
        console.log("lol");
    }




    function delete_button(id_val){
        if (confirm ("¿Estás seguro de que quieres eliminar este objeto?")) {

        $.ajax({
            url: '../api/editSoftware', //cambiar esto por la ruta del servidor y añadir bien el json
            type: 'POST',
            data: JSON.stringify({ "ticketID " : ticketID }),
            contentType: "application/json",
            dataType: "json",
            success: function(data){
                alert(data);
            }
        });
    }
    }
    
    function save_button(id_val){
        if (confirm ("¿Estás seguro de que quieres guardar los cambios?")) {
        
        $.ajax({
            url: '../api/editSoftware', //cambiar esto por la ruta del servidor y añadir bien el json
            type: 'POST',
            data: JSON.stringify({ "ticketID " : ticketID, "username" : username, "objetoID" : objetoID, "fecha_inicio" : fecha_inicio, "fecha_fin" : fecha_fin }),
            contentType: "application/json",
            dataType: "json",
            success: function(data){
                alert(data);
            }
        });
        
    }
    }