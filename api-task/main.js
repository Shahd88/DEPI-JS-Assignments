let card = document.getElementById("card");

let fakeData = fetch("https://fakestoreapi.com/products").then((data) => {
    return data.json();

}).then((data) => {
    showData(data);
})

function showData(data) {
    data.forEach(i => {
        card.innerHTML += `
<div class="card m-4" style="width: 18rem;">
  <img src="${i.image}" class="card-img-top" alt="...">
  <div class="card-body p-4">
    <h3 class="card-title">${i.title}</h3>
    <p class="card-text">${i.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${i.category}</li>
</ul>
</div>
    `
    });
}


showData();
