function showProjectImages(type) {
  const addProjectImages = document.getElementById('add-project-images');
  const deleteProjectImages = document.getElementById('delete-project-images');

  const btnAddProject = document.getElementById('btn-add-project');
  const btnDeleteProject = document.getElementById('btn-delete-project');

  if (type === 'add-project') {
    addProjectImages.style.display = 'flex';
    deleteProjectImages.style.display = 'none';
    btnAddProject.classList.add('active');
    btnDeleteProject.classList.remove('active');
  } else if (type === 'delete-project') {
    addProjectImages.style.display = 'none';
    deleteProjectImages.style.display = 'flex';
    btnAddProject.classList.remove('active');
    btnDeleteProject.classList.add('active');
  }
}

function showTaskImages(type) {
  const addTaskImages = document.getElementById('add-task-images');
  const deleteTaskImages = document.getElementById('delete-task-images');
  const sortTaskImages = document.getElementById('sort-task-images');
  const searchTaskImages = document.getElementById('search-task-images');

  const btnAddTask = document.getElementById('btn-add-task');
  const btnDeleteTask = document.getElementById('btn-delete-task');
  const btnSortTask = document.getElementById('btn-sort-task');
  const btnSearchTask = document.getElementById('btn-search-task');

  if (type === 'add-task') {
    addTaskImages.style.display = 'flex';
    deleteTaskImages.style.display = 'none';
    sortTaskImages.style.display = 'none';
    searchTaskImages.style.display = 'none';
    btnAddTask.classList.add('active');
    btnDeleteTask.classList.remove('active');
    btnSortTask.classList.remove('active');
    btnSearchTask.classList.remove('active');
  } else if (type === 'delete-task') {
    addTaskImages.style.display = 'none';
    deleteTaskImages.style.display = 'flex';
    sortTaskImages.style.display = 'none';
    searchTaskImages.style.display = 'none';
    btnAddTask.classList.remove('active');
    btnDeleteTask.classList.add('active');
    btnSortTask.classList.remove('active');
    btnSearchTask.classList.remove('active');
  } else if (type === 'sort-task') {
    addTaskImages.style.display = 'none';
    deleteTaskImages.style.display = 'none';
    sortTaskImages.style.display = 'flex';
    searchTaskImages.style.display = 'none';
    btnAddTask.classList.remove('active');
    btnDeleteTask.classList.remove('active');
    btnSortTask.classList.add('active');
    btnSearchTask.classList.remove('active');
  } else if (type === 'search-task') {
    addTaskImages.style.display = 'none';
    deleteTaskImages.style.display = 'none';
    sortTaskImages.style.display = 'none';
    searchTaskImages.style.display = 'flex';
    btnAddTask.classList.remove('active');
    btnDeleteTask.classList.remove('active');
    btnSortTask.classList.remove('active');
    btnSearchTask.classList.add('active');
  }
}