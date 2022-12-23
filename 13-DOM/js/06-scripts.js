const encabezado=document.querySelector('.contenido-hero h1').textContent
console.log(encabezado)

// console.log(encabezado.innerText)//si en css visibility:hiden; no lo va encontrar 
// console.log(encabezado.textContent)// si lo va encontrar
// console.log(encabezado.innerHTML) //se trae el html


// cambiando el contenido del html

const nuevoHeading='Nuevo Heading'
document.querySelector('.contenido-hero h1').textContent = nuevoHeading
