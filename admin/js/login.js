document.getElementById('check').onclick = function(){

    let login = document.getElementById('login').value
    let password = document.getElementById('password').value

    if(login == "admin" && password == 12345){
        localStorage.setItem('admin', 'loged')
        location.href = 'admin.html'
    }
    else{
        alert("It is a wrong login or password")
    }


}