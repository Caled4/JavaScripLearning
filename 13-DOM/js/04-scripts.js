// querySelector facilita la seleccion de elmento por id y clase
const card =document.querySelector('.card')
console.log(card)

// podemos tener selectores especificos como en css
const info =document.querySelector('.premium .info')
console.log(info)

//seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)')
console.log(segundoCard)
// seleccionar el formulario
const formulario = document.querySelectorAll('.contenido-hero #formulario')
console.log(formulario)
// seleccionar elementos HTML
const navegacion = document.querySelector('nav')
console.log(navegacion)
