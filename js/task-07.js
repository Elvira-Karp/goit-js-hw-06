const inputChange = document.querySelector('input#font-size-control')
const abracadabra = document.querySelector('span#text')
abracadabra.style.fontSize = `${inputChange.value }px`

inputChange.addEventListener('input', e => {
    abracadabra.style.fontSize = `${e.target.value }px`
})