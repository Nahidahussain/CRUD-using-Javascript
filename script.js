// var selectedRow = null

// function onFormSubmit() {
//     if (validate()) {
//         var formData = readFormData();
//         if (selectedRow == null)
//             insertNewRecord(formData);
//         else
//             updateRecord(formData);
//         resetForm();
//     }
// }

// function readFormData() {
//     var formData = {};
//     formData["firstName"] = document.getElementById("firstName").value;
//     formData["lastName"] = document.getElementById("lastName").value;
//     formData["address"] = document.getElementById("address").value;
//     formData["city"] = document.getElementById("city").value;
//     formData["state"] = document.getElementById("state").value;
//     formData["email"] = document.getElementById("email").value;
//     formData["phone"] = document.getElementById("phone").value;
    
//     return formData;
// }

// function insertNewRecord(data) {
//     var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.firstName;
//     cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.lastName;
//     cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.address;
//     cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.city;
//     cell5 = newRow.insertCell(4);
//     cell5.innerHTML = data.state;
//     cell6 = newRow.insertCell(5);
//     cell6.innerHTML = data.email;
//     cell7 = newRow.insertCell(6);
//     cell7.innerHTML = data.phone;
//     cell7 = newRow.insertCell(7);
//     cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
//                        <a onClick="onDelete(this)">Delete</a>`;
// }

// function resetForm() {
//     document.getElementById("firstName").value = "";
//     document.getElementById("lastName").value = "";
//     document.getElementById("address").value = "";
//     document.getElementById("city").value = "";
//     document.getElementById("state").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("phone").value = "";
//     selectedRow = null;
// }

// function onEdit(td) {
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("lastNam").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("address").value = selectedRow.cells[2].innerHTML;
//     document.getElementById("city").value = selectedRow.cells[3].innerHTML;
//     document.getElementById("state").value = selectedRow.cells[4].innerHTML;
//     document.getElementById("email").value = selectedRow.cells[5].innerHTML;
//     document.getElementById("phone").value = selectedRow.cells[6].innerHTML;
// }
// function updateRecord(formData) {
//     selectedRow.cells[0].innerHTML = formData.firstName;
//     selectedRow.cells[1].innerHTML = formData.lastName;
//     selectedRow.cells[2].innerHTML = formData.address;
//     selectedRow.cells[3].innerHTML = formData.city;
//     selectedRow.cells[4].innerHTML = formData.state;
// }

// function onDelete(td) {
//     if (confirm('Are you sure to delete this record ?')) {
//         row = td.parentElement.parentElement;
//         document.getElementById("employeeList").deleteRow(row.rowIndex);
//         resetForm();
//     }
// }
// function validate() {
//     isValid = true;
//     if (document.getElementById("fullName").value == "") {
//         isValid = false;
//         document.getElementById("fullNameValidationError").classList.remove("hide");
//     } else {
//         isValid = true;
//         if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
//             document.getElementById("fullNameValidationError").classList.add("hide");
//     }
//     return isValid;
// }

var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["address"] = document.getElementById("address").value;
    formData["city"] = document.getElementById("city").value;
    formData["state"] = document.getElementById("state").value;
    formData["email"] = document.getElementById("email").value;
    formData["number"] = document.getElementById("number").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.address;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.state;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.email;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.email;
    cell7 = newRow.insertCell(7);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("address").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
    document.getElementById("state").value = selectedRow.cells[4].innerHTML;
    document.getElementById("email").value = selectedRow.cells[5].innerHTML;
    document.getElementById("number").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.address;
    selectedRow.cells[3].innerHTML = formData.city;
    selectedRow.cells[4].innerHTML = formData.state;
    selectedRow.cells[5].innerHTML = formData.email;
    selectedRow.cells[6].innerHTML = formData.email;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
   }
    return isValid;
}