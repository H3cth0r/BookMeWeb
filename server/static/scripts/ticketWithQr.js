
/*SELECT DT3.ticketId, DT3.userId, DT3.dateRegistered, DT3.startDate, DT3.endDate, DT3.objectId, DT3.objectType, 
                                DT3.objectName, DT3.description as ticketDescription, DT3.qrCode, DT3.weight, HardwareClass.name, 
HardwareClass.operativeSystem, HardwareClass.description as objectDescription*/
/* para ponerlo como en figma faltan:
user    Name
        Surname
        BirthDate
        organization

*/ 
objeto = ticket.objectType;

if (objeto == "Hardware") {

for (var i = 0; i < hardW.length; i++) {
    var hardware = hardW[i];
    var ticketId = hardware.ticketId;
    var userId = hardware.userId;
    var dateRegistered = hardware.dateRegistered;
    var startDate = hardware.startDate;
    var endDate = hardware.endDate;
    var objectId = hardware.objectId;
    var objectType = hardware.objectType;
    var objectName = hardware.objectName;
    var ticketDescription = hardware.ticketDescription;
    var qrCode = hardware.qrCode;
    var weight = hardware.weight;
    var name = hardware.name;
    var operativeSystem = hardware.operativeSystem;
    var objectDescription = hardware.objectDescription;
     /* aqui añadir el html del ticket */
    let imagenes = `<img src="`+ userId + `" alt="QR Code" width="100" height="100">`;
    let qrImage = `<img src="`+ qrCode + `" alt="QR Code" width="100" height="100">`;
    let tickId = `<p>`+ ticketId + `</p>`;

    $('#qrCode').append(qrImage);
    $('#profile').append(imagenes);
    $('#ticketsid').append(tickId);
    var tickedInside = `<div class="ticket">
        <div class="ticket__header">
            <h2 class="ticket__title">{</h2>
            <h2 class="ticket__title">"reservation":{</h2>
            <h2 class="ticket__title">"user":{</h2>
            <p > "name": "`+ userName + `",</p>
            <p > "surname": "`+ userSurname + `",</p>
            <p > "birthDate": "`+ userBirthDate + `",</p>
            <p > "organization": "`+ userOrganization + `",</p>
            <h2 class="ticket__title">},</h2>
            <p > "type": "`+ objectType + `",</p>
            <p > "nameHardware": "`+ objectName + `",</p>
            <p > "description": "`+ ticketDescription + `",</p>
            <p > "startDate": "`+ startDate + `",</p>
            <p > "endDate": "`+ endDate + `",</p>

            <h2 class="ticket__title">},</h2>
            <h2 class="ticket__title">}</h2>
            <button id="edit">EDIT</button>

        </div>
        </div>`;
        
    
    $('#datosTicket').append(tickedInside);

    if (('#edit').click(function(){
        $('#datosTicket').empty();
            var tickedInside = `<div class="ticket">
            <div class="ticket__header">
                <h2 class="ticket__title">{</h2>
                <h2 class="ticket__title">"reservation":{</h2>
                <h2 class="ticket__title">"user":{</h2>
                <p > "name": "`+ userName + `",</p>
                <p > "surname": "`+ userSurname + `",</p>
                <p > "birthDate": "`+ userBirthDate + `",</p>
                <p > "organization": "`+ userOrganization + `",</p>
                <h2 class="ticket__title">},</h2>
                <p > "type": "`+ objectType + `",</p>
                <p > "nameHardware": "`+ objectName + `",</p>
                <p > "description": "`+ ticketDescription + `",</p>
                <input type="date" id="startDate" value="`+ startDate + `">
                <input type="date" id="endDate" value="`+ endDate + `">

                <h2 class="ticket__title">},</h2>
                <h2 class="ticket__title">}</h2>
                <button id="safe">SAVE</button>

            </div>
            </div>`;
        $('#datosTicket').append(tickedInside);

        if (('#safe').click(function(){
            $.ajax({
                url: '/api/updateQrCodes',
                type: 'POST',
                data: {
                    ticketId: ticketId,
                    startDate: $('#startDate').val(),
                    endDate: $('#endDate').val()
                },
                success: function (data) {
                    console.log(data);
                }
            });
        }));
    }
    ));
}
}

/*SELECT DT3.ticketId, DT3.userId, DT3.dateRegistered, DT3.startDate, DT3.endDate, DT3.objectId, DT3.objectType,
                       DT3.objectName, DT3.description as ticketDescription, DT3.qrCode, DT3.weight, SoftwareClass.name, 
                       SoftwareClass.brand, SoftwareClass.operativeSystem, SoftwareClass.description as objectDescription*/

if (objeto == "Software") {
for (var i = 0; i < softW.length; i++) {
    var software = softW[i];
    var ticketId = software.ticketId;
    var userId = software.userId;
    var dateRegistered = software.dateRegistered;
    var startDate = software.startDate;
    var endDate = software.endDate;
    var objectId = software.objectId;
    var objectType = software.objectType;
    var objectName = software.objectName;
    var ticketDescription = software.ticketDescription;
    var qrCode = software.qrCode;
    var weight = software.weight;
    var name = software.name;
    var brand = software.brand;
    var operativeSystem = software.operativeSystem;
    var objectDescription = software.objectDescription;
        /* aqui añadir el html del ticket */

    let imagenes = `<img src="`+ userId + `" alt="QR Code" width="100" height="100">`;
    let qrImage = `<img src="`+ qrCode + `" alt="QR Code" width="100" height="100">`;
    let tickId = `<p>`+ ticketId + `</p>`;
    $('#qrCode').append(qrImage);
    $('#profile').append(imagenes);
    $('#ticketsid').append(tickId);
    var tickedInside = `<div class="ticket">
        <div class="ticket__header">
            <h2 class="ticket__title">{</h2>
            <h2 class="ticket__title">"reservation":{</h2>
            <h2 class="ticket__title">"user":{</h2>
            <p > "name": "`+ userName + `",</p>
            <p > "surname": "`+ userSurname + `",</p>
            <p > "birthDate": "`+ userBirthDate + `",</p>
            <p > "organization": "`+ userOrganization + `",</p>
            <h2 class="ticket__title">},</h2>
            <p > "type": "`+ objectType + `",</p>
            <p > "prefix": "`+ brand + `",</p>
            <p > "description": "`+ ticketDescription + `",</p>
            <p > "startDate": "`+ startDate + `",</p>
            <p > "endDate": "`+ endDate + `",</p>

            <h2 class="ticket__title">},</h2>
            <h2 class="ticket__title">}</h2>
            <button id="edit">EDIT</button>

        </div>
        </div>`;

    $('#datosTicket').append(tickedInside);

    if (('#edit').click(function(){

        $('#datosTicket').empty();
        var tickedInside = `<div class="ticket">
        <div class="ticket__header">
            <h2 class="ticket__title">{</h2>
            <h2 class="ticket__title">"reservation":{</h2>
            <h2 class="ticket__title">"user":{</h2>
            <p > "name": "`+ userName + `",</p>
            <p > "surname": "`+ userSurname + `",</p>
            <p > "birthDate": "`+ userBirthDate + `",</p>
            <p > "organization": "`+ userOrganization + `",</p>
            <h2 class="ticket__title">},</h2>
            <p > "type": "`+ objectType + `",</p>
            <p > "prefix": "`+ objectName + `",</p>
            <p > "description": "`+ ticketDescription + `",</p>
            <input type="date" id="startDate" value="`+ startDate + `">
            <input type="date" id="endDate" value="`+ endDate + `">

            <h2 class="ticket__title">},</h2>
            <h2 class="ticket__title">}</h2>
            <button id="safe">SAVE</button>

        </div>
        </div>`;
        $('#datosTicket').append(tickedInside);

        if (('#safe').click(function(){
            $.ajax({
                url: '/api/updateQrCodes',
                type: 'POST',
                data: {
                    ticketId: ticketId,
                    startDate: $('#startDate').val(),
                    endDate: $('#endDate').val()
                },
                success: function (data) {
                    console.log(data);
                }
            });
        }));
    }
    ));
}
}
/*SELECT DT2.ticketId, DT2.userId, DT2.dateRegistered, DT2.startDate, DT2.endDate, DT2.objectId, DT2.objectType,
                       DT2.objectName, DT2.description as ticketDescription, DT2.qrCode, DT2.weight, Rooms.name, 
                       Rooms.label, Rooms.location, Rooms.description as objectDescription*/

if (objeto == "Room") {
for (var i = 0; i < salas.length; i++) {
    var sala = salas[i];
    var ticketId = sala.ticketId;
    var userId = sala.userId;
    var dateRegistered = sala.dateRegistered;
    var startDate = sala.startDate;
    var endDate = sala.endDate;
    var objectId = sala.objectId;
    var objectType = sala.objectType;
    var objectName = sala.objectName;
    var ticketDescription = sala.ticketDescription;
    var qrCode = sala.qrCode;
    var weight = sala.weight;
    var name = sala.name;
    var label = sala.label;
    var location = sala.location;
    var objectDescription = sala.objectDescription;
        /* aqui añadir el html del ticket */
    
    let imagenes = `<img src="`+ userId + `" alt="QR Code" width="100" height="100">`;
    let qrImage = `<img src="`+ qrCode + `" alt="QR Code" width="100" height="100">`;
    let tickId = `<p>`+ ticketId + `</p>`;
    $('#qrCode').append(qrImage);
    $('#profile').append(imagenes);
    $('#ticketsid').append(tickId);
    var tickedInside = `<div class="ticket">
        <div class="ticket__header">
            <h2 class="ticket__title">{</h2>
            <h2 class="ticket__title">"reservation":{</h2>
            <h2 class="ticket__title">"user":{</h2>
            <p > "name": "`+ userName + `",</p>
            <p > "surname": "`+ userSurname + `",</p>
            <p > "birthDate": "`+ userBirthDate + `",</p>
            <p > "organization": "`+ userOrganization + `",</p>
            <h2 class="ticket__title">},</h2>
            <p > "type": "`+ objectType + `",</p>
            <p > "label": "`+ objectName + `",</p>
            <p > "description": "`+ ticketDescription + `",</p>
            <p > "startDate": "`+ startDate + `",</p>
            <p > "endDate": "`+ endDate + `",</p>

            <h2 class="ticket__title">},</h2>
            <h2 class="ticket__title">}</h2>
            <button id="edit">EDIT</button>

        </div>
        </div>`;
    $('#datosTicket').append(tickedInside);
    if (('#edit').click(function(){

        $('#datosTicket').empty();
        var tickedInside = `<div class="ticket">
        <div class="ticket__header">
            <h2 class="ticket__title">{</h2>
            <h2 class="ticket__title">"reservation":{</h2>
            <h2 class="ticket__title">"user":{</h2>
            <p > "name": "`+ userName + `",</p>
            <p > "surname": "`+ userSurname + `",</p>
            <p > "birthDate": "`+ userBirthDate + `",</p>
            <p > "organization": "`+ userOrganization + `",</p>
            <h2 class="ticket__title">},</h2>
            <p > "type": "`+ objectType + `",</p>
            <p > "label": "`+ objectName + `",</p>
            <p > "description": "`+ ticketDescription + `",</p>
            <input type="date" id="startDate" value="`+ startDate + `">
            <input type="date" id="endDate" value="`+ endDate + `">

            <h2 class="ticket__title">},</h2>
            <h2 class="ticket__title">}</h2>
            <button id="safe">SAVE</button>

        </div>
        </div>`;
        $('#datosTicket').append(tickedInside);

        if (('#safe').click(function(){
            $.ajax({
                url: '/api/updateQrCodes',
                type: 'POST',
                data: {
                    ticketId: ticketId,
                    startDate: $('#startDate').val(),
                    endDate: $('#endDate').val()
                },
                success: function (data) {
                    console.log(data);
                }
            });
        }));
    }
    ));
}
}


let diaI = new Date(startDate);
let diaF = new Date(endDate);
let diaInicial = diaI.getDate();
let diaFinal = diaF.getDate();

let fechas = `<p>`+ diaInicial + ` ` + diaI + ` </p>
                <p>`+ diaFinal + ` ` + diaF + ` </p>`;

$('#diaTIckets').append(fechas);

