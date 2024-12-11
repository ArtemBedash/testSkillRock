const addButton = document.getElementById("addUser");
const userList = document.getElementById("userList");
const loading = document.getElementById("loading");


addButton.addEventListener("click", async (e) => {
    await fetchRandomUsers() //вызываю функцию при клике мыши на кнопку
});

async function fetchRandomUsers() {

    loading.textContent = "Loading..."; //отображаю загрузку
    const link = 'https://randomuser.me/api/?results=10';// линк выношу отдельно для удобства
    try {
        const response = await fetch(link)
        if (!response.ok) {
            throw new Error("there is a mistake");//если ответ не положительный кидаю ошибку
        }


        const data = await response.json();//преобразую в текстовый формат
        showUsers(data.results) //вызываю функцию отображения юзеров передавая массив данных
        console.log(data.results)//проверяю в консоли что массив не пустой

    } catch (error) {
        console.log(error)
        userList.textContent = "Error";
    } finally {
        loading.textContent = "";//в любом случае убираю надпись загрузки

    }
};

function showUsers(users) {
    userList.textContent = ""; //очищаю страницу перед новым запросом

    users.forEach((user) => {//для каждого юзера создаю элемент списка с Именем и элемент с фото
        const li = document.createElement("li");
        const img = document.createElement("img");
        li.textContent = `${user.name.first} ${user.name.last} e-mail: ${user.email}`
        img.src = `${user.picture.large}`
        userList.appendChild(li);
        userList.appendChild(img);
    })
};
