document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    const addTask = (taskText) => {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        todoItem.appendChild(checkbox);

        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;
        todoItem.appendChild(taskTextElement);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        todoItem.appendChild(deleteButton);

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                taskTextElement.style.textDecoration = 'line-through';
            } else {
                taskTextElement.style.textDecoration = 'none';
            }
        });

        deleteButton.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });

        todoList.appendChild(todoItem);
    };

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            todoInput.value = '';
        }
    });
});
