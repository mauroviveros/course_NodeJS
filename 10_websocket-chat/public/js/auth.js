function handleCredentialResponse(response) {
    const body = { google_token: response.credential };
    const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    };

    fetch("/api/auth/login/google", config)
        .then(resp => resp.json())
        .then(resp => { localStorage.setItem("token", resp.token); window.location = "/chat.html"; })
        .catch(console.warn);
};

const form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const formData = {};
    for(let el of form.elements){
        if(el.name.length > 0) formData[el.name] = el.value;
    };

    const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    };
    fetch("/api/auth/login/", config)
        .then(resp => resp.json())
        .then(resp => {
            if(resp && resp.token){
                localStorage.setItem("token", resp.token);
                window.location = "/chat.html";
            };
        })
        .catch(console.warn);
});

if(localStorage.getItem("token")) window.location = "/chat.html";