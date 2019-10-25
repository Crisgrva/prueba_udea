const btnToggle = document.querySelector('.navbar--menu__btn')

btnToggle.addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('active')
})