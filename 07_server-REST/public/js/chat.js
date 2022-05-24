// const socket = io();

// socket.on("connection");

const validarJWT = async()=>{
    const token = localStorage.getItem("token");
    if(!token) return window.location = "/";
    try{
        const resp = await fetch("http://localhost:8081/api/auth/", { headers:{ Authorization: token } })
        if(resp.status != 200) throw new Error("error");
        const { user, token: tokenDB } = await resp.json()
        localStorage.setItem("token", tokenDB);
    } catch(error){
        console.error(error);
        localStorage.removeItem("token");
        window.location = "/";
    };
};

const conectarSocket = async()=>{
    const socket = io({ extraHeaders: {
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

    // socket.on("recieve_message", ()=>{});
    socket.on("active_users", (payload)=>{
        console.log(payload);
    });
    // socket.on("private_message", ()=>{});
}

const main = async()=>{
    await validarJWT();
    await conectarSocket();
};
main();


