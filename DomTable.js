var selectedRow = null;

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    afterCler();
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData['fullname'] = document.getElementById('fullname').value;
    formData['Email'] = document.getElementById('Email').value;
    formData['Age'] = document.getElementById('Age').value;
    formData['password'] = document.getElementById('Password').value;

    formData['gender'] = gender();
    formData['subscribe'] = subscribe();

    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById('storeList').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);



    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Email;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Age;

    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gender;

    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.subscribe;

    var cell5 = newRow.insertCell(5);
    cell5.innerHTML = data.subscribe;

    var cell6 = newRow.insertCell(6);
    cell6.innerHTML = ` <button class="delete" onclick='onEdit(this)' > Edit </button> 
                         <button class='Edit'  onclick='onDelete(this)'> delete </button> `

}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullname').value = selectedRow.cells[0].innerHTML;
    document.getElementById('Email').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Age').value = selectedRow.cells[2].innerHTML;
    let value = selectedRow.cells[3].innerHTML;
    resetradio(value)
    let val = selectedRow.cells[4].innerHTML;
    resetcheckbox(val)
    document.getElementById('Password').value = selectedRow.cells[5].innerHTML;



}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullname;
    selectedRow.cells[1].innerHTML = formData.Email;
    selectedRow.cells[2].innerHTML = formData.Age;
    selectedRow.cells[3].innerHTML = gender();
    selectedRow.cells[4].innerHTML = subscribe();

    selectedRow.cells[2].innerHTML = formData.password;
}








// function for delete row 

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
        afterCler();
    }
}



// getting gender value 

function gender() {

    let type = document.getElementsByName('gender')

    if (type[0].checked == true) {
        return 'male'
    } else if (type[1].checked == true) {
        return "female"
    } else if (type[2].checked == true) {
        return "other"
    } else {
        return "";
    }



}


// getting checkbok value 


function subscribe() {

    let sub = document.getElementById('subscribe')

    if (sub.checked == true) {
        return "yes"
    } else {
        return "no"
    }
}



// for clear form  input Data

function afterCler() {

    document.getElementById('fullname').value = "";
    document.getElementById('Email').value = "";
    document.getElementById('Age').value = "";
    document.getElementById('Password').value = "";

    let x = document.getElementsByName('gender')
    if (x[0].checked === true)
        x[0].checked = false;
    else if (x[1].checked === true)
        x[1].checked = false;


    let y = document.getElementById('subscribe');
    y.checked = false;
}









function resetradio(x) {

    if (x == 'female') {
        document.getElementById('inlineCheckbox1').checked = 'true';
    } else if (x == 'male') {
        document.getElementById('inlineCheckbox2').checked = 'true';
    } else if (x == 'other') {
        document.getElementById("inlineCheckbox3").checked == "true";
    }
}

function resetcheckbox(x) {
    if (x === 'yes') {
        document.getElementById('subscribe').checked = true;
    } else {
        document.getElementById('subscribe').checked = false;
    }
}