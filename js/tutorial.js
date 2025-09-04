function showImages(type) {
  const addImages = document.getElementById('add-images');
  const deleteImages = document.getElementById('delete-images');
  const btnAdd = document.getElementById('btn-add');
  const btnDelete = document.getElementById('btn-delete');

  if (type === 'add') {
    addImages.style.display = 'flex';
    deleteImages.style.display = 'none';
    btnAdd.classList.add('active');
    btnDelete.classList.remove('active');
  } else if (type === 'delete') {
    addImages.style.display = 'none';
    deleteImages.style.display = 'flex';
    btnAdd.classList.remove('active');
    btnDelete.classList.add('active');
  }
}