

$("select").change(function(){
    $(".tipo option:selected").each(function(){
        $( '#contenedortodo' ).empty();
        if($(this).val()=="4"){
            let the =   `
            <div id="textoSala">
                <div id="contenedor">
                    <div>
                        <label for="nombreSala">Nombre de sala</label>
                    </div>
                    <div>
                        <input type="text" id="nombreSala" name="nombreSala" placeholder="Sala">
                    </div>
                </div>
                <br>
                <br>
                <div id="contenedor">
                    <div>
                        <label for="capacidad">Capacidad maxima</label>
                    </div>
                    <div>
                        <input type="number" id="capacidad" name="capacidad">
                    </div> 
                </div>
                <br>
                <br>
                <div id="contenedor">
                    <div>
                        <label for="maxDays">Maximo de dias a reservar</label>
                    </div>
                    <div>
                        <input type="number" id="maxDays" name="maxDays">
                    </div>
                </div>
            </div>
            
            <div id="Descripcion">
                <label for="descripcion">Descripcion</label>
                <textarea rows="4" cols="50" id="descripcion" name="descripcion" placeholder="Descripcion"></textarea>
            </div>
            
              
        </div>`;
            $('#contenedortodo').append(the);

        }
        if($(this).val()=="3"){
            let the =   `<div id="textoSoftware">
            <div id="contenedor">
                <div>
                    <label for="nombreSoftware">Nombre del Software</label>
                </div>
                <div>
                    <input type="text" id="nombreSoftware" name="nombreSoftware" placeholder="Software">
                </div>
            </div>
            <br>
            <br>
            <div id="contenedor">
                <div>
                    <label for="Software">Marca del Software</label>
                </div>
                <div>
                    <select name="hard" id="Software">
                        <option value="1">Elige una marca</option>
                        <option value="2">Microsoft</option>
                        <option value="3">Apple</option>
                        <option value="4">Adobe</option>
                        <option value="5">Autodesk</option>
                        <option value="6">Corel</option>
                        <option value="7">Google</option>
                        <option value="8">IBM</option>
                        <option value="9">Intel</option>
                        <option value="10">Oracle</option>
                        <option value="11">SAP</option>
                        <option value="12">Symantec</option>
                        <option value="13">VMware</option>
                        <option value="14">Otro</option>
                    </select>
                </div> 
            </div>
            <br>
            <br>
            <div id="contenedor">
                <div>
                    <label for="maxDays">Maximo de dias a reservar</label>
                </div>
                <div>
                    <input type="number" id="maxDays" name="maxDays">
                </div>
            </div>
        </div>
        
        <div id="Descripcion">
            <div>
                <label for="prefijo">Prefijo de indice</label>
            </div>
            <div>
                <input type="text" id="prefijo" name="prefijo">
            </div>
            <label for="descripcion">Descripcion</label>
            <textarea rows="4" cols="50" id="descripcion" name="descripcion" placeholder="Descripcion"></textarea>
        </div>
        
        </div>  
    </div>`;
            $('#contenedortodo').append(the);
        }
        if($(this).val()=="2"){
            let the =   `<div id="textoHardware">
            <div id="contenedor">
                <div>
                    <label for="nombreHardware">Nombre del Hardware</label>
                </div>
                <div>
                    <input type="text" id="nombreHardware" name="nombreHardware" placeholder="Hardware">
                </div>
            </div>
            <br>
            <br>
            <div id="contenedor">
                <div>
                    <label for="Hardware">Tipo del Hardware</label>
                </div>
                <div>
                    <select name="hard" id="Hardware">
                        <option value="1">Elige un tipo de Hardware</option>
                        <option value="2">CPU</option>
                        <option value="3">Monitor</option>
                        <option value="4">Teclado</option>
                        <option value="5">Mouse</option>
                        <option value="6">Impresora</option>
                        <option value="7">Router</option>
                        <option value="8">Switch</option>
                        <option value="9">Hub</option>
                        <option value="10">Cable</option>
                        <option value="11">Otro</option>
                    </select>
                </div> 
            </div>
            <br>
            <br>
            <div id="contenedor">
                <div>
                    <label for="marcaHardware">Sistema Operativo (opcional)</label>
                </div>
                <div>
                    <input type="text" id="os" name="os" placeholder="Windows">
                </div>
            </div>
            <br>
            <br>
            <div id="contenedor">
                <div>
                    <label for="maxDays">Maximo de dias a reservar</label>
                </div>
                <div>
                    <input type="number" id="maxDays" name="maxDays">
                </div>
            </div>
        </div>
        
        <div id="Descripcion">
            <div>
                <label for="prefijo">Prefijo de indice</label>
            </div>
            <div>
                <input type="text" id="prefijo" name="prefijo">
            </div>
            <label for="descripcion">Descripcion</label>
            <textarea rows="4" cols="50" id="descripcion" name="descripcion" placeholder="Descripcion"></textarea>
        </div>
        
        </div>  
    </div>`;
            $('#contenedortodo').append(the);
        }
    });
    
});




function new_div(obj){

    for(let i = 0; i < 10; i++){
            let the =`<div class="single_row_user" id="${username_list[i]}">
            <p>${i+1}</p>
            <p>${username_list[i]}</p>
            
            <div><button id="row_delete" onclick="delete_button('${objeto_list_id[i]}');">Delete</button></div>
            <div><button id="row_save" onclick="save_button('${objeto_list_id[i]}');">Save</button></div>
        </div>
        <br>`;
        $('.div_list_users').append(the);
        console.log("lol");
    }
}

window.onload = add_div();

function move_rows(id_val){
    $(`#${id_val}`).remove();
}
// div div objs display: none
// animation make smaller row div
// delete the div
function delete_button(id_val){
    anime({
        targets: `#${id_val}`,
        translateX: 1500,
        easing: "easeInOutCubic"
    });
    setTimeout(move_rows, 800, id_val);
}


