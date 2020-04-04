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
// Search ends here
////////////////////////////////////////////////////////////////////////
const person = (serialno, name, aadhar, sector, amount, application_link) => {
    const table_row = `
    <tr>
    <th scope="row">${serialno}</th>
    <td>${name}</td>
    <td>${aadhar}</td>
    <td>${sector}</td>
    <td class="text-center">${amount}/-</td>
    <td><a href="application.html">${application_link}</a></td>
    </tr>
    `
    return table_row;
}

const populate = () => {
    tbody = $("#tbody");
    let person_i = person(1, 2, 3, 4, 5, 6);
    tbody.append(person_i);
    tbody.append(person_i);
    tbody.append(person_i);
}

populate();

var myHeaders = new Headers();
myHeaders.append("X-AUTH", "0ac6859b-8fa9-4d7a-b24e-61e4a42b6079");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
};

fetch("https://finhelp-api.herokuapp.com/register/get-documents", requestOptions)
    .then((response) => {
        return response.json();
    })
    .then(result => console.log(result))
    .catch(error => console.log('error', error));