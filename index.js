// -find menu container and create Element
// -fetch request 
// -iterate over DB to print out all burgers
// -append to container 


document.addEventListener("DOMContentLoaded", () => {
  
  let menu = document.getElementById('burger-menu')
  let orderList = document.getElementById('order-list')
  
  function getBurgers(){
    fetch('http://localhost:3000/burgers')
    .then(function(response) {
      return response.json()
    })
    .then(function(burgers) {
      console.log(burgers);
      burgers.forEach(function (burger) {
        appendBurgers(burger)
      });
    })
  }
  
  getBurgers()
  
  function appendBurgers(burger) {
    let ul = document.createElement('ul')
    ul.innerHTML = `
    <div class="burger">
    <h3 class="burger_title">${burger.name}</h3>
    <img src=${burger.image}>
    <p class="burger_description">
    ${burger.description}
    </p>
    <button class="button">Add to Order</button>
    </div>
    `
    menu.append(ul)
  }
  
  
  // -find add button 
  // -add click listener event
  // -find burger name (e.target.name?)
  // -find ordersList
  // -append name to ordersList container 
  let addToOrder = document.getElementsByClassName('button')
  document.addEventListener("click", function(e) {
    if (e.target.textContent === "Add to Order")
    { console.log("target: ", e.target)
  let li = document.createElement("li")
  let burgerName = e.target.parentNode.getElementsByClassName('burger_title')[0].textContent
  li.innerText = burgerName
    orderList.append(li)
  } 
})

//find custom burger form
//add click event delegation
//add preventDefault() 
//get values from the form fields
//use values to create new burger object
//append object to menu as a new li

customForm = document.getElementById('custom-burger')
  document.addEventListener("submit", function(e) {
    if (e.target.textContent === "Submit Order") 
        console.log("target: ", e.target)
       let name = e.target.name.value
       let image = e.target.url.value
       let description = e.target.description.value
        e.preventDefault()

      let burger = {name: name, image: image, description: description}
    
      customForm.reset()
      createBurger(burger)
    })
   
   function createBurger(burger){
   return fetch('http://localhost:3000/burgers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accepts': 'application/json',
    },
    body: JSON.stringify(burger)
    })
    .then(function(response) {
      return response.json()
    })
    .then(function(burger) {
      console.log(burger);
        appendBurgers(burger)
      })
    }







})
