const toDoList = [];
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');

const removeTask = (e) => {
    //e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1); //usuwanie z tablicy elementu z danym indexem, wymagane, żeby tablica miała zawsze aktualną zawartość, ale jest problem z indexami, bo one się nie aktualizuja po usunięciu - data-key nie odpowiada indexowi, potrzebna jest więc znów stworzona nowa tablica
    taskNumber.textContent = listItems.length; //zliczanie wpisanych zadań
    //twrzenie nowej tablicy
    renderList();
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

    //dodanie tablicy, żeby przechowywała nowe elementy, uwaga jednak po usunięciu buttonem "usuń" tablica nadal będzie przechowywała elementy
    toDoList.push(newTask);

    //nadawanie id dla elementu w tablicy żeby poznac jego index
    renderList

    //liczenie elementów w liście zadań
   //const liItems = document.querySelectorAll('li.task').length;
   //taskNumber.textContent = liItems.length;
   taskNumber.textContent = listItems.length;

   //odwołanie do buttona w konkretnym elemencie, który został stworzony
   newTask.querySelector('button').addEventListener('click', removeTask);
}

const renderList = () => {
    ul.textContent = ""; //czyszczenie listy i generowanie jej od nowa za każdym razem gdy coś się dodaje
     toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key; //dodanie atrybutu z indeksem tablicy
        ul.appendChild(toDoElement)
     });
}

form.addEventListener('submit', addTask);
