const input = document.getElementById("inputNewTask");
const addButton = document.getElementById("addTaskButton");
const toDoList = document.getElementById("toDoList");
const filter = document.getElementById("filter");
addButton.addEventListener('click', (e)=> {
    const inputText = input.value.trim(); //обрезаем пробелы по бокам и считываем информацию из input

    if (inputText) {
        const newTask = document.createElement('li');// здесь создаем новый элемент

        newTask.textContent = inputText; //добавляю введеный текст

        const deleteButton = document.createElement('button'); //создаем кнопку удаления
        deleteButton.textContent = 'delete task';// добавляю текст кнопки
        deleteButton.classList.add('deleteButton');

        deleteButton.addEventListener('click', (e)=>  {
            newTask.remove();
        }) // вешаем событие

        newTask.addEventListener('click', (e)=>  {

            if (newTask.style.background === 'white') {
                newTask.style.background = 'red';
            } else {
                newTask.style.background = 'white';
            }
        })//вешаем событие меняющие цвет, по умолчанию стоит белый, если кликаем меняется на красный


        newTask.appendChild(deleteButton); // добавил кнопку удаления в элемент
        toDoList.appendChild(newTask); //добавил задачу в список

        input.value = ''; //очищаем полле ввода после добавления
    }
});

//метод фильтра не осилил