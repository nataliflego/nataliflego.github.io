$(document).ready(function () {
    $('.submit').click(function (event) {
        console.log('Clicked')

        var email = $('.email').val()
        var ime = $('.ime').val()
        var poruka = $('.poruka').val()
        var statusElm = $('.status')
        statusElm.empty()

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email prihvaćen</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email nije prihvaćen</div>')
        }

        if (ime.length >= 2) {
            statusElm.append('<div>Ime prihvaćeno</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Ime nije prihvaćeno</div>')
        }

        if (poruka.length >= 5) {
            statusElm.append('<div>Poruka prihvaćena</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Poruka nije prihvaćena</div>')
        }
    })
})