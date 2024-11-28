document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      return;
    }
  
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
  
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Удалить';
    removeButton.classList.add('remove');
    removeButton.addEventListener('click', function() {
      taskList.removeChild(newTask);
    });
  
    newTask.appendChild(removeButton);
    newTask.addEventListener('click', function() {
      newTask.classList.toggle('completed');
    });
  
    taskList.appendChild(newTask);
    taskInput.value = ''; 
  });
  