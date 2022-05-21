const socket = io();
const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");

socket.on("connect", ()=>{
    console.log("conectado");
    lblOffline.style.display = "none";
    lblOnline.style.display = "";
});

socket.on("disconnect", ()=>{
    console.log("desconectado");
    lblOffline.style.display = "";
    lblOnline.style.display = "none";
});