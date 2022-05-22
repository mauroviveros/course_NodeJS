const socket = io();

const text = document.querySelector("#lblNuevoTicket");
const btn = document.querySelector("#genTicket");

socket.on("connect", ()=>{ btn.disabled = false; });
socket.on("disconnect", ()=>{ btn.disabled = true; });
socket.on("last_ticket", (ticket)=>{ text.innerText = `Ticket Nro: ${ticket}`; });


btn.addEventListener("click", ()=>{
    socket.emit("next_ticket", null, (ticket)=>{ text.innerText = `Ticket Nro: ${ticket}`; });
});