window.addEventListener('load', (event) => {

    // Slow Page Reveal
    document.querySelector('html').style.opacity = 1
    let imgPaddingTop = document.querySelector('header').getBoundingClientRect().bottom
    let windowVerticalHeight = document.querySelector('html').getBoundingClientRect().bottom

    function slideImage(length) {
        document.querySelector('.splash').style.transform = 'translatey(' + length + 'px)'
    }


    // Auto Position Image
    slideImage(imgPaddingTop)


    // Close Map Button - Event
    let cerrarBtn = document.querySelector('.cerrar')
    cerrarBtn.addEventListener('click', () => {
        document.querySelector('.ubicacion-mapa').remove()
        document.querySelector('.cerrar').remove()
    })

    // Esconder imagen - Event
    let verProgramaBtn = document.querySelector('#ver-programa')
    verProgramaBtn.addEventListener('click', (ele) => {

        slideImage(windowVerticalHeight)

        setTimeout(function () {
            document.querySelector('.ver-programa').remove()
        }, 500)
    })

})