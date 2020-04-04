const users = [
    {
        'username': 'testuser',
        'password': 'test'
    },
    {
        'username': 'testuser2',
        'password': 'test2'
    }
]
let username = '';
let password = '';
function login() {
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            window.location.href = "home.html";
            return;
        }
    }
    alert("Wrong username and password");
}