if(localStorage.getItem('admin') === null){
    location.href = 'login.html'
}

function show(){
    let tbody = document.getElementsByTagName('tbody')[0]
tbody.innerHTML = ''
for(let i = 0; i <= localStorage.length; i++){
    let product = JSON.parse(localStorage.getItem(`phone_${i}`))

    if(product != null){
        tbody.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td><img src="./photo/${product.image}"></td>
                <td>
                    <div>
                        <a href="edit.html#${product.id}" class="edit">Edit</a>
                        <a href="#" class="delete" onclick="del(${product.id})">Delete</a>
                    </div>
                </td>
            </tr>
        `
    }
   
}
}

show()