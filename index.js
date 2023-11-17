document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('Input').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    var Input = document.getElementById('Input');
    var List = document.getElementById('List');

    if (Input.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    var li = document.createElement('li');
    li.innerHTML =`
    <input type="checkbox" class="taskCheckbox">
    ${Input.value}
    <span class="delete" onclick="deleteTask(this)">X</span>`;
    List.appendChild(li);

    Input.value = '';
}

function deleteTask(element) {
    element.parentNode.remove();
}
function deleteCheckedTasks() {
    var checkboxes = document.getElementsByClassName('taskCheckbox');
    var List = document.getElementById('List');

    for (var i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].checked) {
            checkboxes[i].parentNode.remove();
        }
    }
}