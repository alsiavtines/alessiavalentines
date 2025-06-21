
const nodes = document.querySelectorAll('.node');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalText = document.getElementById('modal-text');

nodes.forEach(node => {
  node.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = node.getAttribute('data-img');
    modalText.textContent = node.getAttribute('data-reason');
  });
});

// Clicking anywhere on the modal closes it
modal.addEventListener('click', () => {
  modal.style.display = 'none';
});

