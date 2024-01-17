document.addEventListener('DOMContentLoaded', function () {
    let buttonAdd = document.querySelector('.js-addBtn');
    let allTasks = document.querySelector('.tasks-list');

    buttonAdd.addEventListener('click', function () {
        let inputFieldValue = document.querySelector('input').value;
        let newTask = `<div class="task"><img src="img/check.svg" alt=""><div class="content"><p>${inputFieldValue}</p></div><img src="img/trash.svg" alt=""></div>`;
        allTasks.innerHTML += newTask;
        document.querySelector('input').value = ''; // Очистить поле ввода
    });
});