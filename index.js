function addClass(x) {
    x.classList.toggle("change"); // para agregar la clase 'change' al elemento que venga por parámetro
}

function addCircles(){
    let listCircules=['Primero','Segundo','Tercero','Cuarto','Quinto','Sexto','Séptimo','Octavo','Noveno'];
    let container=document.getElementById('container');
    listCircules.forEach(circleName=>{
        container.insertAdjacentHTML('beforeend', `<div><p>${circleName}</p><button type="button">Eliminar</button></div>`)
    })
}

addCircles();

//se agrega el evento para borrar cada circulo
const buttonsCollection=document.getElementsByTagName('button');
const listButtons=Array.from(buttonsCollection);  //transforma htmlList a list 

listButtons.forEach(item=>{
    item.addEventListener('click',()=>{
        item.parentNode.remove();
    })
})