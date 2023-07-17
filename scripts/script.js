function menu() {
    let menu_mobile = document.querySelector('#nav-bar-mobile')

    menu_mobile.addEventListener('click', () => {
        let menu_open = document.querySelector('#menu-mobile-open')

        if (menu_open.classList.contains('off')) {
            menu_open.classList.remove('off')
        } else {
            menu_open.classList.add('off')
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

