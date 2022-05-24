"use strict";

const formMessage = document.querySelector("form#message");

let user = null;
let socket  = null;

const validarJWT = async()=>{
    const token = localStorage.getItem("token");
    if(!token) return window.location = "/";
    try{
        const resp = await fetch("/api/auth/", { headers:{ Authorization: token } })
        if(resp.status != 200) throw new Error("error");
        const { user: userDB, token: tokenDB } = await resp.json();
        user = userDB;
        localStorage.setItem("token", tokenDB);
    } catch(error){
        console.error(error);
        localStorage.removeItem("token");
        window.location = "/";
    };
};

const conectarSocket = async()=>{
    socket = io({ extraHeaders: {
        "Authorization": localStorage.getItem("token")
    }});

    socket.on("connect", ()=>{
        const badge = document.querySelector("#status_badge");
        badge.classList.remove("bg-danger", "border-danger", "text-danger");
        badge.classList.add("bg-success", "border-success", "text-success");
        badge.innerHTML = "ONLINE";
    });
    
    socket.on("disconnect", ()=>{
        const badge = document.querySelector("#status_badge");
        badge.classList.remove("bg-success", "border-success", "text-success");
        badge.classList.add("bg-danger", "border-danger", "text-danger");
        badge.innerHTML = "OFFLINE";
    });

    socket.on("messages", (payload)=>{
        console.log(payload);
    });
    socket.on("active_users", drawUsers);
    // socket.on("private_message", ()=>{});
};

const drawUsers = (users = [])=>{
    let usersHTML = "";
    const ulUsers = document.querySelector("ul#users");

    users.forEach(({ name, _id })=>{
        usersHTML += `
            <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column">
                    <span>${name}</span>
                    <small class="text-muted">${_id}</small>
                </div>
                <span class="p-2 rounded-circle bg-success"></span>
            </li>
        `;
    });
    ulUsers.innerHTML = usersHTML;
};

formMessage.addEventListener("submit", (e)=>{
    e.preventDefault();
    const message = e.target[0].value.trim();
    e.target[0].value = null;
    if(!message) return;

    socket.emit("response_message", message);
});

const main = async()=>{
    await validarJWT();
    await conectarSocket();
};
main();


