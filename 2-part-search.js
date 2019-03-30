const arr = [34,219,109,2934,12,10,29];

//filter
const oddNumbers = arr.filter(number => number%2)
const evenNumbers = arr.filter(number => !(number%2));
const numbersBiggerThan100 = arr.filter(number => number > 100);

//map
const double = arr.map(number => number * 2);
const people = arr.map(number => number + ' osób');

//forEach
arr.forEach(number => number * 2); //nie działa
arr.forEach((number, index) => arr[index] = number * 2); //działa

//wyszukiwarka
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElements]; //zamiana listy węzłów, czyli elementów li na tablicę
    //pokazanie ile elementów pasuje do tego co jest wpisane w input
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
    //kasowanie ul i pokazywanie tylko pasujących - dodawanie do ul
    ul.textContent = ''; 
    tasks.forEach(li => ul.appendChild(li));
}

input.addEventListener('input', searchTask)

