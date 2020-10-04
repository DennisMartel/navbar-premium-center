const menu = document.getElementById('menu')
const close = document.getElementById('close')
const sidebar = document.getElementById('sidebar')

menu.addEventListener('click', e => {
    e.preventDefault()

    if(sidebar) {
        sidebar.style.display = 'block'
    }
})

close.addEventListener('click', e => {
    e.preventDefault()
    
    if(sidebar) {
        sidebar.style.display = 'none'
    }
})