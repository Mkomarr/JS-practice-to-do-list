const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');

const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = listItems.length; //zliczanie wpisanych zadań
}

const addTask = (e) => {
    e.preventDefault(); //wyłączanie przeładowania strony
    const titleTask = input.value;  //pobieranie wpisanej zawartości z inputu
    
    //dodawanie nowego zadania 
    if(titleTask === "") return; //zastrzeżenie żeby nie było puste
    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerHTML = titleTask + '<button>Usuń</button>';
    ul.appendChild(newTask);
    input.value = ''; //czyszczenie input po dodaniu taska

    //liczenie elementów w liście zadań
   //const liItems = document.querySelectorAll('li.task').length;
   //taskNumber.textContent = liItems.length;
   taskNumber.textContent = listItems.length;

   //odwołanie do buttona w konkretnym elemencie, który został stworzony
   newTask.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener('submit', addTask);
