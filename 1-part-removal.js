
//USUWANIE
const removeTask = (e) => {
    //console.log(e.target.textContent) //pokazywanie tego, co kliknęliśmy
    //e.target.remove(); //usuwanie li po kliknięciu w dany element
   // e.target.parentNode.remove(); //usuwanie węzła, który jest rodzicem,w tym przypadku całego li
//    e.target.parentNode.style.textDecoration = 'line-through'; //przekreślanie po kliknięciu
//    e.target.remove(); //usuwanie bottona po kliknięciu
const index = e.target.dataset.key; //pobieranie atrybutu z data-key z html
document.querySelector(`li[data-key="${index}"]`).remove(); //usuwanie niezależne od układu DOM / parentNode

}

document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener('click', removeTask));
