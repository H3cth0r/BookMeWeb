$(document).ready(function () {
    for (var i = 0; i < hardw.length; i++) {
        var hardware = hardw[i];
        var generalObjectId = hardware.generalObjectId;
        var hardwareName = hardware.name;
        var hardwarePrefix = hardware.identifier;
        var hardwareWeight = hardware.totalWeight;
        
        var hardwareHTML = "<div class='hardware'>";
        hardwareHTML += "<p>" + hardwareName + "</p>";
        hardwareHTML += "<p>" + hardwarePrefix + "</p>";
        
        if (hardwareWeight < 150) {
            hardwareHTML += "<p>Available       🟢</p>";
        }
        else {
            hardwareHTML += "<p>Not Available       🔴</p>";
        }
        hardwareHTML += "<button name='generalObjectId' value='" + i + "' class='btn btn-primary' id='botonenvio'>BooKMe</button>"
        hardwareHTML += "</div>";
        
        $('#main_table').append(hardwareHTML);
        console.log(i)

    }

    $("#botonenvio").click(function () {
        let index = $('#botonenvio').val();
        
        $.ajax({
            url: "/makeReservation",
            type: "POST",
            data: {"objectType" : "hardware",
                   "objectId" : hardw[index].generalObjectId, 
                   "objectName" : hardw[index].name}

        });
    }
    );
    
    
})
