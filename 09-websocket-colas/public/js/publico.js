const socket = io();
const lblTickets = [
    { ticket: document.querySelector("#lblTicket1"), escritorio: document.querySelector("#lblEscritorio1") },
    { ticket: document.querySelector("#lblTicket2"), escritorio: document.querySelector("#lblEscritorio2") },
    { ticket: document.querySelector("#lblTicket3"), escritorio: document.querySelector("#lblEscritorio3") },
    { ticket: document.querySelector("#lblTicket4"), escritorio: document.querySelector("#lblEscritorio4") }
];

socket.on("last_tickets", (tickets)=>{
    lblTickets.map((lblTicket, index)=>{
        if(tickets[index]){
            lblTicket.ticket.innerText = `Ticket ${tickets[index].numero}`;
            lblTicket.escritorio.innerText = `Escritorio: ${tickets[index].escritorio}`;
        };
    });
});