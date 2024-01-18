document.addEventListener('DOMContentLoaded', function () {
    let buttonAdd = document.querySelector('.js-addBtn');
    let allTasks = document.querySelector('.tasks-list');

    buttonAdd.addEventListener('click', function () { 
        let inputFieldValue = document.querySelector('input').value;
        let onlySpacesRegex = /^\s*$/; // Строка состоит только из пробелов

        if (!onlySpacesRegex.test(inputFieldValue)) {
            let newTask = `<div class="task"><img src="img/check.svg" alt=""><div class="content"><p></p></div><img src="img/trash.svg" alt=""></div>`;
            let task = inputFieldValue;
            task.querySelector('p').text content = task;
            document.querySelector('input').value = ''; // Очистить поле ввода
        }
    });
});
