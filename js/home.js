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
var myHeaders = new Headers();
myHeaders.append("X-AUTH", "0ac6859b-8fa9-4d7a-b24e-61e4a42b6079");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
};

fetch("https://finhelp.herokuapp.com/register/get-documents/", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));