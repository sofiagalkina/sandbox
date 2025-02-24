// target insert button 
document.getElementById('addPizza').addEventListener('click', function () {


    let pizzaForm = document.getElementById('pizzaForm');
    let newPizza = document.createElement("div");
    newPizza.classList.add("pizza");
    newPizza.innerHTML = `
    <label>Size (in inches): <input type="number" class="size" value="12"></label>
            <label>Price ($): <input type="number" class="price" value="10"></label>
    
    `;

    getPrices();
    getSizes();
    pizzaForm.appendChild(newPizza);
    calcBest()

})

function getPrices() {
const newDiv = document.createElement("span");

let prices = document.querySelectorAll(".price");


newDiv.textContent = "Prices: " + [...prices].map(price => price.value).join(", ");
pizzaForm.appendChild(newDiv);
}


function getSizes() {
    const newDiv2 = document.createElement("span");
    
    let sizes = document.querySelectorAll(".size");
  
    newDiv2.textContent = " Sizes: " + [...sizes].map(size => size.value).join(" ,");

    pizzaForm.appendChild(newDiv2)
    }


    function calcBest(prices, sizes){

     


    }