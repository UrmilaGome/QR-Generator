const form = document.querySelector('form')
const input = document.querySelector('input')
const imgsec = document.querySelector('img')
const size = document.querySelector('select')

async function getQr(e){
    e.preventDefault()
    const response = await fetch(`http://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data=${input.value}`)
    imgsec.setAttribute("src" , response.url)
    form.reset()
}

form.addEventListener('submit' , getQr)
