const socket = io();
const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");

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
    const message = txtMessage.value;
    if(!message) return;
    const payload = {
        message,
        id: "mviveros",
        date: new Date().getTime()
    };

    socket.emit("send_message", payload);
});