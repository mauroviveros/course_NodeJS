const socket = io();
const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");

const username = document.querySelector("#username");
const txtMessage = document.querySelector("#txtMessage");
const btnSend = document.querySelector("#btnSend");


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

btnSend.addEventListener("click", ()=>{
    if(!txtMessage.value) return;
    const payload = {
        message : txtMessage.value,
        id: username.value,
        date: new Date().getTime()
    };

    socket.emit("send_message", payload, ()=>{
        console.log("Mensaje enviado Correctamente!!!");
    });
});

socket.on("send_message", (payload)=>{
    console.log(payload);
})