const HOST = "https://finhelp-api.herokuapp.com/"

document.getElementById("staff").textContent = localStorage.getItem('User_auth');
let input, filter, table, tr, td, i, txtValue;
table = document.getElementById("table");
tr = table.getElementsByTagName("tr");


const searchByName = () => {
    input = document.getElementById("sbn");
    filter = input.value.toUpperCase();
    search(0)
}
const searchByAD = () => {
    input = document.getElementById("sba");
    filter = input.value.toUpperCase();
    search(1);
}

const search = (index) => {
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[index];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


user_tasks = JSON.parse(localStorage.getItem('User_tasks'));


var myHeaders = new Headers();
myHeaders.append("X-STAFF", localStorage.getItem('User_token'));
myHeaders.append("X-TASK", user_tasks[0].task_id);

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};
fetch(HOST + "staff/task-details/", requestOptions)
    .then(response => response.json())
    .then(result => {
        return console.log(result);
    })
    .catch(error => console.log('error', error));


