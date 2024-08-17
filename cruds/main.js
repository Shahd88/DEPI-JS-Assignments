let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");



// console.log(title,price,taxes,ads,discount,total,count,category,submit);
//get total
function getTotal() {
    if (price.value != "") {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.backgroundColor = "rgb(104, 56, 104)";
    }
    else {
        total.innerHTML = "";
        total.style.backgroundColor = "rgb(117, 82, 117)"
    }
}

//create operation

if (localStorage.product != null) {
    proArray = JSON.parse(localStorage.product)
}
else {
    proArray = [];
}

submit.onclick = function () {
    let newPro = {
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value.toLowerCase(),
    }
    
    if (title.value != '' && price.value != '' && category.value!='') {
        

    }

    //count
    if (newPro.count > 1) {
        for (let index = 0; index < newPro.count; index++) {
            proArray.push(newPro)

        }
    }
    else {
        proArray.push(newPro)
    }
    // if (id === 'create') {
        
    // }
    // else {
    //     proArray[tmp] = newPro;
    //     mood = 'create'
    //     submit.innerHTML = "Create"
        
    // }

    
    //save data in local storage
    localStorage.setItem("product", JSON.stringify(proArray))
    console.log(proArray);
    clearData()
    showData()
}


// clear inputs
function clearData() {
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    total.innerHTML = "";
    count.value = "";
    category.value = "";
}

//read

function showData() {
    let table =""
    for (let i = 0; i < proArray.length; i++) {
        table +=
    `
    <tr>
        <td>${i+1}</td>
        <td>${proArray[i].title}</td>
        <td>${proArray[i].price}</td>
        <td>${proArray[i].taxes}</td>
        <td>${proArray[i].ads}</td>
        <td>${proArray[i].discount}</td>
        <td>${proArray[i].total}</td>
        <td>${proArray[i].category}</td>
        <td><button id="update">Update</button></td>
        <td><button onclick="delData(${i})" id="delete">Delete</button></td>
    </tr>
    `
    }

    document.getElementById("tbody").innerHTML = table;

    let btnDel = document.getElementById("deleteAll");
    if (proArray.length > 0) {
        btnDel.innerHTML = `<button onclick="deleteAll()">DELETE ALL(${proArray.length})</button>`
        
    }
    else {
        btnDel.innerHTML=""
    }
}
showData()

//delete

function delData(i) {
    proArray.splice(i, 1);
    localStorage.product = JSON.stringify(proArray);
    showData();
}

//delete all
function deleteAll() {
    proArray.splice(0);
    localStorage.clear();
    showData();

} 

//search

let searchMode = 'title';
function getSearchMode(id) {
    let search = document.getElementById('search');
    if (id == 'searchTitle') {
        searchMode = "title";
    }
    else {
        searchMode = "category"
    }
    search.placeholder = 'Search By ' + searchMode;

    search.focus()
    search.value = "";
    showData();
    
}

function searchData(value) {
    let table = "";
    if (searchMode == "title") {
        for (let i = 0; i < proArray.length; i++) {
            if (proArray[i].title.includes(value.toLowerCase())) {
                table +=
                    `
                <tr>
                    <td>${i + 1}</td>
                    <td>${proArray[i].title}</td>
                    <td>${proArray[i].price}</td>
                    <td>${proArray[i].taxes}</td>
                    <td>${proArray[i].ads}</td>
                    <td>${proArray[i].discount}</td>
                    <td>${proArray[i].total}</td>
                    <td>${proArray[i].category}</td>
                    <td><button id="update">Update</button></td>
                    <td><button onclick="delData(${i})" id="delete">Delete</button></td>
                </tr>
                `
            }
        
            else {
        
                if (proArray[i].category.includes(value.toLowerCase())) {
                    table +=
                        `
                <tr>
                    <td>${i + 1}</td>
                    <td>${proArray[i].title}</td>
                    <td>${proArray[i].price}</td>
                    <td>${proArray[i].taxes}</td>
                    <td>${proArray[i].ads}</td>
                    <td>${proArray[i].discount}</td>
                    <td>${proArray[i].total}</td>
                    <td>${proArray[i].category}</td>
                    <td><button id="update">Update</button></td>
                    <td><button onclick="delData(${i})" id="delete">Delete</button></td>
                </tr>
                `
                }
            }
        }
        document.getElementById("tbody").innerHTML = table;
    }
}
