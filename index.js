
function getAndUpdate() {
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))

    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    update();
}

function update() {

    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))

    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }

    // Populate the table 
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td><button class="btn-primary" onclick="deleted(${index})">Delete</button></td>
        </tr>`;
    });
    tableBody.innerHTML = str;
}

function deleted(itemIndex) {
    if (confirm("Do you want to delete")) {


        //console.log("Delete",itemIndex);
        itemJsonArrayStr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        //delete itemIndex element from the array
        itemJsonArray.splice(itemIndex, 1);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
        update();
    }

}

function clearStorage() {
    if (confirm("Do you really want to clear")) {

        //console.log('clearing');
        localStorage.clear();
        update();
    }
}

function alrt() {
    tit = document.getElementById('title').value.length;
    desc = document.getElementById('description').value.length;
    if ((tit & desc) == 0) {
        alert("Please fills all fileds");
    }
    else {
        alert("Your item successfully added!");
    }
}

// function checkfield(additem){
//     tit = document.getElementById('title').value.length;
//     desc = document.getElementById('description').value.length;
//     if ((tit & desc) == 0 ) 
//     {
//         alert("Please fills all fileds");   
//     }
//     else
//     {
//         additem.addEventListener("click", getAndUpdate);
//     }
// }

add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
//add.checkfield(add);
update();




