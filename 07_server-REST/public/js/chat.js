// const socket = io();

// socket.on("connection");

const validarJWT = async()=>{
    const token = localStorage.getItem("token");
    if(!token) return window.location = "/";
    try{
        const resp = await fetch("http://localhost:8081/api/auth/", { headers:{ Authorization: token } })
        const { user, token: tokenDB } = await resp.json()
        localStorage.setItem("token", tokenDB);
    } catch(error){
        console.warn(error);
    };


};

const main = async()=>{
    await validarJWT();
};
main();