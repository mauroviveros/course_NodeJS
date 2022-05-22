// const socket = io();

// socket.on("connection");

const validarJWT = async()=>{
    const token = localStorage.getItem("token");
    if(!token) return window.location = "/";
    try{
        const resp = await fetch("http://localhost:8081/api/auth/", { headers:{ Authorization: token } })
        const { user, token: tokenDB } = await resp.json()
        localStorage.setItem("token", tokenDB);
        await conectarSocket();
    } catch(error){
        localStorage.removeItem("token");
        window.location = "/";
        console.warn(error);
    };
};

const conectarSocket = async()=>{
    const socket = io({ extraHeaders: {
        "Authorization": localStorage.getItem("token")
    }});

    socket.on("connection", ()=>{ console.log("conectado") });
    socket.on("disconnection", ()=>{ console.log("conectado") });
    socket.on("recieve_message", ()=>{});
    socket.on("active_users", ()=>{});
    socket.on("private_message", ()=>{});
}

const main = async()=>{
    await validarJWT();
};
main();