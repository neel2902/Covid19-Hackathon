const HOST = "https://finhelp-api.herokuapp.com/"
user_tasks = JSON.parse(localStorage.getItem('User_tasks'));
let doclink = "";
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
        doclink = result.document.document;
        $("#tottax").text(result.finance.total_tax);
        $("#txpay").text(result.finance.tax_paid);
        $("#tinc").text(result.finance.total_income);
        $("#nloss").text(result.finance.loss);
        $("#rloss").text(result.finance.reported_loss);
        $("#dinc").text(result.finance.deemed_income);
        console.log(result);
    })
    .catch(error => console.log('error', error));


document.getElementById('approve').addEventListener('click', function () {
    var raw = "{\n	\"status\":\"Approved\"\n}";
    var myHeaders2 = new Headers();
    myHeaders2.append('Content-Type', 'application/json');
    myHeaders2.append("X-STAFF", localStorage.getItem('User_token'));
    myHeaders2.append("X-TASK", user_tasks[0].task_id);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders2,
        body: raw,
        redirect: 'follow'
    };

    fetch(HOST + 'staff/task-details/', requestOptions)
        .then(response => response.text())
        .then(result => {
            alert("Transaction is approved!");
            window.location.href = "home.html"
        })
        .catch(error => console.log('error', error));
})

document.getElementById('reject').addEventListener('click', function () {
    var raw = "{\n	\"status\":\"Rejected\"\n}";
    var myHeaders3 = new Headers();
    myHeaders3.append('Content-Type', 'application/json');
    myHeaders3.append("X-STAFF", localStorage.getItem('User_token'));
    myHeaders3.append("X-TASK", user_tasks[0].task_id);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders3,
        body: raw,
        redirect: 'follow'
    };

    fetch(HOST + 'staff/task-details/', requestOptions)
        .then(response => response.text())
        .then(result => {
            alert("Transaction is rejected");
            window.location.href = "home.html"
        })
        .catch(error => alert("Some error occurred"));
})

const Open = () => {
    window.open(doclink);
}