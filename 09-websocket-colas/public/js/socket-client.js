const socket = io();

const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");

socket.on("connect", ()=>{
    console.log("conectado");
    lblOffline.style.display = "none";
    lblOnline.style.display = "block";
});

socket.on("disconnect", ()=>{
    console.log("desconectado");
    lblOffline.style.display = "block";
    lblOnline.style.display = "none";
});