// =================================
// BUSCAMOS LOS ELEMENTOS
// =================================


// Buscamos la primera pantalla
const parte1 =
    document.getElementById("parte1");


// Buscamos la segunda pantalla
const parte2 =
    document.getElementById("parte2");


// Buscamos el botón SÍ
const botonSi =
    document.getElementById("si");


// Buscamos el botón NO
const botonNo =
    document.getElementById("no");


// Buscamos el mensaje superior
const mensaje =
    document.getElementById("mensaje");


// =================================
// CUANDO DICE SÍ
// =================================

botonSi.addEventListener(
    "click",
    function () {

        // Ocultamos la parte 1
        parte1.classList.add("oculto");


        // Mostramos la parte 2
        parte2.classList.remove("oculto");


        // Hacemos que aparezca el mensaje
        mensaje.style.display = "block";

    }
);


// =================================
// CUANDO DICE NO
// =================================

botonNo.addEventListener(
    "click",
    function () {

        // Mostramos un mensaje de regaño JAJA
        alert(
            "PORQUE AMOR TE LO HICE CON MUUCHO AMOR 💙 VUELVE A INTENTARLO SHI..."
        );


        // Nos aseguramos de que la parte 1 siga visible
        parte1.classList.remove("oculto");


        // La parte 2 permanece escondida
        parte2.classList.add("oculto");

    }
);
