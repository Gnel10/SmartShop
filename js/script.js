let basket = document.getElementById('basket')
let basketItems = document.getElementById('basketItems')
let basketItem = document.getElementsByClassName('basketItem')
let card = document.getElementsByClassName('card')
let items = document.getElementsByClassName('items')[0]
let span = document.getElementsByTagName(`span`)[0]
let totalBox = document.getElementById('total')
totalBox.innerHTML = 'Card is empty'
let count = 1
let sum = 0
span.innerHTML = 0


for (let i = 1; i <= localStorage.length; i++) {

  let item = JSON.parse(localStorage.getItem(`phone_${i}`))

  if(item != null){
    items.innerHTML += `
      <div class="card" style="width: 16rem;">
        <img class="card-img-top" src="./photo/${item.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.price}</p>
          <a href="#" class="btn btn-primary" id="btn" onclick="add(${item.id},this)">BUY NOW</a>
        </div>
      </div>
    `
  }

}

function showCard() {
  basket.classList.toggle('show')
}

function add(id, item) {

  let price = item.previousElementSibling.innerText
  let title = item.parentElement.firstElementChild.innerText
  let image = item.parentElement.previousElementSibling.getAttribute("src")

  if(localStorage.getItem(`smartphone_${id}`) != null){
    let product = JSON.parse(localStorage.getItem(`smartphone_${id}`))
    product.price = price * product.count
    product.count++
    localStorage.setItem(`smartphone_${id}`, JSON.stringify(product))
    show()
    return
  }

  let newTitle = {
    id: id,
    title: title,
    price: price,
    image: image,
    count: count

  }

  localStorage.setItem(`smartphone_${id}`, JSON.stringify(newTitle))
  localStorage.setItem(`id`, id)

  show()
}

function summ() {
  for (let j = 0; j < localStorage.length - 1; j++) {

    localStorage.getItem()
  }

}

function show() {
  let sum = 0
  basketItems.innerHTML = ''
  span.innerHTML = 0
  totalBox.innerHTML = `Card is empty`

  for (let i = 0; i < card.length; i++) {
    let product = JSON.parse(localStorage.getItem(`smartphone_${i+1}`))
    if (product != null) {
      sum += +product.price
      totalBox.innerHTML = `Total: ${sum} $`
      
      basketItems.innerHTML += `
      <div class="basketItem">
      <div class="basketItemImg" style="background-image: url(${product.image});"></div>
      <p class="xxx">x${product.count}</p>
      <div class="basketItemInfo">
      <p>${product.price}</p>
      <p>${product.title}</p>
      </div>
      <i class="fas fa-trash" onclick="del(${product.id}, this)"></i> 
      </div>
      `
      span.innerHTML = basketItem.length
    }
  }


}

function del(id, item) {

  let product = JSON.parse(localStorage.getItem(`smartphone_${id}`))

  sum -= product.price

  localStorage.removeItem(`smartphone_${id}`)
  item.parentElement.remove()

  if (localStorage.length === 1) {
    localStorage.removeItem('id')
  }

  show()
}
show()