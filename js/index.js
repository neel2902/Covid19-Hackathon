const HOST = "https://finhelp-api.herokuapp.com/";
let username = '';
let password = '';

let authorised = false;
function login2() {
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    var raw = {
        "username": username,
        "password": password
    }
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(raw),
        redirect: 'follow'
    };
    fetch(HOST + "staff/signin/", requestOptions)
        .then(response => {
            if (!response.ok) {
                alert("Wrong id or password");
            }
            else {
                authorised = true;
                return response.json();
            }
        })
        .then(result => {
            console.log(result);
            localStorage.setItem("User_auth", result.auth_user);
            localStorage.setItem("User_token", result.idtoken);
            localStorage.setItem("User_task", result.number_task);
            localStorage.setItem("User_tasks", JSON.stringify(result.tasks));
            if (authorised) {
                window.location.href = "home.html"
            }
        })
        .catch(error => console.log('error', error));
}