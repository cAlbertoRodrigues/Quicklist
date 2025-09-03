const input = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const lista  = document.getElementById('lista'); 


function criarItem(texto) {
  const item = document.createElement('div');
  item.className = 'item';
  item.innerHTML = `
    <input type="checkbox" />
    <span class="texto"></span>
    <div class="remover" role="button" tabindex="0" aria-label="Remover item"></div>
  `;
  item.querySelector('.texto').textContent = texto;
  return item;
}

function adicionarItem() {
  const valor = input.value.trim();
  if (!valor) return;
  lista.appendChild(criarItem(valor));
  input.value = '';
  input.focus();
}


addBtn.addEventListener('click', adicionarItem);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') adicionarItem();
});


lista.addEventListener('click', (e) => {
  const btn = e.target.closest('.remover');
  if (!btn) return;
  btn.closest('.item').remove();
});

lista.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.remover')) {
    e.preventDefault();
    e.target.closest('.item').remove();
  }
});
