const nodes = document.querySelectorAll('.node');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalText = document.getElementById('modal-text');
const closeBtn = document.getElementById('close');

nodes.forEach(node => {
  node.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = node.getAttribute('data-img');
    modalText.textContent = node.getAttribute('data-reason');
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

