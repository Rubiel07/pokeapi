//Eventos
//document hace referencia a toda la pagina
document.addEventListener("DOMContentLoaded", function(){
    //Agregar un elemento a la 
    let nav = document.querySelector("#navegator")
    //Crear un nuevo elemento a
    // let link = document.createElement("a")
    //Establecer el texto del enlace
    // link.textContent = "Ir al inicio"
    //Establecer el href del enlace
    // link.href = "./index.html"
    //Agregar el enlace al navegador
    // nav.appendChild(link)
    nav.innerHTML += '<a href="./index.html" target="_blank">volver</a>'

    let aside = document.querySelector("aside")
    aside.innerHTML += "<button onclick='alert(\"hola mundo\")'>hola</button>"

    let contador = document.querySelector("contador")
    
    let segundos = 0

    
})