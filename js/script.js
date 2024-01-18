function addTextToCrossOut(taskElement) {
    let taskContent = taskElement.querySelector('.content p');
    if (taskContent.innerHTML.startsWith("<del>")) {
        taskContent.textContent = taskContent.textContent;
    } else {
        taskContent.innerHTML = "<del>" + taskContent.textContent + "</del>";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let buttonAdd = document.querySelector('.js-addBtn');
    let allTasks = document.querySelector('.tasks-list'); // check trash

    buttonAdd.addEventListener('click', function () {
        let inputFieldValue = document.querySelector('input').value;
        let onlySpacesRegex = /^\s*$/; // Строка состоит только из пробелов

        if (!onlySpacesRegex.test(inputFieldValue)) {
            let newTask = document.createElement('div');
            newTask.className = 'task';
            newTask.innerHTML = `
                <img src="img/check.svg" class="check">
                <div class="content">
                    <p></p>
                </div>
                <img src="img/trash.svg" class="trash">
            `;

            newTask.querySelector('.content p').textContent = inputFieldValue;

            newTask.querySelector('.check').addEventListener('click', function () {
                addTextToCrossOut(newTask);
            });

            newTask.querySelector('.trash').addEventListener('click', function () {
                newTask.remove();
            });

            document.querySelector('input').value = ''; // Очистить поле ввода
            allTasks.appendChild(newTask); // Добавить новую задачу к списку
        }
    });
});
