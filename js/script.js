
// API CLIMA


const clima = document.getElementById("clima");

if(clima){

fetch("https://api.open-meteo.com/v1/forecast?latitude=1.1489&longitude=-76.6476&current_weather=true")

.then(response=>response.json())

.then(data=>{

clima.innerHTML=`

<h4> Clima Actual en Mocoa </h4>

<p>Temperatura:
${data.current_weather.temperature}°C</p>

<p>Velocidad viento:
${data.current_weather.windspeed} km/h</p>

`;

});

}


// MODO OSCURO


function cambiarTema(){

document.body.classList.toggle("dark-mode");

localStorage.setItem(
"tema",
document.body.classList.contains("dark-mode")
);

}

if(localStorage.getItem("tema")==="true"){

document.body.classList.add("dark-mode");

}


// VALIDACIÓN FORMULARIO

const formulario = document.getElementById("formulario");

if (formulario) {

    formulario.addEventListener("submit", function(e) {

        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if(nombre === "" || correo === "" || mensaje === "") {

            alert("Por favor complete todos los campos");
            return;

        }

        console.log(" MENSAJE");
        console.log("Nombre:", nombre);
        console.log("Correo:", correo);
        console.log("Mensaje:", mensaje);

        alert("Mensaje enviado correctamente");

        formulario.reset();

    });

}