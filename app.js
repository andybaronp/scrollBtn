window.addEventListener('DOMContentLoaded', () => {

    const scrollBtn = document.querySelector('.scroll-top-btn')

    window.addEventListener('scroll', e => {

        // propieda scroll
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        if (scrollTop > 600) {
            scrollBtn.classList.remove('hidden')
        } else {
            scrollBtn.classList.add('hidden')

        }

    })
    scrollBtn.addEventListener('click', e => {

        // scrollTo configuración para donde sube
        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
    })
})