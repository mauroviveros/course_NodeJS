const searchParams = new URLSearchParams(window.location.search);
const lblEscritorio = document.querySelector("#lblEscritorio");
const lblTicket = document.querySelector("#lblTicket");
const lblNoTickets = document.querySelector("#lblNoTickets");
const lblPendientes = document.querySelector("#lblPendientes");
const btn = document.querySelector("#attendTicket");

if(!searchParams.has("escritorio")){
    window.location = "/";
    throw new Error("el Escritorio es obligatorio");
};

lblEscritorio.innerText =  searchParams.get("escritorio");
