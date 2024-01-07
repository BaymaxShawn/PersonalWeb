const hamburButton = document.getElementById('hambur')
const navList = document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show')
}

hamburButton.addEventListener('click',toggleButton)