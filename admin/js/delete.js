
function del(id) {
    localStorage.removeItem(`phone_${id}`)
    localStorage.removeItem(`smartphone_${id}`)
    
    if (localStorage.length === 1) {
      localStorage.removeItem('id')
    }

    show()
}
