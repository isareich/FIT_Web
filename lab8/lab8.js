const taskDivs = document.querySelectorAll('.task-div');

taskDivs.forEach((taskDiv) => {
  const text = taskDiv.textContent;

  if (text.length > 10) {
    taskDiv.textContent = text.substring(0, 10) + "...";
  }
});

const table = document.querySelector('table');

table.addEventListener('click', (event) => {
  if (event.target.tagName === 'TD') {
    const cell = event.target;
    const input = document.createElement('input');
    input.value = cell.textContent;

    cell.textContent = '';
    cell.appendChild(input);

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Зберегти';
    saveButton.addEventListener('click', () => {
      cell.textContent = input.value;
      input.remove();
    });

    cell.appendChild(saveButton);
  }
});