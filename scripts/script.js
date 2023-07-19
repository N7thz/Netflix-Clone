function menu() {
    let btnNav = document.querySelector('#nav-bar-mobile') 

    btnNav.addEventListener('click', () => {
        let menuOpen = document.querySelector('#menu-mobile-open')

        if (menuOpen.classList.contains('open')) {
            (menuOpen.classList.remove('open'))
        } else {
            (menuOpen.classList.add('open'))
        }
    }) 
}

function perfil() {
    let user = document.getElementById('user')

    user.addEventListener('click', () => {
        let user_open = document.getElementById('perfil')

        if (user_open.classList.contains('open')) {
            user_open.classList.remove('open')
        } else {
            user_open.classList.add('open')
        }
    })
}

menu() // Faz aparecer o menu
perfil() // Faz aparecer o quadro do perfil

